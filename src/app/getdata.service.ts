import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { emps } from './empsData.interface';
import { logindata } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor( private http:HttpClient) { }

  private _url="assets/data/emploees.json";
  
  
  // get data form local flie.json
  getData():Observable<emps[]>{
    return this.http.get<emps[]>(this._url)
  }

  // post data to server in its database   like => firebase realtime databse 
  postData(data){
    this.http.post('https://porto-204a6-default-rtdb.firebaseio.com/data.json',data).subscribe((res)=>{
      console.log(res)
    })
  }

  // get data from server    like => firebase realtime databse server
  getdataServer():Observable<logindata[]>{
    return this.http.get<logindata[]>("https://porto-204a6-default-rtdb.firebaseio.com/data.json")
  }
  
  updateDataServer(id:string ,value:logindata){
    this.http.put(`https://porto-204a6-default-rtdb.firebaseio.com/data/${id}.json`,value).subscribe()
  }

  // get local data from file
  // getlocaldata():Observable<[{name:string,age:number}]>{
  //   return this.http.get<[{name:string,age:number}]>(this._url)
  // }
}
