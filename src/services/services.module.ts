import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
	controllers: [ServicesController],
	providers: [ServicesService],
	imports: [PrismaModule],
})
export class ServicesModule {}
