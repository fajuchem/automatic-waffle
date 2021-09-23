import { Injectable } from '@nestjs/common';
import { ExameEntidade } from './exame.entidade';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RemoverExameDto } from './dtos/remover-exame.dto';
import { AdicionarExameDto } from './dtos/adicionar-exame.dto';
import { AtualizarExameDto } from './dtos/atualizar-exame.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ExameServico {
  constructor(
    @InjectRepository(ExameEntidade)
    private readonly repositorio: Repository<ExameEntidade>,
  ) {}

  async criar(
    adicionarLaboratorioDtos: AdicionarExameDto[],
  ): Promise<ExameEntidade[]> {
    adicionarLaboratorioDtos.forEach((valor) => delete valor['id']);
    return this.repositorio.save(adicionarLaboratorioDtos);
  }

  async consultar(): Promise<ExameEntidade[]> {
    return this.repositorio.find();
  }

  async atualizar(
    atualizarLaboratorioDto: AtualizarExameDto[],
  ): Promise<ExameEntidade[]> {
    return this.repositorio.save(
      plainToClass(ExameEntidade, atualizarLaboratorioDto),
    );
  }

  async remover(
    removerLaboratorioDto: RemoverExameDto[],
  ): Promise<ExameEntidade[]> {
    return this.repositorio.remove(
      plainToClass(ExameEntidade, removerLaboratorioDto),
    );
  }
}
