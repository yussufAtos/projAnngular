import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http';*/
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilService } from './service/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    /*HttpModule*/
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
