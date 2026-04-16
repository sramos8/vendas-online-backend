import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableState1776281642083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE  state
            ADD uf varchar(2) NOT NULL;
        `);;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE  state
            DROP COLUMN uf;
        `);;
    }

}

