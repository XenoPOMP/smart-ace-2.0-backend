import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommentsModule } from './comments/comments.module';
import { ServicesModule } from './services/services.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
	imports: [PrismaModule, CommentsModule, ServicesModule, ContactsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
