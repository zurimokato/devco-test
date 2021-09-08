import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()user?:any;

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  //regresar atras
  backClicked() {
    this.location.back();
  }
 
}
