import { Controller, Get } from "@nestjs/common";
import { QueueService } from "./queue/queue.service";

@Controller('')
export class AppController {
    constructor(
        private readonly queueService: QueueService,
    ) {}
    
    @Get()
    async helloWorld() {
        return await this.queueService.getSingleMessage();
    }
}