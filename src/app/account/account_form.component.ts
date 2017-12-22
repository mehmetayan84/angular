import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
    selector: 'account-form',
    templateUrl: 'app/account/account_form.component.html',
    styleUrls: ['app/account/account_form.component.css'],
})

export class AccountForm{

    @Input('createMessage') _errorMessage:string;

    @Output() create = new EventEmitter<Account>();

    private _create(titleEl:any, descriptionEl:any, balanceEl:any){
        this.create.emit(new Account(0, titleEl.value, descriptionEl.value, balanceEl.value));
        
    }

    @ViewChild('form') form:ElementRef;

    public resetForm(){
        this.form.nativeElement.reset();
    }
}