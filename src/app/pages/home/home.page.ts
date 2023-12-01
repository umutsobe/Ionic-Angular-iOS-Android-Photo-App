import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';
@Component({
  selector: 'app-home',
  template: `
    <div>home works</div>
    <ion-content>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button (click)="addPhotoToGallery()">
          <ion-icon name="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-grid>
        <ion-row>
          <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
            <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
            <div>{{ photo.filepath }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
})
export class HomePage implements OnInit {
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
