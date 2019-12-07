import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreditsDto } from './dto/auth-credits.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }

  // @Post('signup')
  // signUp(@Body(ValidationPipe) authCreditsDto: AuthCreditsDto): Promise<void> {
  //   return this.authService.signUp(authCreditsDto);
  // }

  @Post('signin')
  // @UseGuards(AuthGuard)
  signIn(@Body(ValidationPipe) authCreditsDto: AuthCreditsDto): Promise<void> {
    return this.authService.signIn(authCreditsDto);
  }
}
