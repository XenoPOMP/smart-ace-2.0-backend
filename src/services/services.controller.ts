import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AverageRatingDto } from '@/services/average-rating.dto';

import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Get('rating/average/:id')
	async averageRating(@Param('id') serviceId: string): Promise<number> {
		return await this.servicesService.averageRating(+serviceId);
	}
}
