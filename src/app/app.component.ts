import { Component } from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  private _accounts:Array<Account> = [
    {id:1, title:"Bank Xyz", description: "This is my main bank account", balance:501.2},
    new Account(2, "Bank Asd", "My secret account", 1024.10)
  ]
  
  private _nextId = this._accounts.length + 1;

  private createAccount(titleEl: any, descEl: any, balEl:any){
    this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
    this._nextId++;

    titleEl.value = "";
    descEl.value= "";
    balEl.value = 0;
  }

  private removeAccount(index:number){
    this._accounts.splice(index, 1);
  }
}

