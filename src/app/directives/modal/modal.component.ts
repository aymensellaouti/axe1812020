import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  styleModal = 'none';
  isShown = false;
  constructor() {}

  ngOnInit(): void {}
  openCloseModal(status: boolean) {
    this.isShown = status;
    status ? (this.styleModal = 'block') : (this.styleModal = 'none');
  }
  log(message) {
    console.log(message);
  }
}
