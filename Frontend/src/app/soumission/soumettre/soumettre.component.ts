import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-soumettre',
  templateUrl: './soumettre.component.html',
  styleUrls: ['./soumettre.component.scss']
})
export class SoumettreComponent implements OnInit {

  @Input() type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  newTypeOfEntry(){
    console.log(this.type);
  }

}
