"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const formatter_util_1 = require("./utils/formatter.util");
let LoggerService = class LoggerService {
    level;
    context;
    serviceName;
    timestamp;
    centralized;
    constructor(config) {
        this.level = config?.level || 'debug';
        this.context = config?.context;
        this.serviceName = config?.serviceName || 'UnknownService';
        this.timestamp = config?.timestamp ?? true;
        this.centralized = config?.centralized ?? false;
    }
    log(level, message) {
        const formatted = (0, formatter_util_1.formatLogMessage)(level, this.serviceName || 'UnknownService', message, this.context, this.timestamp);
        // Local console logging
        switch (level) {
            case 'debug':
                console.debug(formatted);
                break;
            case 'info':
                console.info(formatted);
                break;
            case 'warn':
                console.warn(formatted);
                break;
            case 'error':
                console.error(formatted);
                break;
        }
        // Centralized logging (optional)
        if (this.centralized) {
            this.sendToCentralServer(level, message);
        }
    }
    debug(message) { if (['debug'].includes(this.level))
        this.log('debug', message); }
    info(message) { if (['debug', 'info'].includes(this.level))
        this.log('info', message); }
    warn(message) { if (['debug', 'info', 'warn'].includes(this.level))
        this.log('warn', message); }
    error(message) { this.log('error', message); }
    sendToCentralServer(level, message) {
        // TODO: integrate with Kafka, Redis, or ELK stack for centralized logging
        // Example: console.log('Send to central server:', level, message);
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [Object])
], LoggerService);
//# sourceMappingURL=logger.service.js.map