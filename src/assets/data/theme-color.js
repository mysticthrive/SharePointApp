"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAccumulationChartTheme = exports.loadChartTheme = exports.pointFluent2HighContrastColors = exports.pointFluent2DarkColors = exports.pointFluent2Colors = exports.pointMaterial3DarkColors = exports.pointMaterial3Colors = exports.pointTailwind3DarkColors = exports.pointTailwind3Colors = exports.pointTailwindDarkColors = exports.pointTailwindColors = exports.pointFluentDarkColors = exports.pointFluentColors = exports.pointBootstrap5DarkColors = exports.pointBootstrap5Colors = exports.pointHighContrastColors = exports.pointBootstrapColors = exports.pointFabricColors = exports.pointMaterialDarkColors = exports.pointMaterialColors = exports.bubbleFluent2DarkColors = exports.bubbleFluent2HighContrastColors = exports.bubbleFluent2Colors = exports.bubbleMaterial3DarkColors = exports.bubbleMaterial3Colors = exports.bubbleTailwind3DarkColors = exports.bubbleTailwind3Colors = exports.bubbleTailwindDarkColors = exports.bubbleTailwindColors = exports.bubblePointFluentDarkColors = exports.bubblePointFluentColors = exports.bubblePointBootstrap5DarkColors = exports.bubblePointBootstrap5Colors = exports.bubblePointHighContrastColors = exports.bubblePointBootstrapColors = exports.bubblePointFabricColors = exports.bubblePointMaterialDarkColors = exports.bubblePointMaterialColors = exports.keyBootstrapdarkColors = exports.keyBootstrap4Colors = exports.keyFabricDark = exports.fluent2HighContrastColors = exports.fluent2DarkColors = exports.fluent2Colors = exports.fluentDarkColors = exports.fluentColors = exports.highContrastColors = exports.bootstrapColors = exports.fabricColors = exports.materialColors = void 0;
exports.piePointRender = exports.roundedPointRender = exports.roundedCornnerPointRender = exports.donutPointRender = exports.bubblePointRender = exports.pointRenderEvent = exports.accpatternPointRender = exports.funnelPointRender = void 0;
/**
 * Initialize the Theme colors
 */
exports.materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
    '#ea7a57', '#404041', '#00bdae'];
exports.fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
    '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
exports.bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
exports.highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
exports.fluentColors = ['#614570', '#4C6FB1', '#CC6952', '#3F579A', '#4EA09B', '#6E7A89', '#D4515C', '#E6AF5D', '#639751',
    '#9D4D69'];
exports.fluentDarkColors = ['#8AB113', '#2A72D5', '#43B786', '#584EC6', '#E85F9C', '#6E7A89', '#EA6266', '#EBA844', '#26BC7A',
    '#BC4870'];
exports.fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
    "#C19C00"];
exports.fluent2DarkColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
    "#0B6A0B", "#C19C00"];
exports.fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
    "#0B6A0B", "#C19C00"];
exports.keyFabricDark = ["#4472C4", "#ED7D31", "#FFC000", "#70AD47"];
exports.keyBootstrap4Colors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6', '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
exports.keyBootstrapdarkColors = ["#a16ee5", "#f7ce69", "#55a5c2", "#7ddf1e", "#ff6ea6", "#7953ac", "#b99b4f", "#407c92", "#5ea716", "#b91c52"];
exports.bubblePointMaterialColors = ['rgba(0, 189, 174, 0.5)', "rgba(64, 64, 65, 0.5)", "rgba(53, 124, 210, 0.5)", "rgba(229, 101, 144, 0.5)", "rgba(248, 184, 131, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(221, 138, 189, 0.5)",
    "rgba(127, 132, 232, 0.5)", "rgba(123, 180, 235, 0.5)", "rgba(234, 122, 87, 0.5)", "rgba(64, 64, 65, 0.5)", "rgba(0, 189, 174, 0.5)"];
