import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  CameraIn:any;
  CameraOut:any;
  CameraIn1:any;
  CameraOut1:any;
  CameraIn3:any;
  CameraOut3:any;
  CameraIn4:any;
  CameraOut4:any;
  constructor(private db: AngularFireDatabase){
    this.db.object('Door1').valueChanges().subscribe(data=>{
      this.CameraIn = data['CameraIn'];
      console.log(data['CameraIn']);
   });

   this.db.object('Door1').valueChanges().subscribe(data=>{
    this.CameraOut = data['CameraOut'];
    console.log(data['CameraOut']);
 });

 this.db.object('Door2').valueChanges().subscribe(data=>{
  this.CameraIn1 = data['CameraIn'];
  console.log(data['CameraIn']);
});

this.db.object('Door2').valueChanges().subscribe(data=>{
this.CameraOut1 = data['CameraOut'];
console.log(data['CameraOut']);
});

this.db.object('Door3').valueChanges().subscribe(data=>{
  this.CameraIn3 = data['CameraIn'];
  console.log(data['CameraIn']);
});

this.db.object('Door3').valueChanges().subscribe(data=>{
this.CameraOut3 = data['CameraOut'];
console.log(data['CameraOut']);
});
this.db.object('Door4').valueChanges().subscribe(data=>{
  this.CameraIn4 = data['CameraIn'];
  console.log(data['CameraIn']);
});

this.db.object('Door4').valueChanges().subscribe(data=>{
this.CameraOut4 = data['CameraOut'];
console.log(data['CameraOut']);
});

 

}}
