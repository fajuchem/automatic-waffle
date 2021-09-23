import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../test/repository-mock-factory';
import { LaboratorioServico } from './laboratorio.servico';
import { LaboratorioEntidade } from './laboratorio.entidade';
import { ExameEntidade } from '../exame/exame.entidade';

describe('LaboratorioService', () => {
  let service: LaboratorioServico;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LaboratorioServico,
        {
          provide: getRepositoryToken(ExameEntidade),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(LaboratorioEntidade),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<LaboratorioServico>(LaboratorioServico);
  });

  it('criou corretamente', () => {
    expect(service).toBeDefined();
  });
});
