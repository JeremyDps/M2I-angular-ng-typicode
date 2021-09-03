import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListComponent } from './article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from '../article-page/article-page.component';
import { CommentComponent } from '../article-page/comment/comment.component';
import { SpinnerComponent } from '../shared/component/spinner/spinner.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddArticleComponent } from './add-article/add-article.component';
import { CreateArticleFormComponent } from './add-article/create-article-form/create-article-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticlePageComponent,
    CommentComponent,
    SpinnerComponent,
    AddArticleComponent,
    CreateArticleFormComponent,
  ],
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    ArticleListComponent,
    ArticleComponent
  ]
})
export class ArticleListModule { }
