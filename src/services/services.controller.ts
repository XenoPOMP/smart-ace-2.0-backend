import { Body, Controller, Get } from '@nestjs/common';

import { AverageRatingDto } from '@/services/average-rating.dto';

import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Get('rating/average')
	async averageRating(@Body() body: AverageRatingDto): Promise<number> {
		return await this.servicesService.averageRating(body);
	}
}
