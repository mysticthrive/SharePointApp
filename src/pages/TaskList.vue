<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import * as XLSX from 'xlsx'

import { useTaskStore } from "../store";
import { addItem } from "../actions/addItem";
import { getItem } from "../actions/getItem";
import { editItem } from "../actions/editItem";
import { deleteItem } from "../actions/deleteItem";
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { getAllItems } from "../actions/getAllItem";

const taskStore = useTaskStore();

const taskRows = ref([]);

const searchText = ref("");

const fileInput = ref(null);

const isImporting = ref(false);
const importProgress = ref(0);
const importTotal = ref(0);
const importCurrent = ref(0);

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  isImporting.value = true;
  importProgress.value = 0;
  importCurrent.value = 0;

  try {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    let jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    const importedTasks = jsonData.map(row => ({
      project_name: String(row['ProjectName'] || ''),
      phase: String(row['Phase'] || ''),
      task: String(row['Task'] || ''),
      sub_task: String(row['SubTask'] || ''),
      description: String(row['Description'] || ''),
      groups: String(row['Groups'] || ''),
      architecture: String(row['Architecture'] || ''),
    }));

    const validTasks = importedTasks.filter(t =>
      t.project_name.trim() &&
      t.phase.trim() &&
      t.task.trim() &&
      t.sub_task.trim()
    );

    importTotal.value = validTasks.length;
    importCurrent.value = 0;

    for (let i = 0; i < validTasks.length; i++) {
      const task = validTasks[i];
      try {
        const res = await addItem("Tasks", task);
        taskStore.addTask({ ...task, ID: res.ID });
        
        importCurrent.value = i + 1;
        importProgress.value = Math.round((importCurrent.value / importTotal.value) * 100);
        
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error("Failed to add task:", task, error);
      }
    }

    event.target.value = '';
    
  } catch (error) {
    console.error("Error importing file:", error);
  } finally {
    setTimeout(() => {
      isImporting.value = false;
      importProgress.value = 0;
      importCurrent.value = 0;
      importTotal.value = 0;
    }, 1000);
  }
};

const newTask = ref({
  project_name: "",
  phase: "",
  task: "",
  sub_task: "",
  description: "",
  groups: "",
  architecture: "",
});

const showAddForm = ref(false);
const newConfirmState = ref(false);
const editingRowKey = ref(null);
const editingColName = ref(null);
const miniLoading = ref(false);

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 10
})

const columns = [
  { name : "selected", align: "center", label: "", field: "selected", style: "width: 10px" },
  { name : "project_name", align: "left", label: "Project Name", field: "project_name", style: "width: 100px" },
  { name : "phase", align: "left", label: "Phase", field: "phase", style: "width: 100px" },
  { name : "task", align: "left", label: "Task", field: "task", style: "width: 100px" },
  { name : "sub_task", align: "left", label: "SubTask", field: "sub_task", style: "width: 100px" },
  { name : "description", align: "left", label: "Description", field: "description", style: "width: 200px" },
  { name : "groups", align: "left", label: "Groups", field: "groups", style: "width: 150px" },
  { name : "architecture", align: "left", label: "Architecture", field: "architecture", style: "width: 100px" },
];

onMounted(() => {
  taskStore.setLoading(true);
  const fields1 = [
    "ID", "project_name", "phase", "task", "sub_task", "description", "groups", "architecture"
  ];

  const fields2 = ["ID", "Title", "phases"];

  getAllItems("Tasks", fields1).then(async res => {
    getItem("Projects", fields2).then(res2 => {
      taskStore.setProjects(res2);
    })
    taskStore.setTasks(res);
    await new Promise(resolve => setTimeout(resolve, 500));
    taskStore.setLoading(false);
  });
});

watch(
  () => taskStore.taskList,
  (source) => {
    taskRows.value = source.map(task => ({
      ...task,
      key: task.ID,
      selected: false,
      isEditing: false
    }));
  },
  { immediate: true, deep: true }
);

