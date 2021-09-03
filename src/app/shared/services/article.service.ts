import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(<Article[]>[]);

  articleObs: Observable<Article[]> = this.articleSubject.asObservable();

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.typicode_url}/posts`);
  }

  getArticle(id: number): Observable<Article>{
    return this.http.get<Article>(`${environment.typicode_url}/posts/${id}`);
  }

  getArticleComments(articleId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${environment.typicode_url}/posts/${articleId}/comments`);
  }

  postArticle(p: Article): Observable<Article> {
    return this.http.post<Article>(`${environment.typicode_url}/posts`, p);
  }

  delArticle(a: Article): Observable<any> {
    return this.http.delete<any>(`${environment.typicode_url}/posts/${a.id}`);
  }

  refreshArticles(): void {
    this.http.get<Article[]>(`${environment.typicode_url}/posts`)
      .subscribe((a: Article[]) => {
        this.articleSubject.next(a);
      })
  }
}
