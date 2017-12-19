import { Component } from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {

  private _selected:Array<boolean> = [false, false];

  private _accounts:Array<Account> = [
    {id:1, title:"Bank Xyz", description: "This is my main bank account", balance:501.2},
    new Account(2, "Bank Asd", "My secret account", 1024.10)
  ]
  
  private _maxId = this.findMaxId();

  private findMaxId()
  {
    let max= 0;
    if(this._accounts && this._accounts.length > 0)
    {
      max = this._accounts[0].id;
    }

    for(let account of this._accounts){
      if(account.id > max)
      {
        max = account.id;
      }
    }

    return max;
  }

  private createAccount(titleEl: any, descEl: any, balEl:any){
    this._accounts.push(new Account(this._maxId+1, titleEl.value, descEl.value, balEl.value));
    this._selected.push(false);
    this._maxId = this.findMaxId();

    titleEl.value = "";
    descEl.value= "";
    balEl.value = 0;
  }

  private removeAccount(index:number){
    this._accounts.splice(index, 1);
    this._selected.splice(index, 1);
    this._maxId = this.findMaxId();
  }
}

