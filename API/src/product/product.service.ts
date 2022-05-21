import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>
    ) {}

    get(offset: number, limit: number): Promise<Product[]> {
        try {
            return this.productModel
                .find()
                .skip(offset)
                .limit(limit)
                .exec();   
        } catch (error) {
            console.log(error);
        }
    }

    create(productDto: ProductDto) {
        try {
            const productModel = new this.productModel(productDto);

            return productModel.save();   
        } catch (error) {
            console.log(error);
        }
    }
}
