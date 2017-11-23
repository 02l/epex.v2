import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ModalService } from '../_services/index';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  private bodyText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
}

openModal(id: string){
    this.modalService.open(id);
}

closeModal(id: string){
    this.modalService.close(id);
}

}
