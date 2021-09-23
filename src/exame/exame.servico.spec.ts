import { Test, TestingModule } from '@nestjs/testing';
import { ExameServico } from './exame.servico';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExameEntidade } from './exame.entidade';
import { repositoryMockFactory } from '../../test/repository-mock-factory';

describe('ExameService', () => {
  let service: ExameServico;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExameServico,
        {
          provide: getRepositoryToken(ExameEntidade),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<ExameServico>(ExameServico);
  });

  it('criou corretamente', () => {
    expect(service).toBeDefined();
  });
});
