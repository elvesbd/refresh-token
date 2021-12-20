import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/local/signup')
  signupLocal() {
    this.authService.signinLocal;
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
