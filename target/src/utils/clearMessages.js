"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearResponses = void 0;
function clearResponses(message_sent, timeout, clearUserMessage) {
    setTimeout(() => {
        message_sent.delete();
        clearUserMessage ? clearUserMessage.delete() : null;
    }, timeout);
}
exports.clearResponses = clearResponses;
//# sourceMappingURL=clearMessages.js.map