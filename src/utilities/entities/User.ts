import { Column, Model, Table } from "sequelize-typescript"

@Table({})
export class User extends Model {
    @Column({unique: true, primaryKey: true})
    id: string

    @Column({defaultValue: 0})
    winStreak : number

    @Column({defaultValue: 0})
    gamesWon : number

    @Column({defaultValue: 0})
    gamesLost : number

    @Column({})
    username: string

    @Column({})
    discriminator: string

    @Column({})
    accessToken: string //!enript
    
    @Column({})
    refreshToken: string //!enript
}