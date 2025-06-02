import { NestFactory } from '@nestjs/core';
import { Common } from './ common.component';
import { UserActionMediator } from './ user-action.mediator';
import { Admin } from './admin.component';
import { AppModule } from './app.module';
import { Artist } from './artist.component';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const mediator = new UserActionMediator();

  const user = new Common(mediator);
  const artist = new Artist(mediator);
  const admin = new Admin(mediator);

  user.createComment();
  user.createLike();
  artist.createReport();
  admin.approveReport();
  admin.rejectReport();
}
bootstrap();
