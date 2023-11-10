import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentsService {
	async getComments() {
		const client = new PrismaClient();
		await client.$connect();

		return client.comment.findMany();
	}
}
