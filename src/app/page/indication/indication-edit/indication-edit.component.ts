import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IndicationService } from 'src/app/service/indication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Indication } from 'src/app/class/indication';

@Component({
  selector: 'app-indication-edit',
  templateUrl: './indication-edit.component.html',
  styleUrls: ['./indication-edit.component.scss']
})
export class IndicationEditComponent implements OnInit {

    indicForm: FormGroup;
    indication: Indication;
    loading: boolean;

  constructor(private fb: FormBuilder,
              private indServ: IndicationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.loading = true;
    this.indicForm = this.fb.group({
      description: ['', Validators.required]
    });
    this.activatedRoute.params
    .subscribe((params) => {
      this.indServ.getIndication(params.id)
      .subscribe((indication: Indication) => {
        this.createForm(indication);
        this.loading = false;
      });
    });
  }
  createForm(indication: Indication) {
    this.indication = indication;
    this.indicForm.setValue({
      description : indication.description
    });
  }

  backClicked() {
    this.router.navigate(['/indication']);
  }

  saveIndication() {
    const val = this.indicForm.value;
    this.indServ.editIndication(this.indication.id, val.description)
    .subscribe((indication: Indication) => {
      this.createForm(indication);
    } );
    this.backClicked();
  }
}
