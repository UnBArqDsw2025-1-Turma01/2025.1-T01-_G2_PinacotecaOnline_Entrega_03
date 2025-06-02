import { Component } from './ component.abstract';

export interface Mediator {
  notify(sender: Component, event: string): void;
}
