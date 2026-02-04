import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PdfRequest } from '../pdf_requests/pdf_request.entity';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { getBrowser } from '../../common/pdf/chromium';
import { renderTemplate } from '../../common/pdf/template-renderer';

@Injectable()
export class PdfService {
  constructor(
    @InjectRepository(PdfRequest)
    private readonly pdfRepo: Repository<PdfRequest>,
  ) {}

  async generate(dto: CreatePdfDto) {
      const request = await this.pdfRepo.save({
        payload: dto,
      });

      const html = renderTemplate(dto.type, {
        data: dto.data,
        meta: dto.meta,
      });

      const browser = await getBrowser();
      const page = await browser.newPage();

      await page.setContent(html, { waitUntil: 'networkidle0' });

      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
      });

      await browser.close();

      return {
        id: request.id,
        buffer: Buffer.from(pdf),
      };
    }

}
