import { Injectable, Optional } from '@nestjs/common';
import { LoggerConfig } from './interfaces/logger-config.interface';
import { formatLogMessage } from './utils/formatter.util';

@Injectable()
export class LoggerService {
  private level: 'debug' | 'info' | 'warn' | 'error';
  private context?: string;
  private serviceName?: string;
  private timestamp: boolean;
  private centralized: boolean;

  constructor(@Optional() config?: LoggerConfig) {
    this.level = config?.level || 'debug';
    this.context = config?.context;
    this.serviceName = config?.serviceName || 'UnknownService';
    this.timestamp = config?.timestamp ?? true;
    this.centralized = config?.centralized ?? false;
  }

  private log(level: string, message: string) {
    const formatted = formatLogMessage(
      level,
      this.serviceName || 'UnknownService',
      message,
      this.context,
      this.timestamp,
    );

    // Local console logging
    switch (level) {
      case 'debug': console.debug(formatted); break;
      case 'info': console.info(formatted); break;
      case 'warn': console.warn(formatted); break;
      case 'error': console.error(formatted); break;
    }

    // Centralized logging (optional)
    if (this.centralized) {
      this.sendToCentralServer(level, message);
    }
  }

  debug(message: string) { if (['debug'].includes(this.level)) this.log('debug', message); }
  info(message: string) { if (['debug','info'].includes(this.level)) this.log('info', message); }
  warn(message: string) { if (['debug','info','warn'].includes(this.level)) this.log('warn', message); }
  error(message: string) { this.log('error', message); }

  private sendToCentralServer(level: string, message: string) {
    // TODO: integrate with Kafka, Redis, or ELK stack for centralized logging
    // Example: console.log('Send to central server:', level, message);
  }
}
