import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '../../services/article.service';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  // properties: PropiedadInterface[];
  editState: boolean = false;
  // propertyToEdit: PropiedadInterface;

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private authservice: AuthService,
    private router: Router
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

  user = {
    email: '',
    password: ''
 };

  // updateCurso(property: PropiedadInterface) {
  //   this.propertiesService.updateProperty(property);
  // }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )      
      if ( element ) element.scrollIntoView ( )
    });    
  }

  signInWithEmail() {
    this.authservice.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          
        
          this.router.navigate(['/private']);
       })
       .catch((err) => console.log('error: ' + err));
  }

}
