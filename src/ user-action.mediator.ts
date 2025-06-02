import { Component } from './ component.abstract';
import { Mediator } from './ mediator.interface';

export class UserActionMediator implements Mediator {
  notify(sender: Component, event: string): void {
    console.log(
      `Mediator received event: ${event} from ${sender.constructor.name}`,
    );

    switch (event) {
      case 'createComment':
        console.log('Criação de comentário iniciada');
        break;
      case 'createLike':
        console.log('Criação de curtida iniciada');
        break;
      case 'createReport':
        console.log('Criação de relatório iniciada');
        break;
      case 'approveReport':
        console.log('Aprovando relatório');
        break;
      case 'rejectReport':
        console.log('Rejeitando relatório');
        break;
      default:
        console.log('Evento desconhecido recebido pelo Mediator.');
    }
  }
}
