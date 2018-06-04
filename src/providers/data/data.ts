import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  interests: {name: string, enabled: boolean}[] = [
    {
      name: 'sport',
      enabled: false
    },{
      name: 'verhalen',
      enabled: false
    },{
      name: 'avontuur',
      enabled: false
    },{
      name: 'rotterdam',
      enabled: false
    },{
      name: 'muziek',
      enabled: false
    },{
      name: 'liefde',
      enabled: false
    },{
      name: 'natuur',
      enabled: false
    },{
      name: 'techniek',
      enabled: false
    },{
      name: 'uiterlijk',
      enabled: false
    },{
      name: 'geschiedenis',
      enabled: false
    },{
      name: 'eten & drinken',
      enabled: false
    },{
      name: 'architectuur',
      enabled: false
    },
  ]

  learningTopics: {name: string}[] = [
    {
      name: "kunstgeschiedenis",
    },
    {
      name: "jezelf"
    },
    {
      name: "actualiteiten"
    }
  ]

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