exports.bubblePointMaterialDarkColors = ["rgba(158, 203, 8, 0.5)", "rgba(86, 174, 255, 0.5)", "rgba(197, 122, 255, 0.5)", "rgba(97, 234, 169, 0.5)", "rgba(235, 187, 62, 0.5)", "rgba(244, 92, 92, 0.5)", "rgba(138, 119, 255, 0.5)",
    "rgba(99, 199, 255, 0.5)", "rgba(255, 132, 176, 0.5)", "rgba(247, 201, 40, 0.5)"];
exports.bubblePointFabricColors = ["rgba(68, 114, 196, 0.5)", "rgba(237, 125, 49, 0.5)", "rgba(255, 192, 0, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(91, 155, 213, 0.5)", "rgba(193, 193, 193, 0.5)", "rgba(111, 111, 226, 0.5)",
    "rgba(226, 105, 174, 0.5)", "rgba(158, 72, 14, 0.5)", "rgba(153, 115, 0, 0.5)", "rgba(68, 114, 196, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(255, 192, 0, 0.5)", "rgba(237, 125, 49, 0.5)"];
exports.bubblePointBootstrapColors = ["rgba(161, 110, 229, 0.5)", "rgba(247, 206, 105, 0.5)", "rgba(85, 165, 194, 0.5)", "rgba(125, 223, 30, 0.5)", "rgba(255, 110, 166, 0.5)", "rgba(121, 83, 172, 0.5)",
    "rgba(185, 155, 79, 0.5)", "rgba(64, 124, 146, 0.5)", "rgba(94, 167, 22, 0.5)", "rgba(185, 28, 82, 0.5)"];
exports.bubblePointHighContrastColors = ["rgba(121, 236, 228, 0.5)", "rgba(233, 130, 114, 0.5)", "rgba(223, 230, 182, 0.5)", "rgba(198, 231, 115, 0.5)", "rgba(186, 152, 255, 0.5)", "rgba(250, 131, 195, 0.5)", "rgba(0, 194, 122, 0.5)",
    "rgba(67, 172, 239, 0.5)", "rgba(214, 129, 239, 0.5)", "rgba(216, 188, 110, 0.5)"];
exports.bubblePointBootstrap5Colors = ['rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(25, 135, 84, 0.5)', 'rgba(13, 202, 240, 0.5)', 'rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)'];
exports.bubblePointBootstrap5DarkColors = ['rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(25, 135, 84, 0.5)', 'rgba(13, 202, 240, 0.5)', 'rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)'];
exports.bubblePointFluentColors = ["rgba(97, 69, 112, 0.5)", "rgba(76, 111, 177, 0.5)", "rgba(204, 105, 82, 0.5)", "rgba(63, 87, 154, 0.5)", "rgba(78, 160, 155, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(212, 81, 92, 0.5)",
    "rgba(230, 175, 93, 0.5)", "rgba(99, 151, 81, 0.5)", "rgba(157, 77, 105, 0.5)"];
exports.bubblePointFluentDarkColors = ["rgba(138, 177, 19, 0.5)", "rgba(42, 114, 213, 0.5)", "rgba(67, 183, 134, 0.5)", "rgba(88, 78, 198, 0.5)", "rgba(232, 95, 156, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(234, 98, 102, 0.5)",
    "rgba(235, 168, 68, 0.5)", "rgba(38, 188, 122, 0.5)", "rgba(188, 72, 112, 0.5)"];
exports.bubbleTailwindColors = ["rgba(90, 97, 246, 0.5)", "rgba(101, 163, 13, 0.5)", "rgba(51, 65, 85, 0.5)", "rgba(20, 184, 166, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(3, 105, 161, 0.5)", "rgba(249, 115, 22, 0.5)",
    "rgba(147, 51, 234, 0.5)", "rgba(245, 158, 11, 0.5)", "rgba(21, 128, 61, 0.5)"];
