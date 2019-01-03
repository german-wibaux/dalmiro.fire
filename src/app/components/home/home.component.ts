import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // properties: PropiedadInterface[];
  editState: boolean = false;
  // propertyToEdit: PropiedadInterface;

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute
  ) { 
    this.articlesService.getArticles().subscribe( properties => {
      /** List every properties */
      // this.properties = properties;
        
    });
    //this.propertiesService.getProperty().subscribe( property => {
      //console.log(property);
    
  }

  // goDetails () {
  //   this.route.navigate(['/details'], { queryParams: { order: proper } });
  // }


  ngOnInit() { }  

  // updateCurso(property: PropiedadInterface) {
  //   this.propertiesService.updateProperty(property);
  // }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )      
      if ( element ) element.scrollIntoView ( )
    });    
  }

}
