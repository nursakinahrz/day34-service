import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormComponent } from './components/form.component';
import { User } from './components/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//another alternative
//there's alternative: binding/service/ViewChild
//export class AppComponent implements AfterViewInit {
  //@ViewChild(FormComponent)
  //formComp!: FormComponent

  //sub$!: Subscription
  //ngAfterViewInit() {
//this.sub$ = this.formComp.onNewUser.subscribe(
//(data: User) => {
//this.onNewUser(data)
//}
//)
  //}
//}

export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild(FormComponent)
  formComp!: FormComponent

  friends: User[] = []
  name = ""

  sub$!: Subscription


  onNewUser(data: User) {

    //const tmp: User[] = []

  //   for (let f of this.friends)
  //   tmp.push(f)
  //   tmp.push(data)
  // this.friends = tmp
  // shallow copy

  //this below is a shortcut of the above 4 lines of code
  this.friends = [ ...this.friends, data]


  //reference type 
  //this.friends.push(data)

  //scalar/primitive type
  this.name = data.name
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.sub$ = this.formComp.onNewUser.subscribe(
      (data: User) => {
        this.onNewUser(data)
      }
    )

  }

}
