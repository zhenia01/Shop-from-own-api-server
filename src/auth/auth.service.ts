import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCreditsDto } from './dto/auth-credits.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository
  ) { }

  async signIn(authCreditsdto: AuthCreditsDto) {
    const username = await this.adminRepository.validateUserPassword(authCreditsdto);
    if (!username) {
      throw new UnauthorizedException("Invalid credits");
    }
  }
}
