import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router,private db: AngularFireDatabase) { 
    

  }

  ngOnInit() {
  }

  login() {
    //if (this.items == this.items && this.items == this.items){
      this.router.navigate(['/home']);
    //}  
    
  }

  
  // public(){

  // }


}
