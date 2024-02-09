import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetExampleResponse } from 'abstractions/ExampleDomain/Get';
import { PostExampleRequest } from 'abstractions/ExampleDomain/Post';
import { ExampleEntity } from './Entities/ExampleEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleRepository: Repository<ExampleEntity>,
  ) {}

  getExamples(): Promise<GetExampleResponse> {
    return this.exampleRepository.find();
  }

  createExample(req: PostExampleRequest): Promise<ExampleEntity> {
    const example = this.exampleRepository.create(req);
    return this.exampleRepository.save(example);
  }
}
