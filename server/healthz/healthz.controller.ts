import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller('healthz')
export class HealthController {
  @Get()
  public index(@Res() response) {
    response.status(HttpStatus.OK).json([]);
  }
}
