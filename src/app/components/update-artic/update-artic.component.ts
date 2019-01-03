import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-update-artic',
  templateUrl: './update-artic.component.html',
  styleUrls: ['./update-artic.component.css']
})
export class UpdateArticComponent implements OnInit {

  uploadPercent1: Observable<number>;
  category: string;
  article: ArticleInterface = null;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;
  constructor(private articleService: ArticleService , 
              private route: ActivatedRoute, 
              private router:Router,
              private storage: AngularFireStorage) { }

  ngOnInit() { 
    // this.propertyService.getProperty()
    this.route.params.subscribe( result => {
      this.articleService.getArticle(result['id']).subscribe( resultProp => {
       // console.log(resultProp);
        this.article = resultProp;
       this.category = resultProp.category;
     
      //  console.log(this.article);
      //  this.images = this.property.imagen;
      //  for (let i = 0; i < this.images.length; i++) {
      //    this.slides.push({
      //      image: this.images[i]
      //    });
      //  }
      
             
      })
    });
   }


   onUpdateArticle(article: ArticleInterface){
    this.articleService.updateArticle(article);
      this.router.navigate(['/private']);  
   }

   uploadFile(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'taul-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.article.images[0] = url;        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });

    

    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  uploadFile1(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type dalmiro-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'articles/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'taul-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent1 = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.article.images[1] = url;          
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });

    

    

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }

  onChange(event) {
    this.article.category = event.target.value;
    //console.log(this.article.category);
  }

}
