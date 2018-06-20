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
        trivia: "Wist je dat… de engelen in de 3e kring om Maria heen verschillende muziekinstrumenten bespelen?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "The Glorification of the virgin mary - 34.jpg",
        size: 'small'
        },{
        title : "Grey, Orange on Maroon no.8",
        artist: "Mark Rothko",
        zaal: "zaal 25",
        muziek: "muziek | True Colours | Cyndi Lauper",
        trivia: "Wist je dat… het de muziek van Mozart was die Mark Rothko beïnvloedde in het ontwikkelen van zijn eigen artistieke stijl?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Grey Orange on maroon no8 - Mark Rothko - 25.jpg",
        size: 'large'
        },{
        title : "Vrouw aan het Virginaal",
        artist: "Gabriël Metsu",
        zaal: "zaal 22",
        muziek: "muziek | A Head Full of Dreams | Coldplay",
        trivia: "Wist je dat… in de 16e eeuw de term virginaal werd gebruikt voor verschillende soorten klavecimbels?", 
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Lady at a virginal - Gabriel Metsu - 22.jpg",
        size: 'medium'
        },{
        title : "Stilleven met muziekinstrumenten, boeken en sculptuur",
        artist: "Evaristo Baschenis",
        zaal: "zaal 30",
        muziek: "muziek | Sexy and I Know It| LMFAO",
        trivia: "Wist je dat… de luit tegenwoordig weer veel gebruikt wordt door bands, zoals Mumford and Sons?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Still Life with Musical Instruments Books and Sculpture - Evaristo Baschenis - 30.jpg",
        size: 'medium'
        },{
        title : "Un verger au printemps",
        artist: "Alfred Sisley",
        zaal: "zaal 13",
        muziek: "muziek | Feeling Good | Nina Simone",
        trivia: "Wist je dat… dat Alfred Sisley zijn moeder een klassiek muziek expert was?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Un verger au printemps - Alfred Sisley - 13.jpg",
        size: 'medium'
        },{
        title : "Verstummen",
        artist: "Wassily Kandinsky",
        zaal: "zaal 02",
        muziek: "muziek | Let Go | Frou Frou",
        trivia: "Wist je dat… Kandinsky overeenkomsten zag tussen de schilderkunstige beeldelementen als lijnen, kleuren en vormen en muzikale elementen als ritme, klanken en akkoorden?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Verstummen - Wassily Kandinsky - 02.jpg",
        size: 'medium'
        }]
    },
    {
      name: 'muziek-kunstgeschiedenis',
      slides: [{
        title : "De verheerlijking van Maria",
        artist: "Geertgen tot Sint Jans",
        year: "1490 | 1495",
        material: "Olieverf op paneel",
        zaal: "zaal 34",
        muziek: "muziek | Like A Prayer | Madonna",
        trivia: "Wist je dat… de engelen in de 3e kring om Maria heen verschillende muziekinstrumenten bespelen?", 
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "The Glorification of the virgin mary - 34.jpg",
        size: 'small'
        },{
        title : "De Hel",
        artist: "Jheronimus Bosch",
        year: "c.a. 1515",
        material: "Olieverf op paneel",
        zaal: "zaal 32",
        muziek: "muziek | Jheronimus Bosch Butt Music | Amelia Hamrick",
        trivia: "Wist je dat… in 1969 het 3e album van de rockband Deep Purple een detail van The Garden of Earthly Delights van Jheronimus Bosch als cover had?", 
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "De Hel - Jheronimus Bosch - 32.jpg",
        size: 'medium'
        },{
        title : "Grey, Orange on Maroon no.8",
        artist: "Mark Rothko",
        year: "1960",
        material: "Olieverf op doek",
        zaal: "zaal 25",
        muziek: "muziek | Overture | Wolfgang Amadeus Mozart",
        trivia: "Wist je dat… het de muziek van Mozart was die Mark Rothko beïnvloedde in het ontwikkelen van zijn eigen artistieke stijl?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Grey Orange on maroon no8 - Mark Rothko - 25.jpg",
        size: 'large'
        },{
        title : "Fats Domino",
        artist: "Daan van Golden",
        year: "1973 | 1974",
        material: "Eitempera op doek op triplex paneel achter plexiglas in wit geschilderde houten lijst",
        zaal: "zaal 19",
        muziek: "muziek | I'm Walkin' | Fats Domino",
        trivia: "Wist je dat… een van de meest bekende werken van Daan van Golden een silhouet portret is van Mozart?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Fats Domino - Daan van Golden - 18.png",
        size: 'large'
        },{
        title : "Un verger au printemps",
        artist: "Alfred Sisley",
        year: "1881", 
        material: "Olieverf op doek",
        zaal: "zaal 13",
        muziek: "muziek | Spring | Vivaldi",
        trivia: "Wist je dat… Alfred Sisley zijn moeder, Felicia Sell, een klassiek muziek expert was?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Un verger au printemps - Alfred Sisley - 13.jpg",
        size: 'medium'
        },{
        title : "Verstummen",
        artist: "Wassily Kandinsky",
        year: "1924",
        material: "Olieverf en inkt op doek",
        zaal: "zaal 02",
        muziek: "muziek | Yellow Sound | Wassily Kandinsky",
        trivia: "Wist je dat… Kandinsky overeenkomsten zag tussen de schilderkunstige beeldelementen als lijnen, kleuren en vormen en muzikale elementen als ritme, klanken en akkoorden?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit. Neem de muziek in je op, open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Verstummen - Wassily Kandinsky - 02.jpg",
        size: 'medium'
      }]
    },
    {
      name: 'muziek-actualiteiten',
      slides: [{
        title : "Floor Piece",
        artist: "Sol LeWitt",
        zaal: "zaal 36",
        subject: "Thema | Hokjes denken",
        muziek: "muziek | Born this Way | Lady Gaga",
        trivia: "Wist je dat...Sol LeWitt altijd naar naar muziek luisterde? Zo zij hij ooit dat hij geen poëzie las omdat hij dit niet tegelijkertijd kon doen met luisteren naar muziek.",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Floorpiece no1 - Sol LeWitt - 36.jpg",
        size: 'large'
        },{
        title : "De Hel",
        artist: "Jheronimus Bosch",
        zaal: "zaal 32",
        subject: "Thema | Mensenrechten",
        muziek: "muziek | Human Right Song | UNITED",
        trivia: "Wist je dat…in 1969 het 3e album van de rockband Deep Purple een detail van The Garden of Earthly Delights van Jheronimus Bosch als cover had?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "De Hel - Jheronimus Bosch - 32.jpg",
        size: 'medium'
        },{
        title : "Magic Mirror",
        artist: "Alan Davie",
        zaal: "zaal 25",
        subject: "Thema | Urbanisatie",
        muziek: "muziek | Big Yellow Taxi | Counting Crows ft. Vanessa Carlton",
        trivia: "Wist je dat…de maker van dit werk, Alan Davie, naast beeldend kunstenaar ook een muzikant was?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Magic Mirror - Alan Davie - 25.jpg",
        size: 'large'
        },{
        title : "Fats Domino",
        artist: "Daan van Golden",
        zaal: "zaal 19",
        subject: "Thema | Racisme",
        muziek: "muziek | Say It Loud, I'm Black & I'm Proud | James Brown",
        trivia: "Wist je dat…een van de meest bekende werken van Daan van Golden een silhouet portret is van Mozart?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Fats Domino - Daan van Golden - 18.png",
        size: 'large'
        },{
        title : "Un verger au printemps",
        artist: "Alfred Sisley",
        zaal: "zaal 13",
        subject: "Thema | Global warming",
        muziek: "muziek | Earth Song | Michael Jackson",
        trivia: "Wist je dat…dat Alfred Sisley zijn moeder, Felicia Sell, een klassiek muziek expert was?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Un verger au printemps - Alfred Sisley - 13.jpg",
        size: 'medium'
        },{
        title : "Metronome",
        artist: "Salvador Dali",
        zaal: "zaal 04",
        subject: "Thema | Privacy",
        muziek: "muziek | Spies | Coldplay",
        trivia: "Wist je dat…de muziekvideo van Born This Way van Lady Gaga is geïnspireerd op het werk van o.a. Salvador Dali?",
        description: "Tip | Kijk eerst aandachtig naar het werk voordat je de muziek erbij afspeelt. Luister dan de muziek terwijl je je ogen even sluit en nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Metronome - Salvador Dali - 04.jpg",
        size: 'small'
        }
        ]
    },
    {
      name: 'rotterdam-kunstgeschiedenis',
      slides: [
        {
          title : "Port Nocturne",
          artist: "Alfred Manessier",
          year: "1950",
          material: "Olieverf op doek",
          zaal: "Trap",
          trivia: "Wist je dat…Rotterdam de grootste haven heeft van Europa?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "Port Nocturne-Alfred Manessier- trap.jpg",
          size: 'medium'
          },{
          title : "The cliff of the palisade with Hudson river",
          artist: "Willem de Kooning",
          year: "1963",
          material: "Olieverf op papier op board",
          zaal: "zaal 25",
          trivia: "Wist je dat…Willem de Kooning geboren is in Rotterdam en de kunstacademie van Rotterdam ook naar hem vernoemd is?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "The cliff of the palisade with Hudson river - Willem de Kooning - 25.jpg",
          size: 'medium'
          },{
          title : "Stadsgezicht te Rotterdam met de Sint Laurenstoren",
          artist: "Ludolf de Jongh?",
          year: "c.a. 1660",
          material: "Olieverf op paneel",
          zaal: "zaal 22",
          trivia: "Wist je dat…de Sint-Laurenskerk het enige overblijfsel is van het middeleeuwse Rotterdamse stadscentrum?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "Stadsgezicht te Rotterdam met de Sint Laurenstoren - Ludolf de Jongh - 22.jpg",
          size: 'medium'
          },{
          title : "Fats Domino",
          artist: "Daan van Golden",
          year: "1973 | 1974",
          material: "Eitempera op doek op triplex paneel achter plexiglas in wit geschilderde houten lijst",
          zaal: "zaal 19",
          trivia: "Wist je dat…een van de meest bekende werken van Daan van Golden een silhouet portret is van Mozart?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "Fats Domino - Daan van Golden - 18.png",
          size: 'large'
          },{
          title : "Untitled",
          artist: "Keith Haring",
          year: "1982",
          material: "Vinylinkt en vinyl tarpaulin",
          zaal: "zaal 07",
          trivia: "Wist je dat…voor Keith Haring zijn Europese ontdekking in 1982 begon in galerie Het Venster in Rotterdam?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "Untitled - Keith Haring - 07.png",
          size: 'large'
          },{
          title : "Interieur met gele deur",
          artist: "Kees van Dongen",
          year: "c.a. 1910",
          material: "Olieverf op doek",
          zaal: "zaal 06",
          trivia: "Wist je dat…Kees van Dongen geboren is in Rotterdam en hier tot zijn 20ste woonde en werkte waarna hij naar Parijs vertrok?",
          description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over wat je zag. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
          file: "Interieur met gele deur - Kees van Dongen - 06.jpg",
          size: 'medium'
          }]
    },
    {
      name: 'rotterdam-jezelf',
      slides: [{
        title : "Port Nocture",
        artist: "Alfred Manessier",
        zaal: "Trap",
        trivia: "Wist je dat…Rotterdam de grootste haven heeft van Europa?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Port Nocturne-Alfred Manessier- trap.jpg",
        size: 'medium'
        },{
        title : "Vrouw in kleine ruimte",
        artist: "Co Westerik ",
        zaal: "zaal 27",
        trivia: "Wist je dat…de studio van Co Westerik bij museum Boijmans om de hoek ligt?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Woman in small space- Co Westerik 27.jpg",
        size: 'small'
        },{
        title : "The cliff of the palisade with Hudson river",
        artist: "Willem de Kooning",
        zaal: "zaal 25",
        trivia: "Wist je dat…Willem de Kooning geboren is in Rotterdam en de kunstacademie van Rotterdam ook naar hem vernoemd is?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "The cliff of the palisade with Hudson river - Willem de Kooning - 25.jpg",
        size: 'medium'
        },{
        title : "Compositie met kleurenstippen",
        artist: "Daan van Golden",
        zaal: "zaal 18",
        trivia: "Wist je dat…Daan van Golden in Rotterdam geboren is en erna bijna zijn gehele leven woonde en werkte in Schiedam?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Compositie met kleurenstippen - Daan van Golden - 18.jpg",
        size: 'large'
        },{
        title : "Heidelandschap met Denneboom",
        artist: "Johannes Tavenraat",
        zaal: "zaal 16",
        trivia: "Wist je dat…Johannes Tavenraat geboren en gestorven is in Rotterdam?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Heidelandschap met Denneboom - Johannes Tavenraat - 16.jpg",
        size: 'small'
        },{
        title : "Interieur met gele deur",
        artist: "Kees van Dongen",
        zaal: "zaal 06",
        trivia: "Wist je dat…Kees van Dongen geboren is in Rotterdam en hier tot zijn 23ste woonde en werkte waarna hij naar Parijs vertrok?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je je gedachten leeg maakt. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Interieur met gele deur - Kees van Dongen - 06.jpg",
        size: 'medium'
        }]
    },
    {
      name: 'rotterdam-actualiteiten',
      slides: [{
        title : "Portret van Desiderius Erasmus",
        artist: "Lucas Cranach",
        zaal: "zaal 32",
        subject: "Thema | Selfie Cultuur",
        trivia: "Wist je dat…er in Rotterdam vele gebouwen en instellingen vernoemd zijn naar Desiderius Erasmus? Zoals de Erasmusbrug, de Erasmus universiteit en het Erasmus ziekenhuis?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Portret van Desiderius Erasmus - Lucas Cranach - 32.jpg",
        size: 'small'
        },{
        title : "Vrouw in kleine ruimte",
        artist: "Co Westerik ",
        zaal: "zaal 27",
        subject: "Thema | Mensenrechten",
        trivia: "Wist je dat…de studio van Co Westerik bij museum Boijmans om de hoek ligt?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Woman in small space- Co Westerik 27.jpg",
        size: 'small'
        },{
        title : "Stadsgezicht te Rotterdam met de Sint Laurenstoren",
        artist: "Ludolf de Jongh",
        zaal: "zaal 22",
        subject: "Thema | Urbanisatie",
        trivia: "Wist je dat…de Sint-Laurenskerk het enige overblijfsel is van het middeleeuwse Rotterdamse stadscentrum?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Stadsgezicht te Rotterdam met de Sint Laurenstoren - Ludolf de Jongh - 22.jpg",
        size: 'medium'
        },{
        title : "Fats Domino",
        artist: "Daan van Golden",
        zaal: "zaal 19",
        subject: "Thema | Racisme",
        trivia: "Wist je dat…een van de meest bekende werken van Daan van Golden een silhouet portret is van Mozart?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Fats Domino - Daan van Golden - 18.png",
        size: 'large'
        },{
        title : "Untitled",
        artist: "Keith Haring",
        zaal: "zaal 07",
        subject: "Thema | Hokjes denken",
        trivia: "Wist je dat…voor Keith Haring zijn Europese ontdekking in 1982 begon in galerie Het Venster in Rotterdam?",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Untitled - Keith Haring - 07.png",
        size: 'large'
        },{
        title : "Springtime",
        artist: "Jeroen Eisinga",
        zaal: "zaal 39",
        subject: "Thema | Global warming",
        trivia: "Wist je dat…dit video werk geïnspireerd is op bee bearding? Dit is een beproeving waarbij imkers zoveel mogelijk van hun eigen bijen op hun lichaam laten zitten.",
        description: "Tip | Kijk eerst aandachtig naar het werk sluit vervolgens een aantal tellen je ogen terwijl je nadenkt over het thema bij dit werk. Open je ogen weer en kijk nogmaals aandachtig naar het werk. Zie je nu anders dan voorheen? Voelt het werk nu anders?",
        file: "Springtime - Jeroen Eisinga - 39.png",
        size: 'large'
        }]
    }
  ]

  constructor() {
    // console.log('Hello DataProvider Provider');
  }

}
