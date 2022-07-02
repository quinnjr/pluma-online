import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('* */30 9-17 * * *', {
    timeZone: 'EST'
  })
  handleCron() {
    // @TODO
  }
}
