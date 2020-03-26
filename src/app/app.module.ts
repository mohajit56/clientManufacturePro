import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ManufactureserviceService } from './service/manufactureservice.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRippleModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
		FormsModule
  ],
  providers: [ManufactureserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
