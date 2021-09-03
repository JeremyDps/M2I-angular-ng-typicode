import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  articleSub?: Subscription;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles: Article[])=>{
      this.articles = articles;

      this.getArticles();
    })
  }

  ngOnDestroy(){
    if(this.articleSub){
      // désinscription à l'opbservable (libération des ressources)
      this.articleSub.unsubscribe();
    }
  }

  getArticles() {
    this.articleService.refreshArticles();
  }
}
