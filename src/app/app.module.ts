import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from './iot/iot.component';
import { MobileComponent } from './mobile/mobile.component';
import { MoreComponent } from './more/more.component';
import { WebComponent } from './web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebComponent,
    MobileComponent,
    IotComponent,
    DataComponent,
    MoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
