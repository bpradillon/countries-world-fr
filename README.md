# Countries and regions of the world in French

JS script to determine article and preposition for all country names in short form.
This build an enumeration for all countries with the following details :

* country code [ISO 3166-1] (alpha-2)
* name in French (collected with the global object Intl.DisplayNames)
* currency code [ISO 4217]
* article to use with name
* preposition to use with name

## Usage

```javascript
const { Pays } = require('countries-world-fr');

const country = Pays.getByCode('US');
// or
const country = Pays.getByCurrency('USD');
// or
const country = Pays.ETATS_UNIS;
// country is now {
//    "code": "US",
//    "name": "États-Unis",
//    "currency": "USD",
//    "article": "les ",
//    "preposition": "aux "
//  }
```

## French article rules

When the name ends with an ```e```, it's in the feminine and preceded by ```la``` otherwise it's in the masculine
and ```le``` will be used.

For plural country names, they are always preceded by ```les```.

When country names begin with a ```vowel```, whether they are masculine or feminine, ```l'``` will be used.

There are some exceptions without any article :
> Andorre,
> Antigua-et-Barbuda,
> Bahreïn,
> Chypre,
> Cuba,
> Djibouti,
> Gibraltar,
> Haïti,
> Hong Kong,
> Israël,
> Kiribati,
> Macao,
> Madagascar,
> Malte,
> Maurice,
> Monaco,
> Nauru,
> Oman,
> La Réunion,
> Sao Tomé-et-Principe,
> Singapour,
> Taïwan,
> Trinité-et-Tobago,
> Tuvalu,
> Vanuatu,
> Wallis-et-Futuna,


> **Examples** :
> * Découvrir le Maroc
> * Parcourir la Colombie
> * S'envoler vers l'Australie
> * Travailler pour les Émirats arabes unis
> * Retour vers Hong-Kong

## French preposition rules

Same rules are used to determine gender : ```en``` will be used in the feminine or ```au``` in the masculine.

For plural country names, they are always preceded by ```aux```

When country names begin with a ```vowel```, whether they are masculine or feminine, ```en``` will be used.

For all exceptions without articles or start with ```Saint```, they are always preceded by ```à```.

Other exceptions for island, ```à l'île...``` will be used.

> **Examples** :
> * Je vais en France
> * J'irai au Canada
> * Je l'enverrai aux Etats-Unis
> * Je suis allé à Chypre et à Saint-Martin
> * Je souhaite partir à l'île de Man

Exported functions :

* getByCurrency : to find a country details by currency code (currency's issuing country is returned if several area use
  this currency)
* getByCode : to find country details by country code

## Expected result
Also exported in .csv and .json file, available in this project

