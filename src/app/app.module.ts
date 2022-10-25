import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterComponent } from './components/filter/filter.component';
import { FavcardComponent } from './components/favcard/favcard.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { BattleComponent } from './components/battle/battle.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpokeComponent } from './components/addpoke/addpoke.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    FavoritesComponent,
    FilterComponent,
    FavcardComponent,
    FightersComponent,
    BattleComponent,
    AddComponent,
    AddpokeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
