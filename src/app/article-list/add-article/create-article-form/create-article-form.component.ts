import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-create-article-form',
  templateUrl: './create-article-form.component.html',
  styleUrls: ['./create-article-form.component.css']
})
export class CreateArticleFormComponent implements OnInit {

  newPost: FormGroup;

  constructor(fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.newPost = new FormGroup({
      user_id: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addPost() {
    if(this.newPost.status === "VALID"){
      console.log("VALID", this.newPost);
      this.articleService.postArticle(this.newPost.value).subscribe((newPost:Article)=>{
        console.log(newPost);
        this.newPost.reset();
        this.articleService.refreshArticles;
        console.log(this.articleService.articleObs);
        
        // this.router.navigate(['/users']);
      });
    }
  }

}
