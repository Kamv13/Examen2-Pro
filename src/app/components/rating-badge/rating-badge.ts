import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-rating-badge',
  template: `<span class="badge" [style.background-color]="color()">{{ rating().toFixed(1) }}</span>`,
  styles: `.badge { color: #111; font-weight: bold; padding: 3px 8px; border-radius: 6px; font-size: 13px; }`
})
export class RatingBadge {
  rating = input.required<number>();
  color = computed(() => {
    if (this.rating() >= 7) {
      return '#21d07a';
    }
    if (this.rating() >= 5) {
      return '#d2d531';
    }
    return '#db2360';
  });
}