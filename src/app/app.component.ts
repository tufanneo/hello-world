import { Component } from '@angular/core';
import validator from 'validator';
import * as IpAddress from 'ip-address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
}

let inputIp: string = (<HTMLInputElement>document.getElementById("ipAddress")).value;
let ipv4 = inputIp


if (validator.isIP(ipv4)){
	console.log('Is a valid I.P')
}
else {
	console.log('Is not a valid I.P')
}