import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
   declarations: [
      AppComponent,
      PostComponent,
      SearchPipe
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
