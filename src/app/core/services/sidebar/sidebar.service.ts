import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen = false;
  openEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  displayEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  close() {
    this.isOpen = false;
    this.openEvent.emit(false);
  }

  open() {
    this.isOpen = true;
    this.openEvent.emit(true);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.openEvent.emit(this.isOpen);
  }

  hide() {
    this.displayEvent.emit(false);
  }

  show() {
    this.displayEvent.emit(true);
  }
}
