import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductQueryDto } from './product-query.dto';
import { ProductDto } from './product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>
    ) {}

    get(productQuery: ProductQueryDto): Promise<Product[]> {
        return this.productModel
            .find()
            .skip(productQuery.offset)
            .limit(productQuery.limit)
            .exec();
    }

    create(productDto: ProductDto) {
        const productModel = new this.productModel(productDto);

        return productModel.save();
    }
}
