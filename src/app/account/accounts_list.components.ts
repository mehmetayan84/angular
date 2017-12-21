import {Component} from '@angular/core';

import {Account} from './account.model';

@Component({
    selector: 'accounts-list',
    templateUrl: 'app/account/accounts_list.components.html',
    styleUrls: ['app/account/accounts_list.components.css'],
})

export class AccountsList{
    
    private _selected:Array<boolean> = [false, false];

     private _accounts:Array<Account> = [
        {id:1, title:"Bank Xyz", description: "This is my main bank account", balance:501.2},
        {id:2, title:"Bank Asd", description:"My secret account", balance:1024.10}
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

  private removeAccount(index:number){
    this._accounts.splice(index, 1);
    this._selected.splice(index, 1);
    this._maxId = this.findMaxId();
  }

  private select(index:number){
    this._selected[index] = !this._selected[index];
  }

}