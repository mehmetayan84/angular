import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Account} from './account.model';

@Component({
    selector: 'accounts-list',
    templateUrl: 'app/account/accounts_list.components.html',
    styleUrls: ['app/account/accounts_list.components.css'],
})

export class AccountsList{

    @Input('accounts') _accounts:Array<Account>;

    @Input('selected') _selected:Array<boolean>;

    @Output('delete') delete = new EventEmitter<Number>();

    @Output('select') select = new EventEmitter<Number>();

    private _remove(index:number){
        this.delete.emit(index);
    }

    private _select(index:number){
        this.select.emit(index);
    }
}