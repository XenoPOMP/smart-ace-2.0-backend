import { Injectable } from '@nestjs/common';
import { ArrayType, AsyncReturnType } from '@xenopomp/advanced-types';

import { SqlSort } from '@/assets/types/SqlSort';
import { CreateContactDto } from '@/contacts/create-contact.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ContactsService {
	constructor(readonly prisma: PrismaService) {}

	async create({ name, email }: CreateContactDto) {
		await this.prisma.contact.create({
			data: {
				name,
				email,
			},
		});
	}

	async get(
		orderBy?: keyof ArrayType<
			AsyncReturnType<typeof this.prisma.contact.findMany>
		>,
		order?: SqlSort
	) {
		return this.prisma.contact.findMany({
			where: {
				email: {
					not: null,
				},
			},

			orderBy: {
				[orderBy]: order,
			},
		});
	}

	async delete(ids: number[]) {
		await this.prisma.contact.deleteMany({
			where: {
				id: {
					in: ids,
				},
			},
		});
	}
}
