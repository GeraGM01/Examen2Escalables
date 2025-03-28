import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-show-card',
  imports: [NgClass, MatCardModule, MatButtonModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  onDeleteEvent = new EventEmitter<string>();

  @Input({ required: true })
  show: Show | null = null;

  isSelected: boolean = false;

  onSelected(): void {
    this.isSelected = !this.isSelected;
  }

  onDelete(): void {
    this.onDeleteEvent.emit(this.show!.name);
  }

}
