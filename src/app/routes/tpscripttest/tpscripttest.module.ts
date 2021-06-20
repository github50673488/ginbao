import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {TpscripttestRoutingModule} from './tpscripttest-routing.module';
import {TestmodulTestpageComponent} from './testpage/testpage.component';
import {
  RainyTabContentComponent,
  Test210621Component
} from './test210621/test210621.component';
import {Test1Component} from './test210621/test1/test1.component';

const COMPONENTS = [TestmodulTestpageComponent, Test210621Component, RainyTabContentComponent, Test1Component];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    TpscripttestRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
    Test1Component
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class TpscripttestModule {
}