const filteredTasks = () => {
  if (!searchText.value) return taskRows.value;

  return taskRows.value.filter(
    (task) =>
      (task.project_name && task.project_name.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.phase && task.phase.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.task && task.task.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.sub_task && task.sub_task.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.description && task.description.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.groups && task.groups.toLowerCase().includes(searchText.value.toLowerCase())) ||
      (task.architecture && task.architecture.toLowerCase().includes(searchText.value.toLowerCase()))
  );
};

const hasSelectedRows = () => {
  return taskRows.value.some((task) => task.selected);
};

const handleSearch = (value) => {
  searchText.value = value;
};

function isFieldInvalid(field, record) {
  return ["project_name", "phase", "task", "sub_task"].includes(field) && (!record[field] || record[field].trim() === "");
}

function isRowValid(record) {
  return ["project_name", "phase", "task", "sub_task"].every(f => record[f] && record[f].trim() !== "");
}

const addNewRow = () => {
  showAddForm.value = true;

  newTask.value = {
    project_name: "",
    phase: "",
    task: "",
    sub_task: "",
    description: "",
    groups: "",
    architecture: "",
  };
};

async function saveNewTask() {
  newConfirmState.value = true;
  if (!isRowValid(newTask.value)) return;

  miniLoading.value = true;
  try {
    const res = await addItem("Tasks", newTask.value);
    taskStore.addTask({
      ...newTask.value,
      ID: res.ID
    });
    showAddForm.value = false;
    newConfirmState.value = false;
  } finally {
    await new Promise(resolve => setTimeout(resolve, 500));
    miniLoading.value = false;
  }
}

function cancelNewTask() {
  showAddForm.value = false;
  newConfirmState.value = false;
}

const deleteSelectedRows = () => {
  const selectedIds = taskRows.value.filter(task => task.selected).map(task => task.ID);
  deleteItem("Tasks", selectedIds).then(res => {
    taskStore.deleteTasks(selectedIds);
  })
};

const startEditing = (record, colName) => {
  taskRows.value.forEach((task) => {
    if (task !== record) {
      task.isEditing = false;
    }
  });
  record.isEditing = true;
  record.originalData = { ...record };
  editingRowKey.value = record.key;
  editingColName.value = colName;
};

const saveRow = (record) => {
  if (!isRowValid(record)) return;

  const data = {
    ID: record.ID,
    project_name: record.project_name,
    phase: record.phase,
    task: record.task,
    sub_task: record.sub_task,
    description: record.description,
    groups: record.groups,
    architecture: record.architecture,
  };

  editItem("Tasks", record.ID, data).then(res => {
    taskStore.editTask(data);
  })
  editingRowKey.value = null;
  editingColName.value = null;
};

const handleKeyDown = (event, record) => {
  if (event.key === "Enter") {
    saveRow(record);
  } else if (event.key === "Escape") {
    if (record.originalData) {
      Object.assign(record, record.originalData);
      delete record.originalData;
    }
    record.isEditing = false;
    editingRowKey.value = null;
    editingColName.value = null;
  }
};

const cancelAllEditing = () => {
  taskRows.value.forEach((task) => {
    if (task.isEditing) {
      if (task.originalData) {
        Object.assign(task, task.originalData);
        delete task.originalData;
      }
      task.isEditing = false;
    }
  });
  editingRowKey.value = null;
  editingColName.value = null;
};

const handleGlobalClick = (event) => {
  const editingRow = event.target.closest('.editing-row');
  if (!editingRow) {
    cancelAllEditing();
  }
};

onMounted(() => {
  document.addEventListener('click', handleGlobalClick, true);
});

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick, true);
});

const projectOptions = computed(() =>
  taskStore.projectList.map(project => ({
    label: project.Title,
    value: project.Title
  }))
);

const phaseOptions = computed(() => {
  const project = taskStore.projectList.find(
    p => p.Title === newTask.value.project_name
  );
  if (!project || !project.phases) return [];
  return project.phases.split(",").map(phase => ({
    label: phase.trim(),
    value: phase.trim()
  }));
});

