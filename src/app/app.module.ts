import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { ArticlePageComponent } from './article-page/article-page.component';
import { CommentComponent } from './article-page/comment/comment.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListModule } from './user-list/user-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListModule } from './article-list/article-list.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserListModule,
    BrowserAnimationsModule,
    ArticleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
