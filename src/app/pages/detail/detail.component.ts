import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NeksoService } from '../../_utils/nekso.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public detailData: FormGroup;
  public edit: boolean = false;
  public user: any;
  public objectKeys: any = Object.keys;
  public validForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    public _NeksoService: NeksoService, 
    public _SweetalertsService:SweetalertsService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.detailData = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      image: ['assets/user.jpg']
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(this.objectKeys(params)[0] != undefined){
        let type = this.objectKeys(params)[0];
        this.detailData.patchValue(this._NeksoService[type][params[type]])
      }
    })
  }

  saveUser() {  
    if(this.detailData.valid){
      this._SweetalertsService.typeAlert('Confirmado', 'El conductor ha sido guardado', 'success')
      this.router.navigate(['dashboard/drivers'])
    } else {
      this.validForm = true;
    }
  }

  pictureChange(e){
    let reader = new FileReader();
    reader.onload = (e : any) => {
      this.detailData.controls.image.patchValue(e.target.result)
    }
    reader.readAsDataURL(e.target.files[0]);
  }

}
