import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  @Output()
  deleteByIndexEvent = new EventEmitter<number>();
  @Output()
  deleteLastEvent = new EventEmitter<void>();
  @Output()
  orderByNameEvent = new EventEmitter<void>();

  deleteFirst(): void {
    this.deleteByIndexEvent.emit(0);
  }

  deleteLast(): void {
    this.deleteLastEvent.emit();
  }

  orderByName(): void {
    this.orderByNameEvent.emit();
  }
}
