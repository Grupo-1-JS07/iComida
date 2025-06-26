import { Repository } from 'typeorm/repository/Repository';
import { Restaurante } from './../entities/icomida.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike } from 'typeorm/find-options/operator/ILike';
import { DeleteResult } from 'typeorm';

@Injectable()
export class IcomidaService {
  constructor(
    @InjectRepository(Restaurante)
    private restauranteRepository: Repository<Restaurante>,
  ) {}

  async findAll(): Promise<Restaurante[]> {
    return await this.restauranteRepository.find();
  }

  async findById(id: number): Promise<Restaurante> {
    const restaurante = await this.restauranteRepository.findOne({
      where: {
        id,
      },
    });

    if (!restaurante) {
      throw new HttpException(
        'Restaurante não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }
    return restaurante;
  }

  async findAllByNome(nome: string): Promise<Restaurante[]> {
    return await this.restauranteRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(restaurante: Restaurante): Promise<Restaurante> {
    return await this.restauranteRepository.save(restaurante);
  }

  async update(restaurante: Restaurante): Promise<Restaurante> {
    await this.findById(restaurante.id);

    return await this.restauranteRepository.save(restaurante);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.restauranteRepository.delete(id);
  }
}
