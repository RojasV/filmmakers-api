import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const configService = app.get(ConfigService);
  console.log('JWT_SECRET:', configService.get('JWT_SECRET')); 
  
  await app.listen(3001);
  console.log(`Application is running on: http://localhost:3001`);
}

bootstrap();
