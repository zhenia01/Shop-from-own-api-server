import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { AuthService } from './auth.service';
import { AuthCreditsDto } from './dto/auth-credits.dto';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authCreditsdto = context.getArgs()[0] as AuthCreditsDto;
    const username = this.adminRepository.validateUserPassword(authCreditsdto);
    return !!username;
  }
}
