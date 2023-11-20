import { DataSource } from "typeorm";

const MigrationSource = new DataSource({
  type: "postgres",
  host: 'localhost',
  port: 1997,
  username: 'postgres',
  password: '',
  database: 'postgres',
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: ["dist/src/database/migrations/**/*{.ts,.js}"],
}); 
void MigrationSource.initialize();
export default MigrationSource;