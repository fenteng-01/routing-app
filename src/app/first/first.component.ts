import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  name!: string;

  goToItems(): void {
    console.log(this.router);
    // A value of null or undefined indicates that the navigation commands should be applied relative to the root
    this.router.navigate(['child-a'], { relativeTo: null });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params.name;
    });
  }
}
