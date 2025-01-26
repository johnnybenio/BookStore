import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';



@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(messege: string){
    alertify.success(messege);
  }

  warning(messege: string){
    alertify.warning(messege);
  }

  error(messege: string){
    alertify.error(messege);
  }
  

}
