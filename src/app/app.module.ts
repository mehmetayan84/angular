import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountsList} from './account/accounts_list.components';
import { AppComponent }  from './app.component';
import { AccountForm } from './account/account_form.component';
import { AccountService } from './account/account.services';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AccountService, AppComponent, AccountsList, AccountForm],
  bootstrap:    [ AppComponent ],
  providers:    [AccountService]
})
export class AppModule { }
