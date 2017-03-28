import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-data-element',
  templateUrl: './data-element.component.html',
  styleUrls: ['./data-element.component.css']
})
export class DataElementComponent implements OnInit {

  @Input() dataElements: Array<any>
  constructor() { }

  ngOnInit() {
  }

}
