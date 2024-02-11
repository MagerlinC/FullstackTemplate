import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';
import { ExampleEntity } from './Entities/example.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleRepository: Repository<ExampleEntity>,
  ) {}

  getExamples(): Promise<ExampleEntity[]> {
    return this.exampleRepository.find();
  }

  createExample(req: PostExampleRequest): Promise<ExampleEntity> {
    const now = new Date();
    const example = this.exampleRepository.create({ ...req, createdAt: now });
    return this.exampleRepository.save(example);
  }
}
