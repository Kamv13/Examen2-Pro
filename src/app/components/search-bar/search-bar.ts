import { Component, OnInit, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar implements OnInit {
  initialQuery = input('');
  searchClicked = output<string>();
  text = '';

  ngOnInit(): void {
    this.text = this.initialQuery();
  }

  onSearch(): void {
    if (this.text.trim()) {
      this.searchClicked.emit(this.text.trim());
    }
  }
}