exports.bubbleTailwindDarkColors = ["rgba(139, 92, 246, 0.5)", "rgba(34, 211, 238, 0.5)", "rgba(248, 113, 113, 0.5)", "rgba(74, 222, 128, 0.5)", "rgba(232, 121, 249, 0.5)", "rgba(252, 211, 77, 0.5)", "rgba(249, 115, 22, 0.5)",
    "rgba(45, 212, 191, 0.5)", "rgba(244, 114, 182, 0.5)", "rgba(16, 185, 129, 0.5)"];
exports.bubbleTailwind3Colors = ["rgba(47, 64, 116, 0.5)", "rgba(3, 180, 180, 0.5)", "rgba(13, 114, 222, 0.5)", "rgba(255, 87, 51, 0.5)", "rgba(214, 51, 132, 0.5)", "rgba(243, 156, 18, 0.5)", "rgba(239, 41, 31, 0.5)", "rgba(145, 200, 34, 0.5)", "rgba(47, 64, 116, 0.5)", "rgba(3, 180, 180, 0.5)"];
exports.bubbleTailwind3DarkColors = ["rgba(128, 41, 241, 0.5)", "rgba(26, 188, 156, 0.5)", "rgba(13, 114, 222, 0.5)", "rgba(255, 87, 51, 0.5)", "rgba(214, 51, 132, 0.5)", "rgba(243, 156, 18, 0.5)", "rgba(239, 41, 31, 0.5)", "rgba(145, 200, 34, 0.5)", "rgba(128, 41, 241, 0.5)", "rgba(26, 188, 156, 0.5)"];
exports.bubbleMaterial3Colors = ["rgba(99, 85, 199, 0.5)", "rgba(0, 174, 224, 0.5)", "rgba(255, 180, 0, 0.5)", "rgba(247, 82, 63, 0.5)", "rgba(150, 60, 112, 0.5)", "rgba(253, 116, 0, 0.5)", "rgba(75, 224, 188, 0.5)", "rgba(33, 150, 245, 0.5)", "rgba(222, 61, 138, 0.5)", "rgba(22, 47, 136, 0.5)"];
exports.bubbleMaterial3DarkColors = ["rgba(78, 170, 255, 0.5)", "rgba(250, 78, 171, 0.5)", "rgba(255, 245, 0, 0.5)", "rgba(23, 234, 88, 0.5)", "rgba(56, 255, 231, 0.5)", "rgba(255, 158, 69, 0.5)", "rgba(179, 243, 47, 0.5)", "rgba(185, 60, 228, 0.5)", "rgba(252, 86, 100, 0.5)", "rgba(155, 85, 255, 0.5)"];
exports.bubbleFluent2Colors = ["rgba(98, 0, 238, 0.5)", "rgba(9, 175, 116, 0.5)", "rgba(0, 118, 229, 0.5)", "rgba(203, 53, 135, 0.5)", "rgba(231, 145, 15, 0.5)", "rgba(3, 100, 222, 0.5)", "rgba(102, 205, 21, 0.5)", "rgba(243, 169, 60, 0.5)",
    "rgba(16, 124, 16, 0.5)", "rgba(193, 156, 0, 0.5)"];
exports.bubbleFluent2HighContrastColors = ["rgba(155, 180, 73, 0.5)", "rgba(42, 114, 213, 0.5)", "rgba(67, 183, 134, 0.5)", "rgba(63, 87, 154, 0.5)", "rgba(88, 78, 198, 0.5)", "rgba(232, 95, 156, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(234, 98, 102, 0.5)",
    "rgba(11, 106, 11, 0.5)", "rgba(193, 156, 0, 0.5)"];
exports.bubbleFluent2DarkColors = ["rgba(155, 180, 73, 0.5)", "rgba(42, 114, 213, 0.5)", "rgba(67, 183, 134, 0.5)", "rgba(63, 87, 154, 0.5)", "rgba(88, 78, 198, 0.5)", "rgba(232, 95, 156, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(234, 98, 102, 0.5)",
    "rgba(11, 106, 11, 0.5)", "rgba(193, 156, 0, 0.5)"];
