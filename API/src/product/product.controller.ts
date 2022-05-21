import { Body, Controller, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(
    @Query('offset') offset: number = 5,
    @Query('limit') limit: number = 0
  ) {
    const products = await this.productService.get(offset, limit);

    return {
      data: products,
      rows: products.length
    };
  }

  @Post()
  async create(
    @Body() body: ProductDto
  ){
    await this.productService.create(body);

    return body;
  }
}
