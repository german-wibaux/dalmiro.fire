import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-prefinished',
  templateUrl: './prefinished.component.html',
  styleUrls: ['./prefinished.component.css']
})
export class PrefinishedComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.category == 'prefinished') {
          this.articles.push(element);
        }
      });
           
    });
  }

  ngOnInit() {
  }

}
