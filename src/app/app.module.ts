import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { StartComponent } from './pages/start/start.component';
import { GamesComponent } from './pages/games/games.component';
import { VocabularyComponent } from './pages/vocabulary/vocabulary.component';
import { SentenceComponent } from './pages/sentence/sentence.component';
import { HomeComponent } from './pages/home/home.component';
import { VocComponent } from './pages/games/voc/voc.component';

@NgModule({
  declarations: [AppComponent, StartComponent, GamesComponent, VocabularyComponent, SentenceComponent, HomeComponent, VocComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
