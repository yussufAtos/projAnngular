import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

onSave() {
    this.appareilService.saveAppareilsToServer();
}






}
