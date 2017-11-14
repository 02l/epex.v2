import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  loginState: boolean;
  registerState: boolean;
  name: String;
  username: String;
  email: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  toggleLogin () {
    if(this.registerState) this.registerState = !this.registerState; 
    this.loginState = !this.loginState;
  }

}
