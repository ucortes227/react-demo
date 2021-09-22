import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    goals: any;

  constructor(
      private activatedRouter: ActivatedRoute,
      private router: Router,
      private dataService: DataService
    ) {
      this.activatedRouter.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
      this.dataService.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
      this.router.navigate(['']);
  }

}
