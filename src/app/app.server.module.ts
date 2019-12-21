import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app.shared.module';

@NgModule({
    imports: [
        AppSharedModule,
        ServerModule,
        ServerTransferStateModule,
        NoopAnimationsModule,
        FlexLayoutServerModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
