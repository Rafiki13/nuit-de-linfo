import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit {

  @Input() search: string = "";

  testSearch = [
    {
      nom: "Gouaich",
      prenom: "Abdelckader"
    },
    {
      nom: "Gouach",
      prenom: "Michel"
    },
    {
      nom: "Gouich",
      prenom: "Michel"
    }
  ]

  actualSearch = [];
  actualSearchTampon= [];

  constructor() { }

  ngOnInit(): void {
  }

  newSearch(){
    let input = document.querySelector("#searchbarContainer");

    if(this.search != ""){

      // @ts-ignore
      if(!input.classList.contains("resultFound")){
        // @ts-ignore
        input.classList.add("resultFound");
      }

      let letters = Array.from(this.search);
      if(letters.length == 1){
        this.actualSearchTampon = [];
        this.actualSearch = [];
        //requête

        //requête au backend --> nom ou prénom ou nm bateau commence par lettre en pos 1

        for(let value of this.testSearch){
          // @ts-ignore
          this.actualSearchTampon.push(value);
          // @ts-ignore
          this.actualSearch.push(value);
        }
      }else{
        this.actualSearch = [];
        for(let i = 0; i < this.actualSearchTampon.length; i++){
          this.actualSearch[i] = this.actualSearchTampon[i];
        }

        for(let i = 0; i < this.actualSearch.length; i++){
          let entry = this.actualSearch[i];

          //2 modes : 1 entrée, 2 entrées
            // @ts-ignore
          let try1 = (entry.nom + " " + entry.prenom);
            // @ts-ignore
          let try2 = (entry.prenom + " " + entry.nom);


          // cas nom/prénom
          let keepNom = true;
          let keepPrenom = true;
          for(let j = 0; j < letters.length; j++){
            // @ts-ignore
            if(try1.charAt(j).toLowerCase() != letters[j].toLowerCase()) keepNom = false;
            // @ts-ignore
            if(try2.charAt(j).toLowerCase() != letters[j].toLowerCase()) keepPrenom = false;
          }

          if(!keepNom && !keepPrenom){
            this.actualSearch.splice(i, 1);
            if(this.actualSearch.length == 1) this.actualSearch = [];
          }

          // cas nom bateau
          // à compléter
        }
      }
    }else{
      this.actualSearchTampon = [];
      this.actualSearch = [];

      // @ts-ignore
      if(input.classList.contains("resultFound")){
        // @ts-ignore
        input.classList.remove("resultFound");
      }
    }
  }

}
