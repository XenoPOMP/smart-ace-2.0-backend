import { Body, Controller, Get, Post } from '@nestjs/common';

import { AverageRatingDto } from '@/services/average-rating.dto';

import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Post('rating/average')
	async averageRating(@Body() body: AverageRatingDto): Promise<number> {
		return await this.servicesService.averageRating(body);
	}
}
