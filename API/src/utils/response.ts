import { HttpException, HttpStatus } from "@nestjs/common";

export function badRequestResponse(message: string): HttpException {
    return new HttpException(message, HttpStatus.BAD_REQUEST);
}