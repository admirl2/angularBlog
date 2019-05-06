import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dateD=new Date();
  constructor(){}
  datePub=new Promise((resolve, reject) =>{
    const date=new Date();
    setTimeout(()=>{resolve(date)},3000);
  }

);
  post=[
    {
      title:"Mon premier post ",
content:' Va toujours droit vers ton ennemi, et sois droit envers ton ami ; franchise, sincérité, et toujours décidé.' +
  'Citation de Henri-Frédéric Amiel ; Journal intime, le 13 octobre 1840.',
datePublication:this.dateD
    },
    {
      title:'Mon deuxieme post',
      content:'Chaque jour qui commence est une page vierge. Une étendue de temps qui n\'a pas encore été vécue. On peut y écrire ce que l\'on veut. Il n\'appartient qu\'à soi de décider de réussir cette journée, malgré ses contraintes et ses obligations. \n' +
        'Citation de Catherine Rambert ; Petite philosophie du matin (2007)',
      datePublication:this.dateD
      
    },
    {
      title:'Encore un post',
      content:'Persévère toujours dans ton entreprise, tu en surmonteras les difficultés. \n' +
        'Citation de l\'Orient ; L\'Orient en maximes et proverbes (1909)',
      datePublication:this.dateD

    }
  ];




}
