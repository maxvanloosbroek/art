import { Injectable } from '@angular/core';
import { Interest, LearningTopic, Tour } from '../../app/interfaces';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  interests: Interest[] = [
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
      enabled: true
    },{
      name: 'muziek',
      enabled: true
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
      name: 'wetenschap',
      enabled: false
    },{
      name: 'eten & drinken',
      enabled: false
    },{
      name: 'architectuur',
      enabled: false
    },
  ];

  learningTopics: LearningTopic[] = [
    {
      name: "kunstgeschiedenis",
    },
    {
      name: "jezelf"
    },
    {
      name: "actualiteiten"
    }
  ];

  tours: Tour[] = [
    {
      name: 'muziek-jezelf',
      slides: [{
        title : "De verheerlijking van Maria",
        artist: "Geertgen tot Sint Jans",
        zaal: "zaal 34",
        muziek: "muziek | Girl On Fire | Alicia Keys",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "The Glorification of the virgin mary - 34.jpg"
        },{
        title : "Grey, Orange on Maroon no.8",
        artist: "Mark Rothko",
        zaal: "zaal 25",
        muziek: "muziek | True Colours | Cyndi Lauper",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Grey Orange on maroon no8 - Mark Rothko - 25.jpg"
        },{
        title : "Vrouw aan het Virginaal",
        artist: "Gabriël Metsu",
        zaal: "zaal 22",
        muziek: "muziek | A Head Full of Dreams | Coldplay",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Lady at a virginal - Gabriel Metsu - 22.jpg"
        },{
        title : "Stilleven met muziekinstrumenten, boeken en sculptuur",
        artist: "Evaristo Baschenis",
        zaal: "zaal 30",
        muziek: "muziek | Sexy and I Know It| LMFAO",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Still Life with Musical Instruments Books and Sculpture - Evaristo Baschenis - 30.jpg"
        },{
        title : "Un verger au printemps",
        artist: "Alfred Sisley",
        zaal: "zaal 13",
        muziek: "muziek | Feeling Good | Nina Simone",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Un verger au printemps - Alfred Sisley - 13.jpg"
        },{
        title : "Verstummen",
        artist: "Wassily Kandinsky",
        zaal: "zaal 02",
        muziek: "muziek | Let Go | Frou Frou",
        description: "Tip: Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Verstummen - Wassily Kandinsky - 02.jpg"
        }]
    }
  ]

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
