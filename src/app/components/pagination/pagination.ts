import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {
  page = input.required<number>();
  totalPages = input.required<number>();
  pageChange = output<number>();
}