import { Injectable, Query } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Primitive, RecordKey } from '@xenopomp/advanced-types';

import { CommentsDto } from '@/comments/comments.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CommentsService {
	constructor(private readonly prisma: PrismaService) {}

	async getComments(query?: Partial<Record<'serviceId', string>>) {
		return this.prisma.comment.findMany({
			where: {
				serviceId: Number(query.serviceId),
			},
		});
	}

	async create(body: CommentsDto) {
		await this.prisma.comment.create({
			data: {
				...body,
			},
		});
	}

	async delete(id: number) {
		await this.prisma.comment.delete({
			where: {
				id,
			},
		});
	}
}
