import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurante } from './icomida/entities/restaurante.entity';
import { RestauranteModule } from './icomida/restaurante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_icomida',
      entities: [Restaurante],
      synchronize: true,
      logging: true,
    }),
    RestauranteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
