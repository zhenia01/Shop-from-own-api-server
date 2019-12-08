import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreditsDto } from './dto/auth-credits.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }

  @Post('signin')
  signIn(@Body(ValidationPipe) authCreditsDto: AuthCreditsDto): Promise<void> {
    return this.authService.signIn(authCreditsDto);
  }
}
