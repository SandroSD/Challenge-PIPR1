import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Currency } from '../enum/currency.enum';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ type: String, unique: true, required: true })
    code: string;

    @Prop({ type: String, maxlength: 255 })
    name: string;

    @Prop({ type: Number })
    stock: number;

    @Prop({ type: Number, min: 0 })
    price: number;

    @Prop({ type: String, enum: Currency, default: Currency.PESO })
    currency: Currency;
}

export const ProductSchema = SchemaFactory.createForClass(Product);