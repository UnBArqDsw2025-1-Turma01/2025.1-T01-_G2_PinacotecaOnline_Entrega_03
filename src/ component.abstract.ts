import { Mediator } from './ mediator.interface';

export abstract class Component {
  constructor(protected mediator: Mediator) {}

  abstract action(): void;
}
