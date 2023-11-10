import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CommentsDto } from '@/comments/comments.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CommentsService {
	constructor(private readonly prisma: PrismaService) {}

	async getComments() {
		return this.prisma.comment.findMany();
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
