import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatbotService } from './chatbot.service';
import { ChatPromptDto } from './dto/chat-prompt.dto';

@ApiTags('AI & Chatbot')
@Controller()
export class AiController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post(['chat', 'gemini', 'ai/chat'])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send prompt to Gemini AI Chatbot' })
  @ApiResponse({ status: 200, description: 'AI response returned successfully' })
  @ApiResponse({ status: 400, description: 'Bad request (missing prompt)' })
  async chat(@Body() dto: ChatPromptDto) {
    return this.chatbotService.generateReply(dto.prompt);
  }
}
