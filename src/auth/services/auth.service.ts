import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/user/services/user.service';
import { SERVICES } from 'src/utilities/constants';
import { User } from 'src/utilities/entities/User';
import { UserDetails } from 'src/utilities/types';

export interface IAuthService {
    validateUser(details: UserDetails): Promise<User>
}

@Injectable()
export class AuthService implements IAuthService{
    constructor(@Inject(SERVICES.USER) private readonly userService: IUserService){}
    async validateUser(details: UserDetails) {
        console.log('Validate User')
        const user = await this.userService.findUser(details.id)
        const {id, ...UD} = details
        return user ? this.userService.updateUser(user, UD) : this.userService.createUser(details)
    }
}
