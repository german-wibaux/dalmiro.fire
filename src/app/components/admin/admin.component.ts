import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    
  }
  
  articles: ArticleInterface[];
  editState: boolean = false;
  articleToEdit: ArticleInterface;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */      
      this.articles = articles;
    });
  }
    

  ngOnInit() {
    
  }


  /*Edit a property*/
  editProperty(event, article: ArticleInterface) {
    this.editState = true;
    this.articleToEdit = article;
  }

  showChange() {
    
  }

  deleteArticle(article) {
    this.articleService.deletArticle(article);
    this.router.navigate(['/private']);
  }

}
