import { Type } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class ProductQueryDto {
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    @Min(0)
    public offset: number = 0;

    @IsInt()
    @Type(() => Number)
    @IsOptional()
    @Min(0)
    public limit: number = 5;
}