import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app.shared.module';

@NgModule({
  imports: [
    AppSharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
