import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ApiTags, ApiOperation, ApiProduces } from '@nestjs/swagger';
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';

@ApiTags('PDF')
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  @ApiOperation({ summary: 'Generate PDF and return file' })
  @ApiProduces('application/pdf')
  async generate(
    @Body() dto: CreatePdfDto,
    @Res() res: Response,
  ) {
    const { id, buffer } = await this.pdfService.generate(dto);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="pdf-${id}.pdf"`,
    );

    res.send(buffer);
  }
}
