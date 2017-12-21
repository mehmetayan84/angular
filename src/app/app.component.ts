import { Component } from '@angular/core';
import {Account} from './account/account.model';
import {AccountsList} from './account/accounts_list.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

@NgModule({
  imports:[BrowserModule],
  declarations:[AppComponent, AccountsList, Account],
  bootstrap: [AppComponent],
  providers:[]
})

export class AppComponent  {

  // private createAccount(titleEl: any, descEl: any, balEl:any){
  //   alert("This method hasn't beern implemented yet");
  //   // this._accounts.push(new Account(this._maxId+1, titleEl.value, descEl.value, balEl.value));
  //   // this._selected.push(false);
  //   // this._maxId = this.findMaxId();

  //   titleEl.value = "";
  //   descEl.value= "";
  //   balEl.value = 0;
  // }

}

