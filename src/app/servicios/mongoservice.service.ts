import { Injectable } from '@angular/core';

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, db)){
  var cursor = db.collection('Employee').find();

  cursor.each(function(err, doc){

    console.log(doc);

  });



});



@Injectable({
  providedIn: 'root'
})
export class MongoserviceService {


  

constructor() { }

}
