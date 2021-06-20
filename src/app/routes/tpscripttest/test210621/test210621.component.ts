import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testmodul-testpage',
  templateUrl: './test210621.component.html',
  styleUrls: ['./test210621.component.scss']
})
export class Test210621Component implements OnInit {
  constructor() {
  }

  tabLinks = [
    {label: '1.数组', link: 'test1'},
    {label: '2.xxx', link: 'test2'},
  ];

  ngOnInit() {
  }

}

@Component({
  selector: 'rainy-routed-content',
  template: '第二道题',
})
export class RainyTabContentComponent {
}



