"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringRemoveCommandFromParams = void 0;
const stringRemoveCommandFromParams = (message) => {
    const array = message.content.split(' ');
    array.shift();
    return `${array.join(" ")}`;
};
exports.stringRemoveCommandFromParams = stringRemoveCommandFromParams;
//# sourceMappingURL=stringRemoveCommandFromParam.js.map