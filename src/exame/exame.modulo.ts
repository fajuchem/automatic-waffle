import { Module } from '@nestjs/common';
import { ExameServico } from './exame.servico';
import { ExameControladora } from './exame.controladora';
import { ExameEntidade } from './exame.entidade';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExameEntidade])],
  controllers: [ExameControladora],
  providers: [ExameServico],
})
export class ExameModulo {}
