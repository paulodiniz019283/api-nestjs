import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'address'})
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: Number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'complement', nullable: false})
    complement: string;

    @Column({ name: 'number'})
    numberAddress: number;

    @Column({ name: 'cep', nullable: false})
    cep: string; 

    @Column({ name: 'city_id', nullable: false})
    cityId: number;

    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @CreateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.addresses)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user?: UserEntity;

}