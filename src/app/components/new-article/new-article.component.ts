import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { ArticleInterface } from 'src/app/models/articleInterface';
import { ArticleService } from '../../services/article.service';
import { NgForm } from '@angular/forms';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  uploadPercent: Observable<number>;
  uploadPercent1: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;

  article: ArticleInterface = {
    description: '',
    category:'',
    images: [],
    news: false,
    offer: false
  }

  constructor(private articleService: ArticleService, 
              private storage: AngularFireStorage,
              private router: Router) { }

  ngOnInit() {
  }

  onSaveArticle(formInput: NgForm) {
    console.log(this.article);
    this.articleService.addArticle(this.article);
    
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
        this.article.images.push(url);        
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
        this.article.images.push(url);        
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
