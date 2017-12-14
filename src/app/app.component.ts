import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: ['.blue-bg{background-color:cyan;}']
})
export class AppComponent  {
  
  private currentUser:User = {username: "Test", email: "test@test.com"};
  
  private hideEmail:boolean = true;

  private disabledInput:boolean = true;

  private toggle(){
    this.hideEmail = !this.hideEmail;
  }

  private changeMail(newMail:string){
    this.currentUser.email = newMail;
  }

  private keyPress(event: KeyboardEvent){
    if (event.keyCode == 13){
      this.changeMail((<HTMLInputElement>event.target).value);
    }
  }

  private isDisabled(): boolean{
    return this.disabledInput;
  }

  private isBlueBg: boolean = true;
  private bgColor: string = "red";

  private users: Array<User>= [
    {username: "user1", email: "user1@test.com"},
    {username: "user2", email: "user2@test.com"},
    {username: "user3", email: "user3@test.com"},
  ]
}

interface User{
  username: string;
  email: string;
}
