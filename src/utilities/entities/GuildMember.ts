import { Column, Model, Table } from "sequelize-typescript"


@Table
export class GuildMember extends Model {
    @Column({unique: true, primaryKey: true})
    id: string

    @Column
    guildId: string

    @Column
    isSubLeader: boolean

    @Column
    unmute : boolean
}