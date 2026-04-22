import { AddressEntity } from "../entities/address.entity";


export class ReturnAddressDto {
    complement!: string;
    numberAddress!: number;
    cep!: string;
    city!: string | undefined;

    constructor( address: AddressEntity) {
        this.complement = address.complement;
        this.numberAddress = address.numberAddress;
        this.cep = address.cep;
        this.city = address.user && address.user.city ? address.user.city.name : undefined;
    }
}
