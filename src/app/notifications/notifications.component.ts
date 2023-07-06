import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  showNotification(horizontalPosition:any, verticalPosition:any){
    this._snackBar.open('Welcome to Admin-Dashboard - a beautiful bie for every web developer.', 'ok', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }
  ngOnInit() {
  }

}
