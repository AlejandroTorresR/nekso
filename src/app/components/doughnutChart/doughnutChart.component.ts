import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'doughnutChart',
  templateUrl: './doughnutChart.component.html',
  styleUrls: ['./doughnutChart.component.scss']
})
export class doughnutChartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels:string[] = ['Hombres', 'Mujeres'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {

  }
 

}
