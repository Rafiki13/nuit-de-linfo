import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit {

  @Input() search: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  newSearch(){
    console.log(this.search);
    let input = document.querySelector("#searchbarContainer");

    if(this.search != ""){

      // @ts-ignore
      if(!input.classList.contains("resultFound")){
        // @ts-ignore
        input.classList.add("resultFound");
      }
    }else{

      // @ts-ignore
      if(input.classList.contains("resultFound")){
        // @ts-ignore
        input.classList.remove("resultFound");
      }
    }
  }

}
