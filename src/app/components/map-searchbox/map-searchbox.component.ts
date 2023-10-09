import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { MapService } from 'src/app/services/map/map.service';
import { FormControl, FormBuilder, Validator } from '@angular/forms';
import { MapSearchForm } from './map-search.form';

@Component({
  selector: 'app-map-searchbox',
  templateUrl: './map-searchbox.component.html',
  styleUrls: ['./map-searchbox.component.scss']
})
export class MapSearchboxComponent implements OnInit {
  searchResults: any[] = [];
  searchForm = new MapSearchForm(this.fb).getForm();
  clearSearch: boolean = false;

  constructor(
    private mapService: MapService,
    private fb: FormBuilder
  ) {
    this.searchForm.valueChanges.subscribe({
      next: (value) => {
        if(value.search.length > 1){
          this.mapService.getSearchboxResults(value.search)
          .subscribe({
            next: (response) => {
              console.log(response.suggestions);
              this.searchResults = response.suggestions;
              this.clearSearch = true;
            },
            error: (error) => {
              console.log(error);
            }
          });
        }else{
          this.searchResults = [];
        }
      }
    });
  }

  ngOnInit(): void {  }

  onSubmit() {
    this.searchResults = [];
  }

  clearSearchResults() {
    this.searchResults = [];
    this.searchForm.reset();
    this.clearSearch = false;
  }
}
