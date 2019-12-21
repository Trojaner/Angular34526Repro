import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrebootModule } from 'preboot';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ModuleRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModuleRouting,
    BrowserModule.withServerTransition({ appId: 'repro' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    FlexLayoutModule
  ],
  exports: [
  ]
})
export class AppSharedModule {

}
