import { NestFactory } from '@nestjs/core';
import { OwnershipDataModule } from './OwnershipData/ownershipdata.module';

async function bootstrap() {
  const app = await NestFactory.create(OwnershipDataModule);
  await app.listen(3000);
}
bootstrap();
