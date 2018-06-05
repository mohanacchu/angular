import { Component } from '@angular/core';

// import { COMMON_NAMES } from '../common-names';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html'
})
export class DemoTemplateComponent {

  format = (item: any) => {
    return `[${item.name}]`;
  }

  // complexItems: any[] = COMMON_NAMES.map(name => {
  //   return {label: name, username: name.toLowerCase()};
  // });
  // complexItems: any[] = COMMON_NAMES.map(name => {
  //   return {label: name, username: name.toLowerCase()};
  // });
 
   
    complexItems = [
      {
        "namer" : "user1",
        "username": "user1@domain.com",
        "name": "User One"
      },
      {
        "namer" : "user2",
        "username": "user2@domain.com",
        "name": "User Two"
      },
      {
        "namer" : "user3",
        "username": "user3@domain.com",
        "name": "User Three"
      }
    
  ];
  
}
