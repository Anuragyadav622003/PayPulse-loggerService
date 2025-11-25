"use strict";
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
Object.defineProperty(exports, "__esModule", { value: true });
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
// src/main.ts
const logger_service_1 = require("./logger/logger.service");
const logger = new logger_service_1.LoggerService({ serviceName: 'LoggerService', level: 'debug' });
logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');
//# sourceMappingURL=main.js.map