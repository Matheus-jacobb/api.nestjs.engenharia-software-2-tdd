import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserEntity],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    new UserEntity({ email: 'email@email.com' });
    expect(service).toBeDefined();
  });
});
