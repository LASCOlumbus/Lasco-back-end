import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfRequest } from './pdf_request.entity';
import { PdfRequestsService } from './pdf_requests.service';
import { PdfRequestsController } from './pdf_requests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PdfRequest])],
  providers: [PdfRequestsService],
  controllers: [PdfRequestsController],
})
export class PdfRequestsModule {}
