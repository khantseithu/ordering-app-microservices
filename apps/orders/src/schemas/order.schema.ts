import { AbstractDocument } from '@app/common';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Order extends AbstractDocument {
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  phoneNumber: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
