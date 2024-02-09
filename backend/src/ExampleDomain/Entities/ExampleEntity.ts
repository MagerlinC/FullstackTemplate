import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: NestJS types missing in tsconfig?
@Entity()
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;
}
