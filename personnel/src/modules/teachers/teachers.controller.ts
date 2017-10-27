import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TeacherController {
  @MessagePattern({ teacher: 'getUser' })
  sum(userId: number): number {
    return 1150;
  }
}
