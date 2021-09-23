import { PickType } from '@nestjs/mapped-types';
import { ExameEntidade } from '../exame.entidade';

export class RemoverExameDto extends PickType(ExameEntidade, ['id'] as const) {}
