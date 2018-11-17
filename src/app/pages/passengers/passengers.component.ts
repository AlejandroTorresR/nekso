import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { NeksoService } from '../../_utils/nekso.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  public passengers: any = this._NeksoService.passengers;

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
    this._SweetalertsService.confirmAlert('Borrar usuario', `¿Está seguro de borrar a ${user}?`)
    .then((res) => {
          if(res.value){
            this._SweetalertsService.typeAlert('Confirmado', 'El usuario ha sido borrado', 'success')
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
