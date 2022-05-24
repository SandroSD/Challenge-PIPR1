import { Body, Controller, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { badRequestResponse } from 'src/utils/response';
import { ProductQueryDto } from './product-query.dto';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts(
    @Query() productQuery: ProductQueryDto
  ) {
    try {
      const products = await this.productService.get(productQuery);
  
      return {
        data: products,
        rows: products.length
      };
    } catch (error) {
      throw badRequestResponse(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() body: ProductDto
  ){
    try {
      await this.productService.create(body);

      return body;
    } catch (error) {
      throw badRequestResponse(error.message);
    }
  }
}
