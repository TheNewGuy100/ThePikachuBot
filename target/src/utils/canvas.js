"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyText = void 0;
const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');
    let fontSize = 70;
    do {
        context.font = `${fontSize -= 10}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
};
exports.applyText = applyText;
//# sourceMappingURL=canvas.js.map