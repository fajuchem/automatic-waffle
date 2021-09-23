import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LaboratorioEntidade } from './laboratorio.entidade';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RemoverLaboratorioDto } from './dtos/remover-laboratorio.dto';
import { AdicionarLaboratorioDto } from './dtos/adicionar-laboratorio.dto';
import { AtualizarLaboratorioDto } from './dtos/atualizar-laboratorio.dto';
import { plainToClass } from 'class-transformer';
import { AssociarOuDesassociarExameDto } from './dtos/associar-ou-desassociar-exame.dto';
import { ExameEntidade } from '../exame/exame.entidade';

@Injectable()
export class LaboratorioServico {
  constructor(
    @InjectRepository(LaboratorioEntidade)
    private readonly repositorioDoLaboratorio: Repository<LaboratorioEntidade>,
    @InjectRepository(ExameEntidade)
    private readonly repositorioDoExame: Repository<ExameEntidade>,
  ) {}

  async criar(
    adicionarLaboratorioDtos: AdicionarLaboratorioDto[],
  ): Promise<LaboratorioEntidade[]> {
    adicionarLaboratorioDtos.forEach((valor) => delete valor['id']);
    return this.repositorioDoLaboratorio.save(adicionarLaboratorioDtos);
  }

  async consultar(): Promise<LaboratorioEntidade[]> {
    return this.repositorioDoLaboratorio.find();
  }

  async atualizar(
    atualizarLaboratorioDto: AtualizarLaboratorioDto[],
  ): Promise<LaboratorioEntidade[]> {
    return this.repositorioDoLaboratorio.save(
      plainToClass(LaboratorioEntidade, atualizarLaboratorioDto),
    );
  }

  async remover(
    removerLaboratorioDto: RemoverLaboratorioDto[],
  ): Promise<LaboratorioEntidade[]> {
    return this.repositorioDoLaboratorio.remove(
      plainToClass(LaboratorioEntidade, removerLaboratorioDto),
    );
  }

  async obterLaboratorioEExame(
    associarExameDto: AssociarOuDesassociarExameDto,
  ): Promise<[LaboratorioEntidade, ExameEntidade]> {
    const laboratorio = await this.repositorioDoLaboratorio.findOne(
      {
        id: associarExameDto.idDoLaboratorio,
      },
      { relations: ['exames'] },
    );
    const exame = await this.repositorioDoExame.findOne({
      id: associarExameDto.idDoExame,
    });
    if (!laboratorio || !exame) {
      throw new HttpException(
        'Laboratório ou exame não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return [laboratorio, exame];
  }

  async associarExame(associarExameDto: AssociarOuDesassociarExameDto) {
    const [laboratorio, exame] = await this.obterLaboratorioEExame(
      associarExameDto,
    );
    laboratorio.exames.push(exame);
    this.repositorioDoLaboratorio.save(laboratorio);
  }

  async dessasociar(associarExameDto: AssociarOuDesassociarExameDto) {
    const [laboratorio, exame] = await this.obterLaboratorioEExame(
      associarExameDto,
    );

    laboratorio.exames = laboratorio.exames.filter((e) => e.id !== exame.id);
    this.repositorioDoLaboratorio.save(laboratorio);
  }

  async consultarPorNomeDoExame(nome: string): Promise<LaboratorioEntidade[]> {
    return this.repositorioDoLaboratorio
      .createQueryBuilder('l')
      .leftJoin('l.exames', 'e')
      .where('e.nome like :nome', { nome: `%${nome}%` })
      .getMany();
  }
}
