import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleInterface } from 'src/app/models/articleInterface';

@Component({
  selector: 'app-melamina',
  templateUrl: './melamina.component.html',
  styleUrls: ['./melamina.component.css']
})
export class MelaminaComponent implements OnInit {

  articles:  ArticleInterface[] = [];

  constructor(private articleService: ArticleService) { 
    this.articleService.getArticles().subscribe( articles => {
      /** List every properties */
      //console.log(articles);
      articles.forEach(element => {
        if (element.category == 'melaminico') {
          this.articles.push(element);
        }
      });
          
    });
  }

  ngOnInit() {
  }

}
