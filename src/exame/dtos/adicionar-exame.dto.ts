import { OmitType } from '@nestjs/mapped-types';
import { ExameEntidade } from '../exame.entidade';

export class AdicionarExameDto extends OmitType(ExameEntidade, [
  'id',
] as const) {}
