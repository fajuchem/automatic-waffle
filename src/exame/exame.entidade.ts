import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsBoolean, IsEnum, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoDeExameEnum } from './tipo-de-exame.enum';
import { LaboratorioEntidade } from '../laboratorio/laboratorio.entidade';

@Entity()
export class ExameEntidade {
  @ApiProperty()
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @ApiProperty()
  @Column()
  @IsString()
  readonly nome: string;

  @ApiProperty({ type: 'enum', enum: TipoDeExameEnum })
  @Column()
  @IsEnum(TipoDeExameEnum)
  readonly tipo: TipoDeExameEnum;

  @ApiProperty()
  @Column({ default: true })
  @IsBoolean()
  readonly status: boolean;

  @ManyToMany((type) => LaboratorioEntidade, (e) => e.exames, {
    eager: false,
  })
  laboratorios: LaboratorioEntidade[];
}
