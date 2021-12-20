import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../dto';
import { ITokens } from '../interfaces';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/local/signup')
  signupLocal(@Body() data: AuthDto): Promise<ITokens> {
    return this.authService.signupLocal(data);
  }

  @Post('/local/signin')
  signinLocal() {
    this.authService.signinLocal;
  }

  @Post('/logout')
  logout() {
    this.authService.logout;
  }

  @Post('/refresh')
  refreshToken() {
    this.authService.refreshToken;
  }
}
