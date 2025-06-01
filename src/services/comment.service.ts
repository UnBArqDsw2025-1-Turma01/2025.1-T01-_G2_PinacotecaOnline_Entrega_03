import { Injectable, OnModuleInit } from '@nestjs/common';
import { CommentComposite } from 'src/composite/comment-composite';
import { CommentLeaf } from 'src/composite/comment-leaf';
import { Comment } from 'src/composite/comment.interface';

@Injectable()
export class CommentService implements OnModuleInit {
  buildCommentTree() {
    const rootArtTitle = 'Arte: "Nascer do Sol"';

    const comment1 = new CommentComposite('Comentário: "Amei a obra!"');
    const comment2 = new CommentLeaf('Comentário: "Muito bonito!"');

    const reply11 = new CommentLeaf(
      'Resposta 1.1: "Também achei As cores estão incrível!"',
    );
    const reply12 = new CommentComposite(
      'Resposta 1.2: "As cores estão maravilhosas"',
    );
    const reply121 = new CommentLeaf(
      'Resposta 1.2.1: "Concordo, são perfeitas!"',
    );

    reply12.add(reply121);
    comment1.add(reply11);
    comment1.add(reply12);

    const comments: Comment[] = [comment1, comment2];

    console.log(rootArtTitle);

    comments.forEach((comment) => comment.showDetails('  '));
  }

  onModuleInit() {
    this.buildCommentTree();
  }
}
