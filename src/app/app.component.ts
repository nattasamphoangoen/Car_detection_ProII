import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "CarDetectionCounting"
  temp:any;
  use:any;
  pass:any;
  use00:any;
  pass00:any;

  constructor(private db: AngularFireDatabase){
    this.db.object('camera').valueChanges().subscribe(data=>{
      this.temp = data['count'];
      console.log(data['count']);
   });
  
   this.db.object('camera').valueChanges().subscribe(data=>{
    this.use = data['username'];
    console.log(data['username']);
 });

 this.db.object('camera').valueChanges().subscribe(data=>{
  this.pass = data['password'];
  console.log(data['password']);
});
  
}
// showAlert(item) {
//   if((this.use00 == this.use && this.pass00 == this.pass)){
//     this.ng.push(HomePage, {
//         item: item
//       });
//       const itemRef2 = this.db.object('usertest');
//       itemRef2.update({user:this.use00});
//       itemRef2.update({pass:this.pass00});
//     }
// }

}

export class HomePage {
  

}
