import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IndicationService } from '../../../service/indication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indication-add',
  templateUrl: './indication-add.component.html',
  styleUrls: ['./indication-add.component.scss']
})
export class IndicationAddComponent implements OnInit {
  public addForm: FormGroup;
  public isLoading: boolean;
  constructor(private fb: FormBuilder, private ind: IndicationService, private router: Router) { }


  ngOnInit() {
    this.addForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  onSubmit(){
    this.isLoading = true;
    if (this.addForm.valid){
      this.ind.createIndication(this.addForm.value)
      .subscribe(data => {

        this.isLoading = false;
        this.router.navigate( ['/indication/add', data.id] );
      });
    }
  }
}
