import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  ParseArrayPipe,
  HttpCode,
  Param,
} from '@nestjs/common';
import { LaboratorioServico } from './laboratorio.servico';
import { AtualizarLaboratorioDto } from './dtos/atualizar-laboratorio.dto';
import { AdicionarLaboratorioDto } from './dtos/adicionar-laboratorio.dto';
import { RemoverLaboratorioDto } from './dtos/remover-laboratorio.dto';
import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiTags,
  OmitType,
  PickType,
} from '@nestjs/swagger';
import { LaboratorioEntidade } from './laboratorio.entidade';
import { AssociarOuDesassociarExameDto } from './dtos/associar-ou-desassociar-exame.dto';

@ApiTags('Laboratório')
@Controller('laboratorio')
export class LaboratorioControladora {
  constructor(private readonly laboratorioServico: LaboratorioServico) {}

  @ApiBody({
    description: 'Criar laboratório',
    type: [OmitType(LaboratorioEntidade, ['id'])],
  })
  @Post()
  create(
    @Body(new ParseArrayPipe({ items: AdicionarLaboratorioDto }))
    adicionarLaboratorioDtos: AdicionarLaboratorioDto[],
  ) {
    return this.laboratorioServico.criar(adicionarLaboratorioDtos);
  }

  @Get()
  findAll() {
    return this.laboratorioServico.consultar();
  }

  @ApiBody({
    description: 'Laboratório',
    type: [LaboratorioEntidade],
  })
  @HttpCode(204)
  @Put()
  update(
    @Body(new ParseArrayPipe({ items: AtualizarLaboratorioDto }))
    atualizarLaboratorioDto: AtualizarLaboratorioDto[],
  ) {
    return this.laboratorioServico.atualizar(atualizarLaboratorioDto);
  }

  @ApiBody({
    description: 'Laboratório',
    type: [PickType(LaboratorioEntidade, ['id'])],
  })
  @Delete()
  remove(
    @Body(new ParseArrayPipe({ items: RemoverLaboratorioDto }))
    removerLaboratorioDto: RemoverLaboratorioDto[],
  ) {
    return this.laboratorioServico.remover(removerLaboratorioDto);
  }

  @ApiBody({
    description: 'Associar exame a um laboratório',
    type: AssociarOuDesassociarExameDto,
  })
  @HttpCode(200)
  @Post('associarExame')
  associarExame(
    @Body()
    associarOuDesassociarExameDto: AssociarOuDesassociarExameDto,
  ) {
    return this.laboratorioServico.associarExame(associarOuDesassociarExameDto);
  }

  @ApiBody({
    description: 'Desassociar exame a um laboratório',
    type: AssociarOuDesassociarExameDto,
  })
  @HttpCode(200)
  @Post('desassociarExame')
  desassociar(
    @Body()
    associarOuDesassociarExameDto: AssociarOuDesassociarExameDto,
  ) {
    return this.laboratorioServico.dessasociar(associarOuDesassociarExameDto);
  }

  @ApiParam({ name: 'nome' })
  @HttpCode(200)
  @Get('consultarPorNomeDoExame/:nome')
  consultarPorNomeDoExame(@Param('nome') nome = '') {
    return this.laboratorioServico.consultarPorNomeDoExame(nome);
  }
}
