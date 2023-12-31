import { Component, OnInit } from '@angular/core';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private securityService: SecurityService, private router: Router ){}
  
  errors: string[] = [];

  ngOnInit(): void {
    
  }

  register(userCredentials: userCredentials){
    this.errors = [];
    this.securityService.register(userCredentials).subscribe(authenticatorResponse =>{
      this.securityService.saveToken(authenticatorResponse);
      this.router.navigate(['/']);
    },error => this.errors = parseWebAPIErrors(error));
  }

}
