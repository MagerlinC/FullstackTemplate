import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import {
  EXAMPLE_DOMAIN_PATH,
  IExampleController,
} from '@abstractions/ExampleDomain/Controller';
import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';
import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';

@Controller(EXAMPLE_DOMAIN_PATH)
export class ExampleController implements IExampleController {
  constructor(private readonly appService: ExampleService) {}

  @Get()
  async getExamples(): Promise<ExampleDTO[]> {
    const entities = await this.appService.getExamples();
    return entities.map((entity) => {
      return {
        name: entity.name,
        computedValue: 41 + 1,
      };
    });
  }

  @Post()
  async postExample(@Body() req: PostExampleRequest): Promise<ExampleDTO> {
    const entity = await this.appService.createExample(req);
    return {
      name: entity.name,
    } as ExampleDTO;
  }
}