exports.pointMaterialColors = ["#00bdae", "#404041", "#357cd2", "#e56590", "#f8b883", "#70ad47", "#dd8abd", "#7f84e8", "#7bb4eb",
    "#ea7a57", "#404041", "#00bdae"];
exports.pointMaterialDarkColors = ["#9ECB08", "#56AEFF", "#C57AFF", "#61EAA9", "#EBBB3E", "#F45C5C", "#8A77FF", "#63C7FF", "#FF84B0",
    "#F7C928"];
exports.pointFabricColors = ["#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e",
    "#997300", "#4472c4", "#70ad47", "#ffc000", "#ed7d31"];
exports.pointBootstrapColors = ["#a16ee5", "#f7ce69", "#55a5c2", "#7ddf1e", "#ff6ea6", "#7953ac", "#b99b4f", "#407c92", "#5ea716",
    "#b91c52"];
exports.pointHighContrastColors = ["#79ECE4", "#E98272", "#DFE6B6", "#C6E773", "#BA98FF", "#FA83C3", "#00C27A", "#43ACEF", "#D681EF",
    "#D8BC6E"];
exports.pointBootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545',
    '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2'];
exports.pointBootstrap5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545',
    '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2'];
exports.pointFluentColors = ["#614570", "#4C6FB1", "#CC6952", "#3F579A", "#4EA09B", "#6E7A89", "#D4515C", "#E6AF5D", "#639751",
    "#9D4D69"];
exports.pointFluentDarkColors = ["#8AB113", "#2A72D5", "#43B786", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#EBA844", "#26BC7A",
    "#BC4870"];
