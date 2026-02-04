import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PdfRequest } from './pdf_request.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PdfRequestsService {
  constructor(
    @InjectRepository(PdfRequest)
    private readonly pdfRequestRepo: Repository<PdfRequest>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;

    const [items, total] = await this.pdfRequestRepo.findAndCount({
      order: {
        createdAt: 'DESC',
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      items,
      meta: {
        totalItems: total,
        itemCount: items.length,
        itemsPerPage: limit,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      },
    };
  }
}
