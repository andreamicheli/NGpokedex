import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterComponent } from './components/filter/filter.component';
import { FavcardComponent } from './components/favcard/favcard.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    FavoritesComponent,
    FilterComponent,
    FavcardComponent,
    FightersComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
