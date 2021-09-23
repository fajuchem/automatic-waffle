import { Test, TestingModule } from '@nestjs/testing';
import { ExameControladora } from './exame.controladora';
import { ExameServico } from './exame.servico';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExameEntidade } from './exame.entidade';
import { repositoryMockFactory } from '../../test/repository-mock-factory';

describe('ExameController', () => {
  let controller: ExameControladora;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExameServico,
        ExameControladora,
        {
          provide: getRepositoryToken(ExameEntidade),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<ExameControladora>(ExameControladora);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
