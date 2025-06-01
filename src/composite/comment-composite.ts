import { Comment } from './comment.interface';

export class CommentComposite implements Comment {
  private children: Comment[] = [];

  constructor(private content: string) {}

  add(comment: Comment): void {
    this.children.push(comment);
  }

  remove(comment: Comment): void {
    this.children = this.children.filter((c) => c !== comment);
  }

  getChildren(): Comment[] {
    return this.children;
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}Comentário: ${this.content}`);
    this.children.forEach((child) => child.showDetails(indent + '  '));
  }
}
