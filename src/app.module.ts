import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IcomidaModule } from './icomida/icomida.module';
import { Restaurante } from './icomida/entities/icomida.entity';

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
    IcomidaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
