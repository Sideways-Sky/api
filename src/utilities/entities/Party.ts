import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table
export class Party extends Model {
    @Column({unique: true, primaryKey: true})
    name: string

    @Column
    guildId: string

    @Column
    leaderId : string

    @Column({type: DataType.JSON})
    membersIds : string[]

    @Column
    voiceId : string
    @Column
    textId : string
    @Column
    roleId : string
    @Column
    lastEmbedMessageId : string
    @Column
    private : boolean
    @Column
    allowInvites : boolean
}