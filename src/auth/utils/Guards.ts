import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
    async canActivate(context: ExecutionContext) {
        const activate = (await super.canActivate(context)) as boolean
        const request = context.switchToHttp().getRequest()
        await super.logIn(request)
        return activate
    }
}

@Injectable()
export class AuthentitcatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        return req.isAuthenticated()
    }
    
}