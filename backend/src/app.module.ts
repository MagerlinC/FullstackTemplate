import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './ExampleDomain/Entities/example.entity';
import { ExampleService } from './ExampleDomain/example.service';
import { ExampleController } from './ExampleDomain/example.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'example_user',
      password: 'example_pass',
      database: 'example_db',
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ExampleEntity]),
  ],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class AppModule {}
