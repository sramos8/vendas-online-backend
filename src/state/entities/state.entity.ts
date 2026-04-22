import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CityEntity } from "../../city/entities/city.entity";



@Entity({ name: 'state'})

export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id!: number;

    @Column({name: 'name', nullable: false })
    name!: string;

    @Column({name: 'created_at', nullable: false})
    createdAt!: Date;

    @Column({name: 'updated_at', nullable: false})
    updatedAt!: Date;

    @OneToMany(() => CityEntity, (city) => city.state)
    cities!: CityEntity[];
}