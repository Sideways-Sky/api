import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({})
export class Guild extends Model {
    @Column({unique: true, primaryKey: true})
    id: string

    @Column({type: DataType.JSON})
    partiesNames: string[]

    @Column({})
    deathRoleId : string
    @Column({})
    leaderRoleId : string
    @Column({})
    categoryId : string
    @Column({})
    mainTextId : string
    @Column({})
    leaderboardTextId : string
    @Column({})
    allowPrivate : boolean
}