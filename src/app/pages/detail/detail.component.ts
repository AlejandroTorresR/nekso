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
  public type: string;

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
      image: ['assets/user.jpg'],
      brand: [''],
      model: [''],
      plate: ['']
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      let key = this.objectKeys(params)[0];
      if(this.objectKeys(params)[0] == 'drivers' || this.objectKeys(params)[0] == 'passengers'){
        this.detailData.patchValue(this._NeksoService[key][params[key]])
        this.type = key;
      }
      if(this.objectKeys(params)[0] == 'create'){
        this.type = params[key]
      }
    })
  }

  saveUser() {  
    if(this.detailData.valid){
      this._SweetalertsService.typeAlert('Confirmado', 'El usuario ha sido guardado', 'success')
      this.router.navigate([`dashboard/${this.type}`])
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
