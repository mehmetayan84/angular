import { Component } from '@angular/core';
import {Account} from './account/account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})


export class AppComponent  {

  private _accounts:Array<Account> = [
    {id:1, title:"Bank Xyz", description: "This is my main bank account", balance:501.2},
    {id:2, title:"Bank Asd", description:"My secret account", balance:1024.10}
]
  private _nextId = 3;

  private createAccount(_nextId:number, titleEl: any, descEl: any, balEl:any){
     alert("This method hasn't beern implemented yet");
  //   // this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
  //   // this._selected.push(false);
  //   // this._nextId = this._nextId++;

     titleEl.value = "";
     descEl.value= "";
     balEl.value = 0;
  }

}

