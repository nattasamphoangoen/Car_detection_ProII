import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-plusc4',
  templateUrl: './plusc4.component.html',
  styleUrls: ['./plusc4.component.css']
})
export class Plusc4Component  {

  name:any;

  constructor(private router: Router, private db: AngularFireDatabase) {
    
   }

   
addWiki(data: NgForm){
  this.db.list("/Door4").push(data.value);
  
}



}
