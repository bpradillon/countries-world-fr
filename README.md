# Countries and regions of the world in French

JS script to determine article and preposition for all country names in short form.
This build an enumeration for all countries with the following details : 
 * country code [ISO 3166-1] (alpha-2)
 * name in French (collected with the global object Intl.DisplayNames) 
 * currency code [ISO 4217]
 * article to use with name
 * preposition to use with name
 
A .csv and .json file is also available if you need the complete list.
  
# French article rules
When the name ends with an **e**, it's in the feminine and preceded by **la** otherwise it's in the masculine and **le** will be used.
For plural country names, they are always preceded by **les**.
When country names begin with a **vowel**, whether they are masculine or feminine, **l'** will be used.
There are some exceptions **without any article** : Bahreïn, Djibouti, Israël, Monaco, Oman, Cuba, Haïti, Madagascar, Taïwan, Chypre, Malte, Les saintes, Singapour, Trinité-et-Tobago

Examples : 
* Découvrir le Maroc
* Parcourir la Colombie
* S'envoler vers l'Australie
* Travailler pour les Émirats arabes unis
* Retour vers Hong-Kong

# French preposition rules
Same rules are used to determine gender : **en** will be used in the feminine or **au** in the masculine.
For plural country names, they are always preceded by **aux**
When country names begin with a **vowel**, whether they are masculine or feminine, **en** will be used.
For all exceptions without articles or start with **Saint**, they are always preceded by **à**.
Other exceptions for island, **à l'île...** will be used
 
Examples : 
* Je vais en France
* J'irai au Canada
* Je l'enverrai aux Etats-Unis
* Je suis allé à Chypre et à Saint-Martin
* Je souhaite partir à l'île de Man

Exported functions :
 * getByCurrency : to find a country details by currency code (currency's issuing country is returned if several area use this currency)
 * getByCode : to find country details by country code 