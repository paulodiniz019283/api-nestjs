import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { read } from 'fs';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {

    constructor(
        private readonly AddressService: AddressService
        ){}

    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddress(
        @Body()
        createAddressDto: CreateAddressDto,
        @Param('userId') userId: number,
        ):Promise<AddressEntity> {
        
        return this.AddressService.createAddress(createAddressDto, userId);
    }

}
