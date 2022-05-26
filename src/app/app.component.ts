import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'keycloak-demo';
  constructor(private keycloakService: KeycloakService) {}
  

  userName:string = "test";
  
  
  logout() {
    this.keycloakService.logout();
  }

  validateIsloggedIn(){
    console.log(this.keycloakService.isLoggedIn);
    console.log(this.keycloakService.getUsername());
  }

  ngOnInit(): void {
   this.userName=this.keycloakService.getUsername()

   this.keycloakService.loadUserProfile().then(profile => {
    console.log('Cx Profile Information', profile);
  })


  }

  


}
