import { Body, Controller, Post, Get, ValidationPipe, Param} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CreateUserDto } from './dtos/createUser.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @UsePipes(ValidationPipe)

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
       return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser(): Promise<ReturnUserDto[]>{
        return (await this.userService.getAllUser()).map(s
            (userEntity) => new ReturnUserDto(userEntity)
            );
    }

    @Get('/:userId')
    async getUserById(@Param('userId') userId: number) {
        return this.userService.getUserByIdUsingRelations(userId)
    }
}
