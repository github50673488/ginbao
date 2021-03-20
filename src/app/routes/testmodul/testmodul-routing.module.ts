import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestmodulTestpageComponent } from './testpage/testpage.component';

const routes: Routes = [{ path: 'testpage', component: TestmodulTestpageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmodulRoutingModule { }
