import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-zocalos',
  templateUrl: './zocalos.component.html',
  styleUrls: ['./zocalos.component.css']
})
export class ZocalosComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.category == 'zocalos-contramarcos') {
          this.articles.push(element);
        }
      });
           
    });
  }

  ngOnInit() {
  }

}
