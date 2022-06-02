import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// import { SMTPClient } from 'emailjs';

@Injectable()
export class EmailService {
  // private client: SMTPClient;

  constructor(private readonly configService: ConfigService) {
    // this.client = new SMTPClient({
    //   user: configService.get('SMTP_USER'),
    //   password: configService.get('SMTP_PASSWORD'),
    //   host: configService.get('SMTP_HOST'),
    //   port: configService.get<number>('SMTP_PORT'),
    //   ssl: true,
    //   authentication: ['PLAIN', 'LOGIN']
    // });
  }

  public async send(input: any): Promise<void> {
    //   try {
    //     await this.client.sendAsync({
    //       ...input,
    //       'content-type': 'text/html; charset=utf-8'
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }
}
