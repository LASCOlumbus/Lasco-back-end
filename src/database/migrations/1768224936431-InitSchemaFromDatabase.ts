import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchemaFromDatabase1768224936431 implements MigrationInterface {
    name = 'InitSchemaFromDatabase1768224936431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pdf_requests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "payload" jsonb NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_900df24a74a42558ee7d0cc6126" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pdf_requests"`);
    }

}
