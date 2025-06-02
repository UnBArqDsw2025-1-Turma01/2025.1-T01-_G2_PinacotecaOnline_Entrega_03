import { Component } from './ component.abstract';

export class Artist extends Component {
  action(): void {
    this.createReport();
  }

  createReport(): void {
    this.mediator.notify(this, 'createReport');
  }
}
