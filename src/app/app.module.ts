import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    GalleryComponent,
    TableComponent,
    ChartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
