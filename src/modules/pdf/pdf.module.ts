import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { PdfRequest } from '../pdf_requests/pdf_request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PdfRequest])],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
