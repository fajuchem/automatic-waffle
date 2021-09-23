import { OmitType } from '@nestjs/mapped-types';
import { LaboratorioEntidade } from '../laboratorio.entidade';

export class AdicionarLaboratorioDto extends OmitType(LaboratorioEntidade, [
  'id',
] as const) {}
