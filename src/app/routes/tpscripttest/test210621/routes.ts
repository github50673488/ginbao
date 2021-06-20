import {Routes} from '@angular/router';

import {

  RainyTabContentComponent,
} from './test210621.component';
import {Test1Component} from './test1/test1.component';

export const TABS_DEMO_ROUTES_210621: Routes = [
  {path: '', redirectTo: 'sunny-tab', pathMatch: 'full'},
  {path: 'test1', component: Test1Component},
  {path: 'test2', component: RainyTabContentComponent},

];
