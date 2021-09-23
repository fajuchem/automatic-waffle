import { PickType } from '@nestjs/mapped-types';
import { LaboratorioEntidade } from '../laboratorio.entidade';

export class RemoverLaboratorioDto extends PickType(LaboratorioEntidade, [
  'id',
] as const) {}
