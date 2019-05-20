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
  displayedColumns: string[] = ['id', 'description'];
  indications: Indication[];
  isLoadingResults = true;

  constructor(private ind: IndicationService, private router: Router) { }

  ngOnInit() {
    this.getIndications();
    }

  getIndications(): void {
    this.ind.getIndications()
    .subscribe((data: Indication[]) => {
      this.indications = data;
    });
  }

  deleteIndication(id) {
    this.ind.deleteIndication(id)
    .subscribe(data => {
      this.getIndications();
    });
  }

  createIndication() {
    this.router.navigate(['indication/add']);
  }

}
