import {Component, OnInit} from '@angular/core';

export interface UserData {
  date: string;
  temperaturec: number;
  summary: string;
}


@Component({
  selector: 'app-testmodul-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestmodulTestpageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  testTp(): void {

    console.log('hello world');

  }
}

