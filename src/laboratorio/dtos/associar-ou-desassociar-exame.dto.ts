import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { IsUUID } from 'class-validator';

export class AssociarOuDesassociarExameDto {
  @ApiProperty()
  @Column()
  @IsUUID()
  readonly idDoExame: string;

  @ApiProperty()
  @Column()
  @IsUUID()
  readonly idDoLaboratorio: string;
}
