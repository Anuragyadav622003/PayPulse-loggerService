export interface LoggerConfig {
  level?: 'debug' | 'info' | 'warn' | 'error';
  serviceName?: string;      // Microservice name
  context?: string;          // Module/feature context
  timestamp?: boolean;       // Include timestamp
  centralized?: boolean;     // Optionally send to central server
}
