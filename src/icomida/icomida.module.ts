import { Module } from '@nestjs/common';
import { Restaurante } from './entities/icomida.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurante])],
  controllers: [],
  providers: [],
})
export class IcomidaModule {}
