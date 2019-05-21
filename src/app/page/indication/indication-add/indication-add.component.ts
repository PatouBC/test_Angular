import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IndicationService } from '../../../service/indication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indication-add',
  templateUrl: './indication-add.component.html',
  styleUrls: ['./indication-add.component.scss']
})
export class IndicationAddComponent implements OnInit {
  public indicForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder,
              private indServ: IndicationService,
              private router: Router,
              private location: Location) { }


  ngOnInit() {
    this.indicForm = this.fb.group({
      description: [null, Validators.required]
    });
  }
  backClicked() {
    this.location.back();
  }
  createIndication() {
    const val = this.indicForm.value;
    this.loading = true;
    this.indServ.createIndication(val.description)
    .subscribe( () => {
      this.loading = false;
      this.backClicked();
    } );
  }
}
