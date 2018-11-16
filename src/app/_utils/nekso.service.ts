import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Injectable()
export class NeksoService {

  public show: boolean = false;

  constructor(private router: Router) {

  }

}
