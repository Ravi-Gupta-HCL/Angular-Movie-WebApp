import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { userCredentials } from '../security.models';
import { parseWebAPIErrors } from 'src/app/utilities/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private securityService: SecurityService,
    private router: Router){}

    errors: string[] =[];

  ngOnInit(): void {
  }

  login(userCredentials: userCredentials){
    this.securityService.login(userCredentials).subscribe(authenticatorResponse => {
      this.securityService.saveToken(authenticatorResponse);
      this.router.navigate(['/'])
    },error => this.errors = parseWebAPIErrors(error));
  }

}
