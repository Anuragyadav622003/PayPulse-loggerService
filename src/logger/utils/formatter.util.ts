export function formatLogMessage(
  level: string,
  serviceName: string,
  message: string,
  context?: string,
  timestamp: boolean = true,
): string {
  const time = timestamp ? `[${new Date().toISOString()}]` : '';
  const ctx = context ? `[${context}]` : '';
  const svc = serviceName ? `[${serviceName}]` : '';
  return `${time} ${level.toUpperCase()} ${svc} ${ctx} ${message}`;
}
