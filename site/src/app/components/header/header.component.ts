import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchData } from 'src/app/models/search-data.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public searchEmmiter: EventEmitter<string> = new EventEmitter<string>();


  public value = "";

  constructor() { }

  ngOnInit() {
  }

  public onSearchSubmitted(): void {
    this.searchEmmiter.emit(this.value);
  }


}
