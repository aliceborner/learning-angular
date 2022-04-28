import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // LEARNING template or templateUrl are always needed and template code can be inline
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
