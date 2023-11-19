import { Body, Controller, Delete, Get, Patch, Query } from '@nestjs/common';

import { SqlSort } from '@/assets/types/SqlSort';
import { CreateContactDto } from '@/contacts/create-contact.dto';

import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
	constructor(private readonly contactsService: ContactsService) {}

	@Get()
	async get(
		@Query('orderBy') orderBy?: Parameters<typeof this.contactsService.get>[0],
		@Query('order') order?: SqlSort
	) {
		return this.contactsService.get(orderBy, order);
	}

	@Patch()
	async create(@Body() body: CreateContactDto) {
		await this.contactsService.create(body);
	}

	@Delete()
	async delete(@Body() { ids }: { ids: number[] }) {
		await this.contactsService.delete(ids);
	}
}
