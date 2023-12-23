import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { QueueService } from './queue/queue.service';

@Module({
  imports: [],
  providers: [AppService, QueueService],
  controllers: [AppController],
})
export class AppModule {}
