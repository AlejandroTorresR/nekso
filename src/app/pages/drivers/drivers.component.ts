import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { NeksoService } from '../../_utils/nekso.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  public drivers: any = this._NeksoService.drivers;

  constructor(
    public _SweetalertsService:SweetalertsService,
    private route: ActivatedRoute,
    private router: Router,
    public _NeksoService: NeksoService
  ) {

  }

  ngOnInit() {

  }

  deleteUser(index, user){
    this._SweetalertsService.confirmAlert('Borrar conductor', `¿Está seguro de borrar a ${user}?`)
    .then((res) => {
          if(res.value){
            this._SweetalertsService.typeAlert('Confirmado', 'El conductor ha sido borrado', 'success')
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
