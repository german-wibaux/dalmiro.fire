import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-revestimientos',
  templateUrl: './revestimientos.component.html',
  styleUrls: ['./revestimientos.component.css']
})
export class RevestimientosComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.category == 'revestimientos') {
          this.articles.push(element);
        }
      });
           
    });
  }

  ngOnInit() {
  }

}
