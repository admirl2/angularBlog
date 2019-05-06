import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
love:number;
  constructor() {this.love=0; }
@Input()titlePost:string;
  @Input()contentPost:string;
  @Input() datePub:Date;
  @Input() loveI:number;
  ngOnInit() {
  }

  loveIts1(){
    this.love=this.love+1;
    return this.love;
  }

  dontLoveIts(){
    this.love=this.love-1;
    return this.love;
  }

  getColorComponent(){
    if(this.love>0){
      return 'lightgreen';
    }if (this.love==0) {
      return 'white';
    }if(this.love<0){
      return 'pink';
    }
  }

  getColor(){
    if(this.love>0){
      return "green"
    }if(this.love==0){
      return 'black';
    }if(this.love<0){
      return 'red';
    }
  }

}
