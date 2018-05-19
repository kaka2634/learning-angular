import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-material-autocomplete',
  templateUrl: './material-autocomplete.component.html',
  styleUrls: ['./material-autocomplete.component.css']
})
export class MaterialAutocompleteComponent implements OnInit {

y
  myControl: FormControl = new FormControl();

  options = [
    {key:'One'},
    {key:'Two'},
    {key:'Three'}
  ];

  filteredOptions: Observable<object[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string):  object[]{
    return this.options.filter(option =>
      option.key.toLowerCase().includes(val.toLowerCase()));
  }

}


