import { Injectable } from '@nestjs/common';
import { DefaultAzureCredential } from '@azure/identity';
import { QueueClient } from '@azure/storage-queue';

@Injectable()
export class QueueService {
    async getSingleMessage(): Promise<BasicMessage> {
        const queueClient = new QueueClient(
            "https://spotifystoragequeues.queue.core.windows.net/spotify-artist-1",
            new DefaultAzureCredential()
        );

        const response = await queueClient.receiveMessages({
            numberOfMessages: 1,
        });

        const message = response.receivedMessageItems[0];
        if (!message) {
            return null;
        }
        await queueClient.deleteMessage(message.messageId, message.popReceipt);
        return JSON.parse(message.messageText)
    }
}
