import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';

import { CommentsDto } from '@/comments/comments.dto';
import { PrismaService } from '@/prisma/prisma.service';

import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@Get()
	public async getComments() {
		return this.commentsService.getComments();
	}

	@Put()
	public async createNewComment(
		@Body() { username, rating, body }: CommentsDto
	): Promise<void> {
		console.log({
			username,
			rating,
			body,
		});
	}
}
