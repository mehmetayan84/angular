import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountsList} from './account/accounts_list.components';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
