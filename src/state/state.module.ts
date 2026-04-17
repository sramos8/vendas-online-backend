import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { CityEntity } from '../city/entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity, CityEntity])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
