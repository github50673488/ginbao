import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.less']
})
export class Test1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  testTp(): void {
    // 定义数组
    debugger
    const data: string[] = ['Java', 'Ruby', 'Kotlin', 'Dart'];
    console.log('data -->', data);
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[3]);
    // console.log(data[4]);
// 追加赋值
    data[4] = 'PHP';
    // console.log(data);
    // console.log(data[4]);
// 越界赋值
    data[10] = 'Go';
    // console.log(data);
    // console.log(data[10]);

  }
}
