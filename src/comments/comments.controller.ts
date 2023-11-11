import { Body, Controller, Delete, Get, Patch, Query } from '@nestjs/common';

import { CommentsDto } from '@/comments/comments.dto';

import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@Get()
	async getComments(@Query('serviceId') serviceId?: string) {
		return this.commentsService.getComments({
			serviceId,
		});
	}

	@Patch()
	async createNewComment(@Body() body: CommentsDto) {
		await this.commentsService.create(body);
	}

	// @Delete()
	// async deleteComment(@Body() body: { id: number }) {
	// 	await this.commentsService.delete(body.id);
	// }
}
