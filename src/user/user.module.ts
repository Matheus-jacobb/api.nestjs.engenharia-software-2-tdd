import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService, UserEntity]
})
export class UserModule {}
