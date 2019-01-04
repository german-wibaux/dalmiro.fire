import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../models/articleInterface';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      this.articles = articles;
      }
    );
           
    
  }

  ngOnInit() {
  }

}
