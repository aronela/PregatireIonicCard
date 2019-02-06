import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public countLike: number = 0;
  public comments: { name: string, comment: string } [] = [{
    name: 'Vanda',
    comment: 'very nice!'
  }];

  constructor(public navCtrl: NavController, private alertController: AlertController) {

  }

  clickLike() {
    this.countLike++;
  }

  clickComment() {
    let addReminderAlert = this.alertController.create({
      title: "Leave a comment",
      inputs: [
        {
          placeholder: 'Your name',
          name: 'nameInput',
        },
        {
          placeholder: 'Your comment',
          name: 'commentInput',
        },
      ],
      buttons: [
        {
        text: 'Cancel',
        },
        {
          text: 'Post',
          handler: (inputData) => {
            if(inputData.nameInput && inputData.commentInput) {
              this.comments.unshift(
              {
                name: inputData.nameInput,
                comment: inputData.commentInput,
              }

              )
            }
          }
        },
      ]
    });
    addReminderAlert.present();
  }



}
