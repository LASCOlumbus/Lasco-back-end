import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { PdfRequestsService } from './pdf_requests.service';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('PDF Requests')
@Controller('pdf-requests')
export class PdfRequestsController {
  constructor(
    private readonly pdfRequestsService: PdfRequestsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get list of PDF requests' })
  @ApiOkResponse({
    description: 'Paginated list of PDF requests',
  })
  async findAll(@Query() query: PaginationDto) {
    return this.pdfRequestsService.findAll(query);
  }
}
