import { Module } from '@nestjs/common';
import { LaboratorioServico } from './laboratorio.servico';
import { LaboratorioControladora } from './laboratorio.controladora';
import { LaboratorioEntidade } from './laboratorio.entidade';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExameEntidade } from '../exame/exame.entidade';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratorioEntidade, ExameEntidade])],
  controllers: [LaboratorioControladora],
  providers: [LaboratorioServico],
})
export class LaboratorioModulo {}
