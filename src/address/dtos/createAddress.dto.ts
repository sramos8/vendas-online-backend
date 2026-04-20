import { IsInt, IsOptional, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateAddressDto {
    @IsString()
    @IsOptional()
    complement!: string;

    @IsInt()
    numberAddress!: number;

    @IsString()
    cep!: string;

    @IsString()
    cityId!: string;

}