import { Component, OnInit } from '@angular/core';
import { IndicationService } from '../../service/indication.service';
import { Indication } from '../../class/indication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent implements OnInit {
  error: boolean;
  indications: Indication[];
  loading: boolean;

  constructor(private indServ: IndicationService, private router: Router) { }

  ngOnInit() {
    this.getIndications();
    }

  getIndications() {
    this.indServ.getIndications()
    .subscribe((data: Indication[]) => {
      this.indications = data;
    });
  }

  deleteIndication(id: number) {
    this.loading = true;
    this.indServ.deleteIndication(id)
    .subscribe( () => {
      this.getIndications();
    });
  }

  createIndication() {
    this.router.navigate(['indication/add']);
  }

}
