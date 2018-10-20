import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-pluscamera',
  templateUrl: './pluscamera.component.html',
  styleUrls: ['./pluscamera.component.css']
})
export class PluscameraComponent  {
  name:any;

  constructor(private router: Router, private db: AngularFireDatabase) {
    
   }

   
addWiki(data: NgForm){
  this.db.list("/Door1").push(data.value);
  
}


}
