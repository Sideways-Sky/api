import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/utilities/entities/User";
import { UpdateUserDetails, UserDetails } from "src/utilities/types";

export interface IUserService {
    createUser(details: UserDetails): Promise<User>
    findUser(id: string): Promise<User | undefined>
    updateUser(user: User, details: UpdateUserDetails): Promise<User>
}

@Injectable()
export class UserService implements IUserService {

    constructor(
        @InjectModel(User) 
        private userRepository: typeof User
        ){}
    
    createUser(details: UserDetails) {
        console.log('Create User')
        return this.userRepository.create(details)
    }
    findUser(id: string) {
        console.log('Find User')
        return this.userRepository.findByPk(id)
    }
    updateUser(user: User, details: UpdateUserDetails) {
        console.log('Update User')
        return user.update(user.id, details)
    }

}