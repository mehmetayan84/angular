import {Component, Input} from '@angular/core';

import {Account} from './account.model';

@Component({
    selector: 'accounts-list',
    templateUrl: 'app/account/accounts_list.components.html',
    styleUrls: ['app/account/accounts_list.components.css'],
})

export class AccountsList{

    @Input('accounts') _accounts:Array<Account>;

    private removeAccount(index:number){
        this._accounts.splice(index, 1);
    }

}