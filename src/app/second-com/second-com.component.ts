import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-com',
  templateUrl: './second-com.component.html',
  styleUrls: ['./second-com.component.scss']
})
export class SecondComComponent {
  title = 'my-app';
  constructor(public router:Router){}
}
