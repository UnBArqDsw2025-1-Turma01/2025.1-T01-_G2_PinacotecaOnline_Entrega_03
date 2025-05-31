import { Injectable } from '@nestjs/common';
import { Command } from '../command.interface';

@Injectable()
export class CommandInvokerService {
  private history: Command[] = [];

  async run(command: Command): Promise<void> {
    await command.execute();
    this.history.push(command);
  }

  async undo(): Promise<void> {
    const command = this.history.pop();
    if (command && 'undo' in command) {
      await (command as any).undo();
    }
  }
}
