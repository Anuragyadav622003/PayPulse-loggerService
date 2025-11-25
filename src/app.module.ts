// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { LoggerModule } from './logger/logger.module';

// @Module({
//   imports: [LoggerModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// src/app.module.ts (optional)
import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule.forRoot({ serviceName: 'LoggerService', level: 'debug' }),
  ],
})
export class AppModule {}
