import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IUserService } from "src/user/services/user.service";
import { SERVICES } from "src/utilities/constants";
import { User } from "src/utilities/entities/User";

type Done = (err: Error, user: User) => void

export class SessionSerializer extends PassportSerializer {
    constructor(@Inject(SERVICES.USER) private readonly userService: IUserService){
        super()
    }
    serializeUser(user: User, done: Done) {
        done(null, user)
    }
    async deserializeUser(user: User, done: Done) {
        try {
            const userDB = await this.userService.findUser(user.id)
            return userDB ? done(null, userDB) : done(null, null)
        } catch (err) {
            done(err, null)
        }
        
    }
    
}