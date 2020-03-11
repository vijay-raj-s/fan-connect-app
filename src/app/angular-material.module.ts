//Material Design
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';  
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
 
@NgModule({
    imports: [MatAutocompleteModule,MatInputModule, MatButtonModule, MatButtonToggleModule],
    exports: [MatAutocompleteModule,MatInputModule, MatButtonModule, MatButtonToggleModule]
})

export class AngularMaterialModule { }