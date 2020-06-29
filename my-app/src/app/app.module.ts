import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AmanComponent} from '../aman/aman.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { MybootstrapComponent } from './mybootstrap/mybootstrap.component';
import { Mybootstrap1Component } from './mybootstrap1/mybootstrap1.component';
import { MystarupComponent } from './mystarup/mystarup.component';

@NgModule({
  declarations: [
    AppComponent,AmanComponent, ImagegalleryComponent, MybootstrapComponent, Mybootstrap1Component, MystarupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
