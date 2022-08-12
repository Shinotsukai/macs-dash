import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _dataStore:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public dataStore$:Observable<any[]> = this._dataStore.asObservable();

  constructor() { }

  onUpdateData(form:FormGroup){
    this._dataStore.next([
      ...this._dataStore.getValue(),form
    ])
  }
}
