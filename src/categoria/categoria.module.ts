import { Module } from '@nestjs/common';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/Categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [TypeOrmModule],
})
export class CategoriaModule {}
