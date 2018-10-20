import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plusc2',
  templateUrl: './plusc2.component.html',
  styleUrls: ['./plusc2.component.css']
})
export class Plusc2Component {

  name:any;

  constructor(private router: Router, private db: AngularFireDatabase) {
    
   }

   
addWiki(data: NgForm){
  this.db.list("/Door2").push(data.value);
  
}


  

}
