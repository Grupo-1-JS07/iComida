import { Module } from '@nestjs/common';
import { Restaurante } from './entities/restaurante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteController } from './controllers/restaurante.controller';
import { RestauranteService } from './services/restaurante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurante])],
  controllers: [RestauranteController],
  providers: [RestauranteService],
})
export class RestauranteModule {}
