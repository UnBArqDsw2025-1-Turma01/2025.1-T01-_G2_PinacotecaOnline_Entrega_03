import { Component } from './ component.abstract';

export class Common extends Component {
  action(): void {
    this.createComment();
  }

  createComment(): void {
    this.mediator.notify(this, 'createComment');
  }

  createLike(): void {
    this.mediator.notify(this, 'createLike');
  }
}
