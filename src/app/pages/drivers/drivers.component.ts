import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  public drivers: any = [
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/0.jpg'},
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/1.jpg'},
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/2.jpg'},
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/3.jpg'},
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/4.jpg'},
    {name: 'Alejandro Torres', email: 'alejandrotorresroa@gmail.com', image: 'assets/drivers/5.jpg'}
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  

}
