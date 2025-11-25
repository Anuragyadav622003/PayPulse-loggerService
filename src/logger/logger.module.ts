import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerConfig } from './interfaces/logger-config.interface';

@Module({})
export class LoggerModule {
  static forRoot(config?: LoggerConfig): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useValue: new LoggerService(config),
        },
      ],
      exports: [LoggerService],
    };
  }
}
