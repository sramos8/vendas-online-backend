import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateEntity } from './entities/state.entity';
import { CityEntity } from '../city/entities/city.entity';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository: Repository<StateEntity>,
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
    ) {}

    async getAllStates(): Promise<StateEntity[]> {
        return this.stateRepository.find();
    }

    async getCityState(stateId: number): Promise<CityEntity[]> {
        return this.cityRepository.find({ where: { stateId } });
    }
}
