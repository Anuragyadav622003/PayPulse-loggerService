"use strict";
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { LoggerModule } from './logger/logger.module';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// @Module({
//   imports: [LoggerModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
// src/app.module.ts (optional)
const common_1 = require("@nestjs/common");
const logger_module_1 = require("./logger/logger.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            logger_module_1.LoggerModule.forRoot({ serviceName: 'LoggerService', level: 'debug' }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map