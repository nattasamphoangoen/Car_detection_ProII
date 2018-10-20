import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plusc3',
  templateUrl: './plusc3.component.html',
  styleUrls: ['./plusc3.component.css']
})
export class Plusc3Component {

  name:any;

  constructor(private router: Router, private db: AngularFireDatabase) {
    
   }

   
addWiki(data: NgForm){
  this.db.list("/Door3").push(data.value);
  
}



}