exports.pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
exports.pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
exports.pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
exports.pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
exports.pointMaterial3Colors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
exports.pointMaterial3DarkColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
exports.pointFluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10", "#C19C00"];
exports.pointFluent2DarkColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#0B6A0B", "#C19C00"];
exports.pointFluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#0B6A0B", "#C19C00"];
var loadChartTheme = function (args, isGradient) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    var formattedTheme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    if (args) {
        args.chart.theme = formattedTheme;
        return isGradient ? selectedTheme : args.chart.theme;
    }
    else if (isGradient && !args) {
        return selectedTheme;
    }
    return formattedTheme;
};
exports.loadChartTheme = loadChartTheme;
var loadAccumulationChartTheme = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    var formattedTheme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    if (args) {
        args.accumulation.theme = formattedTheme;
        return args.chart.theme;
    }
    else {
        return formattedTheme;
    }
};
exports.loadAccumulationChartTheme = loadAccumulationChartTheme;
var funnelPointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = exports.pointFabricColors[0];
    }
    else if (selectedTheme === 'material-dark') {
        args.fill = exports.pointMaterialDarkColors[0];
        ;
    }
    else if (selectedTheme === 'material') {
        args.fill = exports.pointMaterialColors[0];
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = exports.pointBootstrap5DarkColors[0];
    }
    else if (selectedTheme === 'bootstrap5') {
        args.fill = exports.pointBootstrap5Colors[0];
    }
    else if (selectedTheme === 'bootstrap') {
        args.fill = exports.pointBootstrapColors[0];
    }
    else if (selectedTheme === 'bootstrap4') {
        args.fill = exports.pointBootstrapColors[0];
    }
    else if (selectedTheme === 'bootstrap-dark') {
        args.fill = exports.pointBootstrapColors[0];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = exports.pointHighContrastColors[0];
    }
    else if (selectedTheme === 'fluent-dark') {
        args.fill = exports.pointFluentDarkColors[0];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = exports.pointFluentColors[0];
    }
    else if (selectedTheme === 'tailwind-dark') {
        args.fill = exports.pointTailwindDarkColors[0];
    }
    else if (selectedTheme === 'tailwind') {
        args.fill = exports.pointTailwindColors[0];
    }
    else if (selectedTheme === 'material3-dark') {
        args.fill = exports.pointMaterial3DarkColors[0];
    }
    else if (selectedTheme === 'material3') {
        args.fill = exports.pointMaterial3Colors[0];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = exports.pointFluent2Colors[0];
    }
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = exports.pointFluent2HighContrastColors[0];
    }
    else if (selectedTheme === 'tailwind3-dark') {
        args.fill = exports.pointTailwind3DarkColors[0];
    }
    else if (selectedTheme === 'tailwind3') {
        args.fill = exports.pointTailwind3Colors[0];
    }
    ;
};
exports.funnelPointRender = funnelPointRender;
var accpatternPointRender = function (args) {
    if (args.point.index === 0) {
        args.pattern = 'DiagonalBackward';
    }
    else if (args.point.index === 1) {
        args.pattern = 'DiagonalForward';
    }
    else if (args.point.index === 2) {
        args.pattern = 'HorizontalStripe';
    }
    else if (args.point.index === 3) {
        args.pattern = 'VerticalStripe';
    }
    else if (args.point.index === 4) {
        args.pattern = 'HorizontalDash';
    }
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) {
            args.border.color = '#303030';
        }
        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
        }
        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
        }
        else {
            args.border.color = '#222222';
        }
    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
    }
    else if (selectedTheme.indexOf('fluent2-highcontrast') > -1) {
        args.border.color = '#000000';
    }
    else {
        args.border.color = '#FFFFFF';
    }
};
exports.accpatternPointRender = accpatternPointRender;
var pointRenderEvent = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = exports.pointFabricColors[args.point.index % 10];
        ;
    }
    else if (selectedTheme === 'material-dark') {
        args.fill = exports.pointMaterialDarkColors[args.point.index % 10];
        ;
    }
    else if (selectedTheme === 'material') {
        args.fill = exports.pointMaterialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = exports.pointBootstrap5DarkColors[args.point.index % exports.pointBootstrap5DarkColors.length];
    }
    else if (selectedTheme === 'bootstrap5') {
        args.fill = exports.pointBootstrap5Colors[args.point.index % exports.pointBootstrap5Colors.length];
    }
    else if (selectedTheme === 'bootstrap') {
        args.fill = exports.pointBootstrapColors[args.point.index % exports.pointBootstrapColors.length];
    }
    else if (selectedTheme === 'bootstrap4') {
        args.fill = exports.pointBootstrapColors[args.point.index % exports.pointBootstrapColors.length];
    }
    else if (selectedTheme === 'bootstrap-dark') {
        args.fill = exports.pointBootstrapColors[args.point.index % exports.pointBootstrapColors.length];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = exports.pointHighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent-dark') {
        args.fill = exports.pointFluentDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = exports.pointFluentColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind-dark') {
        args.fill = exports.pointTailwindDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind') {
        args.fill = exports.pointTailwindColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material3-dark') {
        args.fill = exports.pointMaterial3DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material3') {
        args.fill = exports.pointMaterial3Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = exports.pointFluent2Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = exports.pointFluent2HighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind3-dark') {
        args.fill = exports.pointTailwind3DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind3') {
        args.fill = exports.pointTailwind3Colors[args.point.index % 10];
    }
    ;
};
exports.pointRenderEvent = pointRenderEvent;
var bubblePointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme === 'material-dark') {
        args.fill = exports.bubblePointMaterialDarkColors[args.point.index % 10];
        args.border.color = exports.pointMaterialDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = exports.bubblePointMaterialColors[args.point.index % 10];
        args.border.color = exports.pointMaterialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
        args.fill = exports.bubblePointFabricColors[args.point.index % 10];
        args.border.color = exports.pointFabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = exports.bubblePointBootstrap5DarkColors[args.point.index % 10];
        args.border.color = exports.pointBootstrap5DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5') {
        args.fill = exports.bubblePointBootstrap5Colors[args.point.index % 10];
        args.border.color = exports.pointBootstrap5Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent-dark') {
        args.fill = exports.bubblePointFluentDarkColors[args.point.index % 10];
        args.border.color = exports.pointFluentDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = exports.bubblePointFluentColors[args.point.index % 10];
        args.border.color = exports.pointFluentColors[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
        args.fill = exports.bubblePointBootstrapColors[args.point.index % 10];
        args.border.color = exports.pointBootstrapColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind-dark') {
        args.fill = exports.bubbleTailwindDarkColors[args.point.index % 10];
        args.border.color = exports.pointTailwindDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind') {
        args.fill = exports.bubbleTailwindColors[args.point.index % 10];
        args.border.color = exports.pointTailwindColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = exports.bubblePointHighContrastColors[args.point.index % 10];
        args.border.color = exports.pointHighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material3') {
        args.fill = exports.bubbleMaterial3Colors[args.point.index % 10];
        args.border.color = exports.pointMaterial3Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'material3-dark') {
        args.fill = exports.bubbleMaterial3DarkColors[args.point.index % 10];
        args.border.color = exports.pointMaterial3DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = exports.bubbleFluent2Colors[args.point.index % 10];
        args.border.color = exports.pointFluent2Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2-highcontrast') {
        args.fill = exports.bubbleFluent2HighContrastColors[args.point.index % 10];
        args.border.color = exports.pointFluent2HighContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2-dark') {
        args.fill = exports.bubbleFluent2DarkColors[args.point.index % 10];
        args.border.color = exports.pointFluent2DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind3-dark') {
        args.fill = exports.bubbleTailwind3DarkColors[args.point.index % 10];
        args.border.color = exports.pointTailwind3DarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'tailwind3') {
        args.fill = exports.bubbleTailwind3Colors[args.point.index % 10];
        args.border.color = exports.pointTailwind3Colors[args.point.index % 10];
    }
    else {
        args.fill = exports.bubblePointBootstrapColors[args.point.index % 10];
        args.border.color = exports.pointBootstrapColors[args.point.index % 10];
    }
};
exports.bubblePointRender = bubblePointRender;
var seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
var donutPointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme === 'fluent') {
        args.fill = seriesColor[args.point.index % 10];
    }
    else if (selectedTheme === 'bootstrap5') {
        args.fill = seriesColor[args.point.index % 10];
    }
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) {
            args.border.color = '#303030';
        }
        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
        }
        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
        }
        else {
            args.border.color = '#222222';
        }
    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
    }
    else if (selectedTheme.indexOf('fluent2') > -1) {
        args.fill = seriesColor[args.point.index % 10];
    }
    else if (selectedTheme.indexOf('fluent2-highcontrast') > -1) {
        args.fill = seriesColor[args.point.index % 10];
    }
    else {
        args.border.color = '#FFFFFF';
    }
};
exports.donutPointRender = donutPointRender;
var roundedCornnerPointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) {
            args.border.color = '#303030';
        }
        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
        }
        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
        }
        else {
            args.border.color = '#222222';
        }
    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
    }
    else {
        args.border.color = '#FFFFFF';
    }
};
exports.roundedCornnerPointRender = roundedCornnerPointRender;
var roundedPointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme && selectedTheme.indexOf('fabric-dark') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'material') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'bootstrap5') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'bootstrap') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'highcontrast') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'tailwind') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'material3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent2') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'tailwind3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
};
exports.roundedPointRender = roundedPointRender;
var piePointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    if (selectedTheme && selectedTheme.indexOf('fabric-dark') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'material') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap5-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'bootstrap5') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'bootstrap-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'bootstrap') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'highcontrast') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'tailwind') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'material3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "f9fafb";
    }
    else if (selectedTheme === 'material3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'fluent2') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else if (selectedTheme === 'tailwind3-dark') {
        if (args.series.yName == "Rate")
            args.fill = "#f9fafb";
    }
    else if (selectedTheme === 'tailwind3') {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
    else {
        if (args.series.yName == "Rate")
            args.fill = "grey";
    }
};
exports.piePointRender = piePointRender;
