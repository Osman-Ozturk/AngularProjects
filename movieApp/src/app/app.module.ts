import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [  // services
    AlertifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
