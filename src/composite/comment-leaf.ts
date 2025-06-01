import { Comment } from './comment.interface';

export class CommentLeaf implements Comment {
  constructor(private content: string) {}

  showDetails(indent: string = ''): void {
    console.log(`${indent}Comentário: ${this.content}`);
  }
}
