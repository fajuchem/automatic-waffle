import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  ParseArrayPipe,
  HttpCode,
} from '@nestjs/common';
import { ExameServico } from './exame.servico';
import { AtualizarExameDto } from './dtos/atualizar-exame.dto';
import { AdicionarExameDto } from './dtos/adicionar-exame.dto';
import { RemoverExameDto } from './dtos/remover-exame.dto';
import { ApiBody, ApiTags, OmitType, PickType } from '@nestjs/swagger';
import { ExameEntidade } from './exame.entidade';

@ApiTags('Exame')
@Controller('exame')
export class ExameControladora {
  constructor(private readonly exameServico: ExameServico) {}

  @ApiBody({
    description: 'Criar exame',
    type: [OmitType(ExameEntidade, ['id'])],
  })
  @Post()
  create(
    @Body(new ParseArrayPipe({ items: AdicionarExameDto }))
    adicionarExameDto: AdicionarExameDto[],
  ) {
    return this.exameServico.criar(adicionarExameDto);
  }

  @Get()
  findAll() {
    return this.exameServico.consultar();
  }

  @ApiBody({
    description: 'Atualizar exame',
    type: [ExameEntidade],
  })
  @HttpCode(204)
  @Put()
  update(
    @Body(new ParseArrayPipe({ items: AtualizarExameDto }))
    atualizarExameDto: AtualizarExameDto[],
  ) {
    return this.exameServico.atualizar(atualizarExameDto);
  }

  @ApiBody({
    description: 'Remover exame',
    type: [PickType(ExameEntidade, ['id'])],
  })
  @Delete()
  remove(
    @Body(new ParseArrayPipe({ items: RemoverExameDto }))
    removerExameDto: RemoverExameDto[],
  ) {
    return this.exameServico.remover(removerExameDto);
  }
}
