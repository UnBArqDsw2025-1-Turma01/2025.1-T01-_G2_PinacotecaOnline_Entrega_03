import { Module } from '@nestjs/common';
import { CommentService } from './services/comment.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CommentService],
})
export class AppModule {}
