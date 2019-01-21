import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../models/articleInterface';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articlesOffer:  ArticleInterface[] = [];
  articlesNews:  ArticleInterface[] = [];


  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.offer) {
          this.articlesOffer.push(element);
        } else if(element.news) {
          this.articlesNews.push(element);
        }
      });
      
      }
    );
           
    
  }

  ngOnInit() {
  }

}
