import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { NeksoService } from '../../_utils/nekso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: any = [
    {name : 'Conductores', url: 'drivers', icon: 'assignment_ind'},
    {name : 'Pasajeros', url: 'passengers', icon: 'account_box'}
  ]
  public show: boolean = false;

  constructor(
    public _SweetalertsService: SweetalertsService,
    private route: ActivatedRoute,
    private router: Router,
    public _NeksoService:NeksoService
  ) {

  }

  ngOnInit() {

  }

  logout() {
    this._SweetalertsService.confirmAlert('Cerrar sesión', '¿Está seguro de hacer esta acción?')
    .then((res) => {
          if(res.value){
            this.router.navigate(['/']);
          } else {
            console.log(res)
          }          
        },
        err => {
          console.log(err);
        })
    .catch((err) => {
      console.log(err, 'No')
    });
  }

}
