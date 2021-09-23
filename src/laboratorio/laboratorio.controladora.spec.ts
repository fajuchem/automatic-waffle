import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../test/repository-mock-factory';
import { LaboratorioControladora } from './laboratorio.controladora';
import { LaboratorioServico } from './laboratorio.servico';
import { LaboratorioEntidade } from './laboratorio.entidade';
import { ExameEntidade } from '../exame/exame.entidade';

describe('LaboratorioController', () => {
  let controller: LaboratorioControladora;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LaboratorioServico,
        LaboratorioControladora,
        {
          provide: getRepositoryToken(LaboratorioEntidade),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(ExameEntidade),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<LaboratorioControladora>(LaboratorioControladora);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
