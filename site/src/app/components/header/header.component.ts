import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchFormData } from 'src/app/models/search-data.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sendForm: EventEmitter<SearchFormData> = new EventEmitter<SearchFormData>();


  public formData: SearchFormData = {
    text: ''
  };

  constructor() { }

  ngOnInit() {
  }

  public submitForm(): void {
    this.sendForm.emit(this.formData);
  }


}
