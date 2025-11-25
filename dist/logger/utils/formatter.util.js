"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLogMessage = formatLogMessage;
function formatLogMessage(level, serviceName, message, context, timestamp = true) {
    const time = timestamp ? `[${new Date().toISOString()}]` : '';
    const ctx = context ? `[${context}]` : '';
    const svc = serviceName ? `[${serviceName}]` : '';
    return `${time} ${level.toUpperCase()} ${svc} ${ctx} ${message}`;
}
//# sourceMappingURL=formatter.util.js.map