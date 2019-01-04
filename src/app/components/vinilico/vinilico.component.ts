import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-vinilico',
  templateUrl: './vinilico.component.html',
  styleUrls: ['./vinilico.component.css']
})
export class VinilicoComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.category == 'vinilico') {
          this.articles.push(element);
        }
      });
           
    });
  }

  ngOnInit() {
  }

}
