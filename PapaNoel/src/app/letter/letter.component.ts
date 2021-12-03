import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {
  isOpened = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const letter = this.route.snapshot.params['letter'];
    console.log(letter);
  }

  onClick(){
    this.isOpened = !this.isOpened;
  }
}
