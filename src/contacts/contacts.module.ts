import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
	controllers: [ContactsController],
	providers: [ContactsService],
	imports: [PrismaModule],
})
export class ContactsModule {}
