import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {

    constructor(private readonly stateService: StateService) {}

    @Get()
    async getAllStates() {
        return this.stateService.getAllStates();
    }

    @Get('cities')
    async getCitiesByState(@Query('stateId', ParseIntPipe) stateId: number) {
        return this.stateService.getCityState(stateId);
    }
}
