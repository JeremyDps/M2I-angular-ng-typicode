import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListModule } from './article-list/article-list.module';
import { ArticlePageComponent } from './article-page/article-page.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListModule } from './user-list/user-list.module';

const routes: Routes = [
  // redirection
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  // Routes pour la section utilisateur
  {
    path: 'users',
    children: [
      { path: '', pathMatch: 'full', loadChildren: () => UserListModule },
      { path: 'add', component: UserAddComponent, pathMatch: 'full' },
    ],
  },
  // Routes pour les articles
  {
    path: 'articles',
    children: [
      { path: '', pathMatch: 'full', loadChildren: () => ArticleListModule },
      { path: ':id', component: ArticlePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
