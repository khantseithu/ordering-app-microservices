import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }

  async createOrder(createOrderDto: CreateOrderDTO) {
    return this.ordersRepository.create(createOrderDto);
  }
}
