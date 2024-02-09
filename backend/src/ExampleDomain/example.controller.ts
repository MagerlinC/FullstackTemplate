import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { IExampleController } from '@abstractions/ExampleDomain/Controller';
import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';
import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';

@Controller('example')
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
