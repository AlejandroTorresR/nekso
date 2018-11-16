import { Component, OnInit } from '@angular/core';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { NeksoService } from '../../_utils/nekso.service';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {

  constructor(public _NeksoService:NeksoService) {

  }

  ngOnInit() {
    
  }

  toggleMenu(){
    this._NeksoService.show = !this._NeksoService.show;
    if(this._NeksoService.show){
    	document.body.style.overflowY = "hidden";
    } else {
    	document.body.style.overflowY = "inherit";
    }
  }

}