function handleProjectChange(val) {
  newTask.value.project_name = val;
  newTask.value.phase = ""; // Reset phase when project changes
}

function handleEditProjectChange(val, row) {
  row.project_name = val;
  row.phase = "";
}

</script>

<template>
  <q-card class="tasklist-body">
    <LoadingSpinner :showing="taskStore.loading" text="Loading tasks...">
      <div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0;
          "
        >
          <div style="flex: 1; max-width: 300px">
            <q-input white dense outlined rounded placeholder="Search tasks..." @search="handleSearch" style="width: 100%" v-model="searchText" class="q-ml-md" :disable="isImporting">
              <template v-slot:append>
                <q-icon v-if="searchText === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
              </template>
            </q-input>
          </div>
          <div>
            <q-btn
              color="primary"
              icon="add"
              @click="addNewRow"
              style="margin-right: 8px"
              :disable="isImporting"
            >
              <div>Add</div>
            </q-btn>
            <q-btn
              color="red"
              icon="delete"
              @click="deleteSelectedRows"
              :disabled="!hasSelectedRows || isImporting"
              style="margin-right: 8px"
            >
              <div>Delete</div>
            </q-btn>

            <q-btn color="secondary" icon="file_upload" label="Import Excel" @click="$refs.fileInput.click()" :disable="isImporting" />
            <input
              type="file"
              ref="fileInput"
              style="display:none"
              accept=".xls,.xlsx"
              @change="handleFileUpload"
            />
          </div>
        
        </div>
        <div style="text-align: right; margin-bottom: 1rem">
          <a href="/src/assets/data/Tasklist_template.xlsx">Tasklist_template.xlsx</a>
        </div>

        <div v-if="isImporting" class="q-pa-md" style="background: #f0f8ff; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #e3f2fd;">
          <div class="text-h6 q-mb-sm" style="color: #1976d2;">
            <q-icon name="file_download" class="q-mr-sm" />
            Importing Excel Data...
          </div>
          <div class="q-mb-sm">
            <div class="text-caption q-mb-xs">
              Progress: {{ importCurrent }} / {{ importTotal }} tasks ({{ importProgress }}%)
            </div>
            <q-linear-progress
              :value="importProgress / 100"
              color="primary"
              size="md"
              style="height: 8px;"
            />
          </div>
          <div class="text-caption" style="color: #666;">
            Please wait while tasks are being imported...
          </div>
        </div>

        <div v-if="showAddForm" class="q-pa-md" style="background: #f9f9f9; border-radius: 8px; margin-bottom: 1rem;" :class="{ 'disabled-form': isImporting }">
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <q-select
              v-model="newTask.project_name"
              :options="projectOptions"
              label="Project Name"
              dense outlined
              emit-value
              map-options
              :error="isFieldInvalid('project_name', newTask) && newConfirmState"
              :error-message="(isFieldInvalid('project_name', newTask) && newConfirmState) ? 'Required' : ''"
              style="min-width: 150px; max-width: 190px;"
              @update:model-value="handleProjectChange"
            />
            <q-select
              v-model="newTask.phase"
              :options="phaseOptions"
              label="Phase"
              dense outlined
              emit-value
              map-options
              :disable="!newTask.project_name"
              :error="isFieldInvalid('phase', newTask) && newConfirmState"
              :error-message="(isFieldInvalid('phase', newTask) && newConfirmState) ? 'Required' : ''"
              style="min-width: 150px; max-width: 190px;"
            />
            <q-input v-for="field in ['task','sub_task','description','groups','architecture']"
              :key="field"
              v-model="newTask[field]"
              :label="field.charAt(0).toUpperCase() + field.slice(1).replace('_', '')"
              dense outlined :error="isFieldInvalid(field, newTask) && newConfirmState"
              :error-message="(isFieldInvalid(field, newTask) && newConfirmState) ? 'Required' : ''"
              style="min-width: 120px; max-width: 190px;"
            />
          </div>
          <div class="q-mt-md" style="text-align: right; margin-right: 30px;">
            <q-btn color="primary" @click="saveNewTask" :loading="miniLoading">
              <template v-slot:loading>
                <q-spinner size="18px" color="white" />
              </template>
              Save
            </q-btn>
            <q-btn flat @click="cancelNewTask" class="q-ml-sm">Cancel</q-btn>
          </div>
        </div>

        <!-- Table -->
        <q-table
          :columns="columns"
          :rows="filteredTasks()"
          row-key="name"
          bordered
          size="small"
          separator="horizontal"
          style="border: 1px solid #ececec;"
          :pagination="pagination"
          :disable="isImporting"
        >
          <template v-slot:body="props">
            <q-tr :props="props" :key="props.row.key" :class="{ 'editing-row': props.row.isEditing }">
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                <template v-if="col.name === 'selected'">
                  <q-checkbox v-model="props.row.selected" />
                </template>
                <template v-else-if="['project_name', 'phase', 'task', 'sub_task', 'description', 'groups', 'architecture'].includes(col.name)">
                  <template v-if="props.row.isEditing">
                    <template v-if="col.name === 'project_name'">
                      <q-select
                        v-model="props.row.project_name"
                        :options="projectOptions"
                        label="Project Name"
                        dense outlined
                        emit-value
                        map-options
                        :error="isFieldInvalid('project_name', props.row)"
                        :error-message="isFieldInvalid('project_name', props.row) ? 'Required' : ''"
                        style="min-width: 150px; max-width: 190px;"
                        @update:model-value="val => handleEditProjectChange(val, props.row)"
                      />
                    </template>
                    <template v-else-if="col.name === 'phase'">
                      <q-select
                        v-model="props.row.phase"
                        :options="(() => {
                          const project = taskStore.projectList.find(p => p.Title === props.row.project_name);
                          if (!project || !project.phases) return [];
                          return project.phases.split(',').map(phase => ({ label: phase.trim(), value: phase.trim() }));
                        })()"
                        label="Phase"
                        dense outlined
                        emit-value
                        map-options
                        :disable="!props.row.project_name"
                        :error="isFieldInvalid('phase', props.row)"
                        :error-message="isFieldInvalid('phase', props.row) ? 'Required' : ''"
                        style="min-width: 150px; max-width: 190px;"
                      />
                    </template>
                    <template v-else>
                      <q-input
                        ref="inputField"
                        dense
                        :autofocus="editingRowKey === props.row.key && editingColName === col.name"
                        @keydown="(e) => handleKeyDown(e, props.row)"
                        outlined
                        v-model="props.row[col.name]"
                        :error="isFieldInvalid(col.name, props.row)"
                        :error-message="isFieldInvalid(col.name, props.row) ? 'Required' : ''"
                        style="min-width: 120px; max-width: 190px;"
                      />
                    </template>
                  </template>
                  <template v-else>
                    <span
                      @dblclick="startEditing(props.row, col.name)"
                      style="cursor: pointer; display: block; padding: 4px; max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                    >
                      {{ props.row[col.name] !== '' ? props.row[col.name] : '\u00A0' }}
                    </span>
                  </template>
                </template>
                <template v-else>
                  <q-td :props="props">
                    <span
                      @dblclick.stop="startEditing(props.row, col.name)"
                      style="cursor: pointer; display: block; padding: 4px; max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                    >
                      {{ props.row[col.name] !== '' ? props.row[col.name] : '\u00A0' }}
                    </span>
                  </q-td>
                </template>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </LoadingSpinner>
  </q-card>
</template>

<style lang="scss" scoped>
.tasklist-body {
  margin: 2rem;
  padding: 2rem;
  background: #ffffff;
  min-height: 80vh;
  border-radius: 15px;
}

.disabled-form {
  opacity: 0.6;
  pointer-events: none;
}
</style>
