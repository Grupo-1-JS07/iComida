import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_restaurante' })
export class Restaurante {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  endereco: string;

  @IsNotEmpty()
  @Column({ length: 14, nullable: false })
  cnpj: string;

  @IsNotEmpty()
  @Column({ length: 11, nullable: false })
  telefone: string;
}
