import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PersonsComponent } from './persons/persons.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchDirectionPipe } from './pipes/search-direction.pipe';
import { SortPipe} from './pipes/Sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonsComponent,
    HeaderComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    SearchPipe,
    SearchDirectionPipe,
		SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
