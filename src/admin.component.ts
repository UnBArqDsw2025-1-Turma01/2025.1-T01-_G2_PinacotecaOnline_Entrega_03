import { Component } from './ component.abstract';

export class Admin extends Component {
  action(): void {
    this.approveReport();
  }

  approveReport(): void {
    this.mediator.notify(this, 'approveReport');
  }

  rejectReport(): void {
    this.mediator.notify(this, 'rejectReport');
  }
}
