import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsBoolean, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ExameEntidade } from '../exame/exame.entidade';

@Entity()
export class LaboratorioEntidade {
  @ApiProperty()
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @ApiProperty()
  @Column()
  @IsString()
  readonly nome: string;

  @ApiProperty()
  @Column()
  @IsString()
  readonly endereco: string;

  @ApiProperty()
  @Column({ default: true })
  @IsBoolean()
  readonly status: boolean;

  @ManyToMany((type) => ExameEntidade, (e) => e.laboratorios, {
    eager: false,
    cascade: true,
  })
  @JoinTable()
  exames: ExameEntidade[];
}
