import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTableUser1677677269367 } from './migration/1677677269367-create_table_user';
import { createTableState1677680842346 } from './migration/1677680842346-create_table_state';
import { createTableCity1677680850505 } from './migration/1677680850505-create_table_city';
import { createTableAddress1677680857074 } from './migration/1677680857074-create_table_address';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module'; 
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { StateEntity } from './state/entities/state.entity';
import { CityEntity } from './city/entities/city.entity';
import { AddressEntity } from './address/entities/address.entity';
import { insertInState1677681663113 } from './migration/1677681663113-insert-in-state';
import { insertInCity1677681686172 } from './migration/1677681686172-insert-in-city';
import { alterTableState1677681642321 } from './migration/1677681642321-alter-table-state';
import { CacheModule } from './cache/cache.module';

const entities = [ UserEntity, StateEntity, CityEntity, AddressEntity ];
const migrations = [ createTableUser1677677269367, createTableState1677680842346, createTableCity1677680850505,
   insertInState1677681663113, alterTableState1677681642321, insertInCity1677681686172 ]; 

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [...entities],
      migrations : [ ...migrations], 
      migrationsRun: true,
    })
    ,
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
