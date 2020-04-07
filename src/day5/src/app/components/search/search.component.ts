import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { TodoType } from 'src/app/types/todo.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch:EventEmitter<any> = new EventEmitter();

  searchField: FormControl;
  results: TodoType[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchField = new FormControl('');

    this.searchField.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(searhTerm => {
      this.results = this.searchService.search(searhTerm);
      this.onSearch.emit(this.results);
    });
  }

}