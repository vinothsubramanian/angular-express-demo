import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
