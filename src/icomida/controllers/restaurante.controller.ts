import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../entities/restaurante.entity';

@Controller('/restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Restaurante[]> {
    return this.restauranteService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Restaurante> {
    return this.restauranteService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param('nome') nome: string): Promise<Restaurante[]> {
    return this.restauranteService.findAllByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() restaurante: Restaurante): Promise<Restaurante> {
    return this.restauranteService.create(restaurante);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() restaurante: Restaurante): Promise<Restaurante> {
    return this.restauranteService.update(restaurante);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.restauranteService.delete(id);
  }
}
