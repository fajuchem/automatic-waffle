import { Module } from '@nestjs/common';
import { LaboratorioModulo } from './laboratorio/laboratorio.modulo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExameModulo } from './exame/exame.modulo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LaboratorioModulo,
    ExameModulo,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
