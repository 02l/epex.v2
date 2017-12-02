import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-modalprofile',
  templateUrl: './modalprofile.component.html',
  styleUrls: ['./modalprofile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalprofileComponent implements OnInit {
  ModalOpen = false;


  constructor() { }

  ngOnInit() {
  }

  toggleModal () {
    this.ModalOpen = !this.ModalOpen;
  }

}
