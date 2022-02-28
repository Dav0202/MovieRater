import { Register } from './../../Models/register';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register = {
    username:'',
    password:'',
  }
  constructor(
   private apiservice: ApiService
  ) { }

  ngOnInit(): void {
  }
  onSubmit({value,valid}:{value:Register,valid:boolean}){
      this.apiservice.addusers(value)
        .subscribe(register =>{
          this.register = register
          console.log(value)
        } )
      }  
        

  


}
