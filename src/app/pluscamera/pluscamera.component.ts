import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
//import { database } from 'firebase';



@Component({
  selector: 'app-pluscamera',
  templateUrl: './pluscamera.component.html',
  styleUrls: ['./pluscamera.component.css']
})
export class PluscameraComponent{
  name:any;
  d2:any;
  d3:any;
  d4:any;

  constructor(private router: Router, private db: AngularFireDatabase) { }


  black(){
    this.router.navigate(['/home']);
  }

  addWiki(data: NgForm){

    this.db.list("/Door1").push(data.value);
    
  }

  add(data1, data2 : NgForm ){
    if(data1.value == 1){
        this.addWiki(data2);
    }
  }


}
