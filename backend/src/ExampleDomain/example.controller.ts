import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { IExampleController } from 'abstractions/ExampleDomain/Controller';
import { PostExampleRequest } from 'abstractions/ExampleDomain/Post';

@Controller()
export class ExampleController implements IExampleController {
  constructor(private readonly appService: ExampleService) {}

  @Get()
  async getExamples() {
    return this.appService.getExamples();
  }

  @Post()
  async postExample(@Body() req: PostExampleRequest) {
    return this.appService.createExample(req);
  }
}
