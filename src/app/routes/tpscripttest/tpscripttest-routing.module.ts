import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestmodulTestpageComponent} from './testpage/testpage.component';
import {Test210621Component} from './test210621/test210621.component';
import {TABS_DEMO_ROUTES_210621} from './test210621/routes';


const routes: Routes = [
  {
    path: 'testpage', component: TestmodulTestpageComponent
  },

  {path: 'test210621', component: Test210621Component, children: TABS_DEMO_ROUTES_210621, data: {title: 'Tab'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpscripttestRoutingModule {
}
