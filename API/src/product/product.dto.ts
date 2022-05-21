import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";
import { Currency } from "src/enum/currency.enum";

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    public code: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    public name: string;

    @IsInt()
    @IsNotEmpty()
    public stock: number;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    public price: number;

    @IsString()
    @IsNotEmpty()
    @IsEnum(Currency, {
        message: `currency must be a valid enum value: ${Currency.DOLAR}, ${Currency.PESO}`
    })
    public currency: Currency;
}