| Code |               Name in French               |  Article   | Preposition | Curency |
|:----:|:------------------------------------------:|:----------:|:-----------:|--------:|
|  AF  |                Afghanistan                 |  ```l'```  |  ```en ```  |     AFN |
|  ZA  |               Afrique du Sud               |  ```l'```  |  ```en ```  |     ZAR |
|  AX  |                 Îles Åland                 | ```les ``` | ```aux ```  |     EUR |
|  AL  |                  Albanie                   |  ```l'```  |  ```en ```  |     ALL |
|  DZ  |                  Algérie                   |  ```l'```  |  ```en ```  |     DZD |
|  DE  |                 Allemagne                  |  ```l'```  |  ```en ```  |     EUR |
|  AD  |                  Andorre                   |  ``` ```   |  ```à ```   |     EUR |
|  AO  |                   Angola                   |  ```l'```  |  ```en ```  |     AOA |
|  AI  |                  Anguilla                  |  ```l'```  |  ```en ```  |     XCD |
|  AQ  |                Antarctique                 |  ```l'```  |  ```en ```  |     USD |
|  AG  |             Antigua-et-Barbuda             |  ``` ```   |  ```à ```   |     XCD |
|  AN  |           Antilles néerlandaises           | ```les ``` | ```aux ```  |     ANG |
|  SA  |              Arabie saoudite               |  ```l'```  |  ```en ```  |     SAR |
|  AR  |                 Argentine                  |  ```l'```  |  ```en ```  |     ARS |
|  AM  |                  Arménie                   |  ```l'```  |  ```en ```  |     AMD |
|  AW  |                   Aruba                    |  ```l'```  |  ```en ```  |     AWG |
|  AU  |                 Australie                  |  ```l'```  |  ```en ```  |     AUD |
|  AT  |                  Autriche                  |  ```l'```  |  ```en ```  |     EUR |
|  AZ  |                Azerbaïdjan                 |  ```l'```  |  ```en ```  |     AZN |
|  BS  |                  Bahamas                   | ```les ``` | ```aux ```  |     BSD |
|  BH  |                  Bahreïn                   |  ``` ```   |  ```à ```   |     BHD |
|  BD  |                 Bangladesh                 | ```le ```  |  ```au ```  |     BDT |
|  BB  |                  Barbade                   | ```la ```  |  ```en ```  |     BBD |
|  BY  |                Biélorussie                 | ```la ```  |  ```en ```  |     BZD |
|  BE  |                  Belgique                  | ```la ```  |  ```en ```  |     EUR |
|  BZ  |                   Belize                   | ```le ```  |  ```au ```  |     BZD |
|  BJ  |                   Bénin                    | ```le ```  |  ```au ```  |     XOF |
|  BM  |                  Bermudes                  | ```les ``` | ```aux ```  |     BMD |
|  BT  |                  Bhoutan                   | ```le ```  |  ```au ```  |     BTN |
|  BO  |                  Bolivie                   | ```la ```  |  ```en ```  |     BOB |
|  BQ  |             Pays-Bas caribéens             | ```les ``` | ```aux ```  |     USD |
|  BA  |             Bosnie-Herzégovine             | ```la ```  |  ```en ```  |     BAM |
|  BW  |                  Botswana                  | ```le ```  |  ```au ```  |     BWP |
|  BV  |                 Île Bouvet                 |  ```l'```  | ```à l'```  |     NOK |
|  BR  |                   Brésil                   | ```le ```  |  ```au ```  |     BRL |
|  BN  |                   Brunei                   | ```le ```  |  ```au ```  |     BND |
|  BG  |                  Bulgarie                  | ```la ```  |  ```en ```  |     BGN |
|  BF  |                Burkina Faso                | ```le ```  |  ```au ```  |     XOF |
|  BI  |                  Burundi                   | ```le ```  |  ```au ```  |     BIF |
|  CV  |                  Cap-Vert                  | ```le ```  |  ```au ```  |     CVE |
|  KY  |                Îles Caïmans                | ```les ``` | ```aux ```  |     KYD |
|  KH  |                  Cambodge                  | ```le ```  |  ```au ```  |     KHR |
|  CM  |                  Cameroun                  | ```le ```  |  ```au ```  |     XAF |
|  CA  |                   Canada                   | ```le ```  |  ```au ```  |     CAD |
|  CL  |                   Chili                    | ```le ```  |  ```au ```  |     CLP |
|  CN  |                   Chine                    | ```la ```  |  ```en ```  |     CNY |
|  CX  |               Île Christmas                |  ```l'```  | ```à l'```  |     AUD |
|  CY  |                   Chypre                   |  ``` ```   |  ```à ```   |     EUR |
|  CC  |                 Îles Cocos                 | ```les ``` | ```aux ```  |     AUD |
|  CO  |                  Colombie                  | ```la ```  |  ```en ```  |     COP |
|  KM  |                  Comores                   | ```les ``` | ```aux ```  |     KMF |
|  CG  |             Congo-Brazzaville              | ```le ```  |  ```au ```  |     XAF |
|  CD  |               Congo-Kinshasa               | ```le ```  |  ```au ```  |     CDF |
|  CK  |                 Îles Cook                  | ```les ``` | ```aux ```  |     NZD |
|  KR  |                Corée du Sud                | ```la ```  |  ```en ```  |     KRW |
|  KP  |               Corée du Nord                | ```la ```  |  ```en ```  |     KPW |
|  CR  |                 Costa Rica                 | ```le ```  |  ```au ```  |     CRC |
|  CI  |               Côte d’Ivoire                | ```la ```  |  ```en ```  |     XOF |
|  HR  |                  Croatie                   | ```la ```  |  ```en ```  |     HRK |
|  CU  |                    Cuba                    |  ``` ```   |  ```à ```   |     CUC |
|  CW  |                  Curaçao                   | ```le ```  |  ```au ```  |     ANG |
|  DK  |                  Danemark                  | ```le ```  |  ```au ```  |     DKK |
|  DJ  |                  Djibouti                  |  ``` ```   |  ```à ```   |     DJF |
|  DO  |           République dominicaine           | ```la ```  |  ```en ```  |     DOP |
|  DM  |                 Dominique                  | ```la ```  |  ```en ```  |     XCD |
|  EG  |                   Égypte                   |  ```l'```  |  ```en ```  |     EGP |
|  SV  |                  Salvador                  | ```le ```  |  ```au ```  |     USD |
|  AE  |            Émirats arabes unis             | ```les ``` | ```aux ```  |     AED |
|  EC  |                  Équateur                  |  ```l'```  |  ```en ```  |     USD |
|  ER  |                  Érythrée                  |  ```l'```  |  ```en ```  |     ERN |
|  ES  |                  Espagne                   |  ```l'```  |  ```en ```  |     EUR |
|  EE  |                  Estonie                   |  ```l'```  |  ```en ```  |     EUR |
|  US  |                 États-Unis                 | ```les ``` | ```aux ```  |     USD |
|  ET  |                  Éthiopie                  |  ```l'```  |  ```en ```  |     ETB |
|  EU  |              Union européenne              |  ```l'```  |  ```en ```  |     EUR |
|  FK  |               Îles Malouines               | ```les ``` | ```aux ```  |     FKP |
|  FO  |                 Îles Féroé                 | ```les ``` | ```aux ```  |     DKK |
|  FJ  |                   Fidji                    | ```le ```  |  ```au ```  |     FJD |
|  FI  |                  Finlande                  | ```la ```  |  ```en ```  |     EUR |
|  FR  |                   France                   | ```la ```  |  ```en ```  |     EUR |
|  GA  |                   Gabon                    | ```le ```  |  ```au ```  |     XAF |
|  GM  |                   Gambie                   | ```la ```  |  ```en ```  |     GMD |
|  GE  |                  Géorgie                   | ```la ```  |  ```en ```  |     GEL |
|  GS  | Géorgie du Sud-et-les Îles Sandwich du Sud | ```la ```  |  ```en ```  |     GBP |
|  GH  |                   Ghana                    | ```le ```  |  ```au ```  |     GHS |
|  GI  |                 Gibraltar                  |  ``` ```   |  ```à ```   |     GIP |
|  GR  |                   Grèce                    | ```la ```  |  ```en ```  |     EUR |
|  GD  |                  Grenade                   | ```la ```  |  ```en ```  |     XCD |
|  GL  |                 Groenland                  | ```le ```  |  ```au ```  |     DKK |
|  GP  |                 Guadeloupe                 | ```la ```  |  ```en ```  |     EUR |
|  GU  |                    Guam                    | ```le ```  |  ```au ```  |     USD |
|  GT  |                 Guatemala                  | ```le ```  |  ```au ```  |     GTQ |
|  GG  |                 Guernesey                  | ```le ```  |  ```au ```  |     GGP |
|  GN  |                   Guinée                   | ```la ```  |  ```en ```  |     GNF |
|  GW  |               Guinée-Bissau                | ```la ```  |  ```en ```  |     XOF |
|  GQ  |             Guinée équatoriale             | ```la ```  |  ```en ```  |     XAF |
|  GY  |                   Guyana                   | ```le ```  |  ```au ```  |     GYD |
|  GF  |              Guyane française              | ```la ```  |  ```en ```  |     EUR |
|  HT  |                   Haïti                    |  ``` ```   |  ```à ```   |     HTG |
|  HM  |          Îles Heard-et-MacDonald           | ```les ``` | ```aux ```  |     AUD |
|  HN  |                  Honduras                  | ```les ``` | ```aux ```  |     HNL |
|  HK  |                 Hong Kong                  |  ``` ```   |  ```à ```   |     HKD |
|  HU  |                  Hongrie                   | ```la ```  |  ```en ```  |     HUF |
|  IM  |                 Île de Man                 |  ```l'```  | ```à l'```  |     IMP |
|  UM  |   Îles mineures éloignées des États-Unis   | ```les ``` | ```aux ```  |     USD |
|  VG  |         Îles Vierges britanniques          | ```les ``` | ```aux ```  |     USD |
|  VI  |        Îles Vierges des États-Unis         | ```les ``` | ```aux ```  |     USD |
|  IO  |  Territoire britannique de l’océan Indien  | ```le ```  |  ```au ```  |     GBP |
|  IN  |                    Inde                    |  ```l'```  |  ```en ```  |     INR |
|  ID  |                 Indonésie                  |  ```l'```  |  ```en ```  |     IDR |
|  IR  |                    Iran                    |  ```l'```  |  ```en ```  |     IRR |
|  IQ  |                    Irak                    |  ```l'```  |  ```en ```  |     IQD |
|  IE  |                  Irlande                   |  ```l'```  |  ```en ```  |     EUR |
|  IS  |                  Islande                   |  ```l'```  |  ```en ```  |     ISK |
|  IL  |                   Israël                   |  ``` ```   |  ```à ```   |     ILS |
|  IT  |                   Italie                   |  ```l'```  |  ```en ```  |     EUR |
|  JM  |                  Jamaïque                  | ```la ```  |  ```en ```  |     JMD |
|  JP  |                   Japon                    | ```le ```  |  ```au ```  |     JPY |
|  JE  |                   Jersey                   | ```le ```  |  ```au ```  |     GBP |
|  JO  |                  Jordanie                  | ```la ```  |  ```en ```  |     JOD |
|  KZ  |                 Kazakhstan                 | ```le ```  |  ```au ```  |     KZT |
|  KE  |                   Kenya                    | ```le ```  |  ```au ```  |     KES |
|  KG  |                Kirghizstan                 | ```le ```  |  ```au ```  |     KGS |
|  KI  |                  Kiribati                  |  ``` ```   |  ```à ```   |     AUD |
|  KW  |                   Koweït                   | ```le ```  |  ```au ```  |     KWD |
|  LA  |                    Laos                    | ```le ```  |  ```au ```  |     LAK |
|  LS  |                  Lesotho                   | ```le ```  |  ```au ```  |     LSL |
|  LV  |                  Lettonie                  | ```la ```  |  ```en ```  |     EUR |
|  LB  |                   Liban                    | ```le ```  |  ```au ```  |     LBP |
|  LR  |                  Liberia                   | ```le ```  |  ```au ```  |     LRD |
|  LY  |                   Libye                    | ```la ```  |  ```en ```  |     LYD |
|  LI  |               Liechtenstein                | ```le ```  |  ```au ```  |     EUR |
|  LT  |                  Lituanie                  | ```la ```  |  ```en ```  |     EUR |
|  LU  |                 Luxembourg                 | ```le ```  |  ```au ```  |     EUR |
|  MO  |                   Macao                    |  ``` ```   |  ```à ```   |     MOP |
|  MK  |             Macédoine du Nord              | ```la ```  |  ```en ```  |     MKD |
|  MG  |                 Madagascar                 |  ``` ```   |  ```à ```   |     MGA |
|  MY  |                  Malaisie                  | ```la ```  |  ```en ```  |     MYR |
|  MW  |                   Malawi                   | ```le ```  |  ```au ```  |     MWK |
|  MV  |                  Maldives                  | ```les ``` | ```aux ```  |     MVR |
|  ML  |                    Mali                    | ```le ```  |  ```au ```  |     XOF |
|  MT  |                   Malte                    |  ``` ```   |  ```à ```   |     EUR |
|  MP  |           Îles Mariannes du Nord           | ```les ``` | ```aux ```  |     USD |
|  MA  |                   Maroc                    | ```le ```  |  ```au ```  |     MAD |
|  MH  |               Îles Marshall                | ```les ``` | ```aux ```  |     USD |
|  MQ  |                 Martinique                 | ```la ```  |  ```en ```  |     EUR |
|  MU  |                  Maurice                   |  ``` ```   |  ```à ```   |     MUR |
|  MR  |                 Mauritanie                 | ```la ```  |  ```en ```  |     MRO |
|  YT  |                  Mayotte                   | ```la ```  |  ```en ```  |     EUR |
|  MX  |                  Mexique                   | ```le ```  |  ```au ```  |     MXN |
|  FM  |                 Micronésie                 | ```la ```  |  ```en ```  |     USD |
|  MD  |                  Moldavie                  | ```la ```  |  ```en ```  |     MDL |
|  MC  |                   Monaco                   |  ``` ```   |  ```à ```   |     EUR |
|  MN  |                  Mongolie                  | ```la ```  |  ```en ```  |     MNT |
|  ME  |                 Monténégro                 | ```le ```  |  ```au ```  |     EUR |
|  MS  |                 Montserrat                 | ```le ```  |  ```au ```  |     XCD |
|  MZ  |                 Mozambique                 | ```le ```  |  ```au ```  |     MZN |
|  MM  |             Myanmar (Birmanie)             | ```le ```  |  ```au ```  |     MMK |
|  NA  |                  Namibie                   | ```la ```  |  ```en ```  |     NAD |
|  NR  |                   Nauru                    |  ``` ```   |  ```à ```   |     AUD |
|  NP  |                   Népal                    | ```le ```  |  ```au ```  |     NPR |
|  NI  |                 Nicaragua                  | ```le ```  |  ```au ```  |     NIO |
|  NE  |                   Niger                    | ```le ```  |  ```au ```  |     XOF |
|  NG  |                  Nigeria                   | ```le ```  |  ```au ```  |     NGN |
|  NU  |                    Niue                    | ```la ```  |  ```en ```  |     NZD |
|  NF  |                Île Norfolk                 |  ```l'```  | ```à l'```  |     AUD |
|  NO  |                  Norvège                   | ```la ```  |  ```en ```  |     NOK |
|  NC  |             Nouvelle-Calédonie             | ```la ```  |  ```en ```  |     XPF |
|  NZ  |              Nouvelle-Zélande              | ```la ```  |  ```en ```  |     NZD |
|  OM  |                    Oman                    |  ``` ```   |  ```à ```   |     OMR |
|  UG  |                  Ouganda                   |  ```l'```  |  ```en ```  |     UGX |
|  UZ  |                Ouzbékistan                 |  ```l'```  |  ```en ```  |     UZS |
|  PK  |                  Pakistan                  | ```le ```  |  ```au ```  |     PKR |
|  PW  |                   Palaos                   | ```les ``` | ```aux ```  |     USD |
|  PS  |          Territoires palestiniens          | ```les ``` | ```aux ```  |     ILS |
|  PA  |                   Panama                   | ```le ```  |  ```au ```  |     PAB |
|  PG  |         Papouasie-Nouvelle-Guinée          | ```la ```  |  ```en ```  |     PGK |
|  PY  |                  Paraguay                  | ```le ```  |  ```au ```  |     PYG |
|  NL  |                  Pays-Bas                  | ```les ``` | ```aux ```  |     EUR |
|  XX  |                Pays inconnu                | ```le ```  |  ```au ```  |     XXX |
|  ZZ  |            région indéterminée             | ```la ```  |  ```en ```  |     ZZZ |
|  PE  |                   Pérou                    | ```le ```  |  ```au ```  |     PEN |
|  PH  |                Philippines                 | ```les ``` | ```aux ```  |     PHP |
|  PN  |               Îles Pitcairn                | ```les ``` | ```aux ```  |     NZD |
|  PL  |                  Pologne                   | ```la ```  |  ```en ```  |     PLN |
|  PF  |            Polynésie française             | ```la ```  |  ```en ```  |     XPF |
|  PR  |                 Porto Rico                 | ```le ```  |  ```au ```  |     USD |
|  PT  |                  Portugal                  | ```le ```  |  ```au ```  |     EUR |
|  QA  |                   Qatar                    | ```le ```  |  ```au ```  |     QAR |
|  SY  |                   Syrie                    | ```la ```  |  ```en ```  |     SYP |
|  CF  |         République centrafricaine          | ```la ```  |  ```en ```  |     XAF |
|  RE  |                 La Réunion                 |  ``` ```   |  ```à ```   |     EUR |
|  RO  |                  Roumanie                  | ```la ```  |  ```en ```  |     RON |
|  GB  |                Royaume-Uni                 | ```le ```  |  ```au ```  |     GBP |
|  RU  |                   Russie                   | ```la ```  |  ```en ```  |     RUB |
|  RW  |                   Rwanda                   | ```le ```  |  ```au ```  |     RWF |
|  EH  |             Sahara occidental              | ```le ```  |  ```au ```  |     MAD |
|  BL  |              Saint-Barthélemy              |  ``` ```   |  ```à ```   |     EUR |
|  KN  |         Saint-Christophe-et-Niévès         |  ``` ```   |  ```à ```   |     XCD |
|  SM  |                Saint-Marin                 |  ``` ```   |  ```à ```   |     EUR |
|  MF  |                Saint-Martin                |  ``` ```   |  ```à ```   |     EUR |
|  SX  |     Saint-Martin (partie néerlandaise)     |  ``` ```   |  ```à ```   |     EUR |
|  PM  |          Saint-Pierre-et-Miquelon          |  ``` ```   |  ```à ```   |     EUR |
|  VC  |      Saint-Vincent-et-les Grenadines       |  ``` ```   |  ```à ```   |     XCD |
|  SH  |               Sainte-Hélène                |  ``` ```   |  ```à ```   |     SHP |
|  LC  |                Sainte-Lucie                |  ``` ```   |  ```à ```   |     XCD |
|  SB  |                Îles Salomon                | ```les ``` | ```aux ```  |     SBD |
|  WS  |                   Samoa                    | ```le ```  |  ```au ```  |     WST |
|  AS  |             Samoa américaines              | ```les ``` | ```aux ```  |     USD |
|  ST  |            Sao Tomé-et-Principe            |  ``` ```   |  ```à ```   |     STD |
|  SN  |                  Sénégal                   | ```le ```  |  ```au ```  |     XOF |
|  RS  |                   Serbie                   | ```la ```  |  ```en ```  |     RSD |
|  SC  |                 Seychelles                 | ```les ``` | ```aux ```  |     SCR |
|  SL  |                Sierra Leone                | ```le ```  |  ```au ```  |     SLL |
|  SG  |                 Singapour                  |  ``` ```   |  ```à ```   |     SGD |
|  SK  |                 Slovaquie                  | ```la ```  |  ```en ```  |     EUR |
|  SI  |                  Slovénie                  | ```la ```  |  ```en ```  |     EUR |
|  SO  |                  Somalie                   | ```la ```  |  ```en ```  |     SOS |
|  SD  |                   Soudan                   | ```le ```  |  ```au ```  |     SDG |
|  SS  |               Soudan du Sud                | ```le ```  |  ```au ```  |     SSP |
|  LK  |                 Sri Lanka                  | ```le ```  |  ```au ```  |     LKR |
|  SE  |                   Suède                    | ```la ```  |  ```en ```  |     SEK |
|  CH  |                   Suisse                   | ```la ```  |  ```en ```  |     CHF |
|  SR  |                  Suriname                  | ```le ```  |  ```au ```  |     SRD |
|  SJ  |           Svalbard et Jan Mayen            | ```le ```  |  ```au ```  |     NOK |
|  SZ  |                  Eswatini                  |  ```l'```  |  ```en ```  |     SZL |
|  TJ  |                Tadjikistan                 | ```le ```  |  ```au ```  |     TJS |
|  TW  |                   Taïwan                   |  ``` ```   |  ```à ```   |     TWD |
|  TZ  |                  Tanzanie                  | ```la ```  |  ```en ```  |     TZS |
|  TD  |                   Tchad                    | ```le ```  |  ```au ```  |     XAF |
|  CZ  |                  Tchéquie                  | ```la ```  |  ```en ```  |     CZK |
|  TF  |        Terres australes françaises         | ```les ``` | ```aux ```  |     EUR |
|  TH  |                 Thaïlande                  | ```la ```  |  ```en ```  |     THB |
|  TL  |               Timor oriental               | ```le ```  |  ```au ```  |     USD |
|  TG  |                    Togo                    | ```le ```  |  ```au ```  |     XOF |
|  TK  |                  Tokelau                   | ```le ```  |  ```au ```  |     NZD |
|  TO  |                   Tonga                    | ```le ```  |  ```au ```  |     TOP |
|  TT  |             Trinité-et-Tobago              |  ``` ```   |  ```à ```   |     TTD |
|  TN  |                  Tunisie                   | ```la ```  |  ```en ```  |     TND |
|  TM  |                Turkménistan                | ```le ```  |  ```au ```  |     TMT |
|  TC  |          Îles Turques-et-Caïques           | ```les ``` | ```aux ```  |     USD |
|  TR  |                  Turquie                   | ```la ```  |  ```en ```  |     TRY |
|  TV  |                   Tuvalu                   |  ``` ```   |  ```à ```   |     AUD |
|  UA  |                  Ukraine                   |  ```l'```  |  ```en ```  |     UAH |
|  UY  |                  Uruguay                   |  ```l'```  |  ```en ```  |     UYU |
|  VU  |                  Vanuatu                   |  ``` ```   |  ```à ```   |     VUV |
|  VA  |                  Vatican                   | ```le ```  |  ```au ```  |     EUR |
|  VE  |                 Venezuela                  | ```le ```  |  ```au ```  |     VEF |
|  VN  |                  Viêt Nam                  | ```le ```  |  ```au ```  |     VND |
|  WF  |              Wallis-et-Futuna              |  ``` ```   |  ```à ```   |     XPF |
|  YE  |                   Yémen                    | ```le ```  |  ```au ```  |     YER |
|  ZM  |                   Zambie                   | ```la ```  |  ```en ```  |     ZMW |
|  ZW  |                  Zimbabwe                  | ```le ```  |  ```au ```  |     ZWL |