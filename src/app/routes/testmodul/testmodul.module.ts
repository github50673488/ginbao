import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TestmodulRoutingModule } from './testmodul-routing.module';
import { TestmodulTestpageComponent } from './testpage/testpage.component';

const COMPONENTS = [TestmodulTestpageComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    TestmodulRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class TestmodulModule { }
