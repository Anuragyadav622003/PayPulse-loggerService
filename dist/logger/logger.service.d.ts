import { LoggerConfig } from './interfaces/logger-config.interface';
export declare class LoggerService {
    private level;
    private context?;
    private serviceName?;
    private timestamp;
    private centralized;
    constructor(config?: LoggerConfig);
    private log;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    private sendToCentralServer;
}
//# sourceMappingURL=logger.service.d.ts.map