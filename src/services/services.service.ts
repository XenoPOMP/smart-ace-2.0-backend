import { Injectable } from '@nestjs/common';
import { summary } from '@xenopomp/advanced-utils';

import { PrismaService } from '@/prisma/prisma.service';
import { AverageRatingDto } from '@/services/average-rating.dto';

@Injectable()
export class ServicesService {
	constructor(private readonly prisma: PrismaService) {}

	async averageRating({ serviceId }: AverageRatingDto) {
		const average = await this.prisma.comment.findMany({
			where: {
				serviceId,
			},
			select: {
				rating: true,
			},
		});

		return summary(...average.map(item => item.rating)) / average.length;
	}
}
