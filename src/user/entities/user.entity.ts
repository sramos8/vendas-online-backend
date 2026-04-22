import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "../../address/entities/address.entity";
import { CityEntity } from "../../city/entities/city.entity";


@Entity({ name: 'user'})

export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id!: number;

    @Column({name: 'name', nullable: false })
    name!: string;
    @Column({name: 'email', nullable: false })
    email!: string;
    @Column({name: 'phone' })
    phone!: string;
    @Column({name: 'cpf', nullable: false })
    cpf!: string;
    @Column({name: 'password', nullable: false })
    password!: string;
    
    @Column({name: 'type_user', nullable: false })
    typeUser!: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt!: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt!: Date;

    @OneToMany(() => AddressEntity, (Address) => Address.user)
    addresses!: AddressEntity[];

    @OneToMany(() => AddressEntity, (Address) => Address.user)
    city!: CityEntity;
}