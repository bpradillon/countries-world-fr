import Rule from './Rule.js';

const { MASCULIN, FEMININ, PLURIEL, VOYELLE, EXCEPTION } = Rule.names;
const { findArticle, findPreposition, findArticleRule, findPrepositionRule } = Rule;

const overrideNames = [
	{ code: 'AN', name: 'Antilles néerlandaises' },
	{ code: 'HK', name: 'Hong Kong' },
	{ code: 'MO', name: 'Macao' },
	{ code: 'VA', name: 'Vatican' },
	{ code: 'XX', name: 'Pays inconnu' },
];

const findOverridenName = (code) => overrideNames.find((pays) => pays.code === code)?.name;

const create = (code, currency, rule) => {
	const regionNames = new Intl.DisplayNames(['fr'], { type: 'region' });
	const name = findOverridenName(code) || regionNames.of(code);
	const word = name.split(' ')[0];
	
	const article = findArticle(rule || findArticleRule(word));
	const preposition = findPreposition(rule || findPrepositionRule(word));
	
	return {
		code,
		name,
		currency,
		article,
		preposition,
	};
};

const Pays = {  

  AFGHANISTAN: create('AF', 'AFN'),

  AFRIQUE_DU_SUD: create('ZA', 'ZAR'),

  ALAND_ILES: create('AX', 'EUR'),

  ALBANIE: create('AL', 'ALL'),

  ALGERIE: create('DZ', 'DZD'),

  ALLEMAGNE: create('DE', 'EUR'),

  ANDORRE: create('AD', 'EUR', EXCEPTION),

  ANGOLA: create('AO', 'AOA'),

  ANGUILLA: create('AI', 'XCD'),

  ANTARCTIQUE: create('AQ', 'USD'),

  ANTIGUA_ET_BARBUDA: create('AG', 'XCD', EXCEPTION),

  ANTILLES_NEERLANDAISES: create('AN', 'ANG'),

  ARABIE_SAOUDITE: create('SA', 'SAR'),

  ARGENTINE: create('AR', 'ARS'),

  ARMENIE: create('AM', 'AMD'),

  ARUBA: create('AW', 'AWG'),

  AUSTRALIE: create('AU', 'AUD'),

  AUTRICHE: create('AT', 'EUR'),

  AZERBAIDJAN: create('AZ', 'AZN'),

  BAHAMAS: create('BS', 'BSD'),

  BAHREIN: create('BH', 'BHD', EXCEPTION),

  BANGLADESH: create('BD', 'BDT'),

  BARBADE: create('BB', 'BBD'),

  BELARUS: create('BY', 'BZD'),

  BELGIQUE: create('BE', 'EUR'),

  BELIZE: create('BZ', 'BZD', MASCULIN),

  BENIN: create('BJ', 'XOF'),

  BERMUDES: create('BM', 'BMD'),

  BHOUTAN: create('BT', 'BTN'),

  BOLIVIE: create('BO', 'BOB'),

  BONAIRE: create('BQ', 'USD'),

  BOSNIE_HERZEGOVINE: create('BA', 'BAM'),

  BOTSWANA: create('BW', 'BWP'),

  BOUVET_ILE: create('BV', 'NOK'),

  BRESIL: create('BR', 'BRL'),

  BRUNEI_DARUSSALAM: create('BN', 'BND'),

  BULGARIE: create('BG', 'BGN'),

  BURKINA_FASO: create('BF', 'XOF'),

  BURUNDI: create('BI', 'BIF'),

  CAP_VERT: create('CV', 'CVE'),

  CAiMANS_ILES: create('KY', 'KYD'),

  CAMBODGE: create('KH', 'KHR', MASCULIN),

  CAMEROUN: create('CM', 'XAF'),

  CANADA: create('CA', 'CAD'),

  CHILI: create('CL', 'CLP'),

  CHINE: create('CN', 'CNY'),

  CHRISTMAS_ILE: create('CX', 'AUD'),

  CHYPRE: create('CY', 'EUR', EXCEPTION),

  COCOS: create('CC', 'AUD'),

  COLOMBIE: create('CO', 'COP'),

  COMORES: create('KM', 'KMF'),

  CONGO: create('CG', 'XAF', MASCULIN),

  REPUBLIQUE_DEMOCRATIQUE_DU_CONGO: create('CD', 'CDF'),

  COOK_ILES: create('CK', 'NZD'),

  COREE_DU_SUD: create('KR', 'KRW'),

  COREE_DU_NORD: create('KP', 'KPW'),

  COSTA_RICA: create('CR', 'CRC'),

  COTE_D_IVOIRE: create('CI', 'XOF'),

  CROATIE: create('HR', 'HRK'),

  CUBA: create('CU', 'CUC', EXCEPTION),

  CURACAO: create('CW', 'ANG'),

  DANEMARK: create('DK', 'DKK'),

  DJIBOUTI: create('DJ', 'DJF', EXCEPTION),

  REPUBLIQUE_DOMINICAINE: create('DO', 'DOP'),

  DOMINIQUE: create('DM', 'XCD'),

  EGYPTE: create('EG', 'EGP'),

  EL_SALVADOR: create('SV', 'USD'),

  EMIRATS_ARABES_UNIS: create('AE', 'AED'),

  EQUATEUR: create('EC', 'USD'),

  ERYTHREE: create('ER', 'ERN'),

  ESPAGNE: create('ES', 'EUR'),

  ESTONIE: create('EE', 'EUR'),

  ETATS_UNIS: create('US', 'USD'),

  ETHIOPIE: create('ET', 'ETB'),

  EUROPE: create('EU', 'EUR'),

  FALKLAND_MALOUINES_ILES: create('FK', 'FKP'),

  FEROE_ILES: create('FO', 'DKK'),

  FIDJI: create('FJ', 'FJD'),

  FINLANDE: create('FI', 'EUR'),

  FRANCE: create('FR', 'EUR'),

  GABON: create('GA', 'XAF'),

  GAMBIE: create('GM', 'GMD'),

  GEORGIE: create('GE', 'GEL'),

  GEORGIE_DU_SUD: create('GS', 'GBP'),

  GHANA: create('GH', 'GHS'),

  GIBRALTAR: create('GI', 'GIP', EXCEPTION),

  GRECE: create('GR', 'EUR'),

  GRENADE: create('GD', 'XCD'),

  GROENLAND: create('GL', 'DKK'),

  GUADELOUPE: create('GP', 'EUR'),

  GUAM: create('GU', 'USD'),

  GUATEMALA: create('GT', 'GTQ'),

  GUERNESEY: create('GG', 'GGP'),

  GUINEE: create('GN', 'GNF'),

  GUINEE_BISSAU: create('GW', 'XOF', FEMININ),

  GUINEE_EQUATORIALE: create('GQ', 'XAF'),

  GUYANA: create('GY', 'GYD'),

  GUYANE_FRANCAISE: create('GF', 'EUR'),

  HAITI: create('HT', 'HTG', EXCEPTION),

  HEARD_ILE_ET_MACDONALD_ILES: create('HM', 'AUD'),

  HONDURAS: create('HN', 'HNL'),

  HONG_KONG: create('HK', 'HKD', EXCEPTION),

  HONGRIE: create('HU', 'HUF'),

  ILE_DE_MAN: create('IM', 'IMP'),

  ILES_MINEURES_ELOIGNEES_DES_ETATS_UNIS: create('UM', 'USD'),

  ILES_VIERGES_BRITANNIQUES: create('VG', 'USD'),

  ILES_VIERGES_DES_ETATS_UNIS: create('VI', 'USD'),

  TERRITOIRE_BRITANNIQUE_DE_L_OCEAN_INDIEN: create('IO', 'GBP', MASCULIN),

  INDE: create('IN', 'INR'),
  
  INDONESIE: create('ID', 'IDR'),

  IRAN: create('IR', 'IRR'),

  IRAQ: create('IQ', 'IQD'),

  IRLANDE: create('IE', 'EUR'),

  ISLANDE: create('IS', 'ISK'),

  ISRAEL: create('IL', 'ILS', EXCEPTION),

  ITALIE: create('IT', 'EUR'),

  JAMAIQUE: create('JM', 'JMD'),

  JAPON: create('JP', 'JPY'),

  JERSEY: create('JE', 'GBP'),

  JORDANIE: create('JO', 'JOD'),

  KAZAKHSTAN: create('KZ', 'KZT'),

  KENYA: create('KE', 'KES'),

  KIRGHIZISTAN: create('KG', 'KGS'),

  KIRIBATI: create('KI', 'AUD', EXCEPTION),

  KOWEIT: create('KW', 'KWD'),

  LAOS: create('LA', 'LAK', MASCULIN),

  LESOTHO: create('LS', 'LSL'),

  LETTONIE: create('LV', 'EUR'),

  LIBAN: create('LB', 'LBP'),

  LIBERIA: create('LR', 'LRD'),

  LIBYE: create('LY', 'LYD'),

  LIECHTENSTEIN: create('LI', 'EUR'),

  LITUANIE: create('LT', 'EUR'),

  LUXEMBOURG: create('LU', 'EUR'),

  MACAO: create('MO', 'MOP', EXCEPTION),

  MACEDOINE: create('MK', 'MKD'),

  MADAGASCAR: create('MG', 'MGA', EXCEPTION),

  MALAISIE: create('MY', 'MYR'),

  MALAWI: create('MW', 'MWK'),

  MALDIVES: create('MV', 'MVR'),

  MALI: create('ML', 'XOF'),

  MALTE: create('MT', 'EUR', EXCEPTION),

  MARIANNES_DU_NORD: create('MP', 'USD'),

  MAROC: create('MA', 'MAD'),

  MARSHALL_ILES: create('MH', 'USD'),

  MARTINIQUE: create('MQ', 'EUR'),

  MAURICE: create('MU', 'MUR', EXCEPTION),

  MAURITANIE: create('MR', 'MRO'),

  MAYOTTE: create('YT', 'EUR'),

  MEXIQUE: create('MX', 'MXN', MASCULIN),

  MICRONESIE: create('FM', 'USD'),

  MOLDOVA: create('MD', 'MDL'),

  MONACO: create('MC', 'EUR', EXCEPTION),

  MONGOLIE: create('MN', 'MNT'),

  MONTENEGRO: create('ME', 'EUR'),

  MONTSERRAT: create('MS', 'XCD'),

  MOZAMBIQUE: create('MZ', 'MZN', MASCULIN),

  MYANMAR: create('MM', 'MMK'),

  NAMIBIE: create('NA', 'NAD'),

  NAURU: create('NR', 'AUD', EXCEPTION),

  NEPAL: create('NP', 'NPR'),

  NICARAGUA: create('NI', 'NIO'),

  NIGER: create('NE', 'XOF'),

  NIGERIA: create('NG', 'NGN'),

  NIUE: create('NU', 'NZD'),

  NORFOLK_ILE: create('NF', 'AUD'),

  NORVEGE: create('NO', 'NOK'),

  NOUVELLE_CALEDONIE: create('NC', 'XPF'),

  NOUVELLE_ZELANDE: create('NZ', 'NZD'),

  OMAN: create('OM', 'OMR', EXCEPTION),

  OUGANDA: create('UG', 'UGX'),

  OUZBEKISTAN: create('UZ', 'UZS'),

  PAKISTAN: create('PK', 'PKR'),

  PALAOS: create('PW', 'USD'),

  PALESTINE: create('PS', 'ILS'),

  PANAMA: create('PA', 'PAB'),

  PAPOUASIE_NOUVELLE_GUINEE: create('PG', 'PGK'),

  PARAGUAY: create('PY', 'PYG'),

  PAYS_BAS: create('NL', 'EUR'),

  PAYS_INCONNU: create('XX', 'XXX', MASCULIN),

  REGION_INDETERMINEE: create('ZZ', 'ZZZ', FEMININ),

  PEROU: create('PE', 'PEN'),

  PHILIPPINES: create('PH', 'PHP'),

  PITCAIRN: create('PN', 'NZD'),

  POLOGNE: create('PL', 'PLN'),

  POLYNESIE_FRANCAISE: create('PF', 'XPF'),

  PORTO_RICO: create('PR', 'USD'),

  PORTUGAL: create('PT', 'EUR'),

  QATAR: create('QA', 'QAR'),

  REPUBLIQUE_ARABE_SYRIENNE: create('SY', 'SYP'),

  REPUBLIQUE_CENTRAFRICAINE: create('CF', 'XAF'),

  REUNION: create('RE', 'EUR', EXCEPTION),

  ROUMANIE: create('RO', 'RON'),

  ROYAUME_UNI: create('GB', 'GBP'),
  
  RUSSIE: create('RU', 'RUB'),

  RWANDA: create('RW', 'RWF'),

  SAHARA_OCCIDENTAL: create('EH', 'MAD'),

  SAINT_BARTHELEMY: create('BL', 'EUR'),

  SAINT_KITTS_ET_NEVIS: create('KN', 'XCD'),

  SAINT_MARIN: create('SM', 'EUR'),

  SAINT_MARTIN_FR: create('MF', 'EUR'),

  SAINT_MARTIN_NL: create('SX', 'EUR'),

  SAINT_PIERRE_ET_MIQUELON: create('PM', 'EUR'),

  SAINT_VINCENT_ET_LES_GRENADINES: create('VC', 'XCD'),

  SAINTE_HELENE: create('SH', 'SHP'),

  SAINTE_LUCIE: create('LC', 'XCD'),

  SALOMON_ILES: create('SB', 'SBD'),

  SAMOA: create('WS', 'WST'),

  SAMOA_AMERICAINES: create('AS', 'USD', PLURIEL),

  SAO_TOME_ET_PRINCIPE: create('ST', 'STD', EXCEPTION),

  SENEGAL: create('SN', 'XOF'),

  SERBIE: create('RS', 'RSD'),

  SEYCHELLES: create('SC', 'SCR'),

  SIERRA_LEONE: create('SL', 'SLL'),

  SINGAPOUR: create('SG', 'SGD', EXCEPTION),

  SLOVAQUIE: create('SK', 'EUR'),

  SLOVENIE: create('SI', 'EUR'),

  SOMALIE: create('SO', 'SOS'),

  SOUDAN: create('SD', 'SDG'),

  SOUDAN_DU_SUD: create('SS', 'SSP'),

  SRI_LANKA: create('LK', 'LKR'),

  SUEDE: create('SE', 'SEK'),

  SUISSE: create('CH', 'CHF'),

  SURINAME: create('SR', 'SRD', MASCULIN),

  SVALBARD_ET_ILE_JAN_MAYEN: create('SJ', 'NOK'),

  SWAZILAND: create('SZ', 'SZL'),

  TADJIKISTAN: create('TJ', 'TJS'),

  TAIWAN: create('TW', 'TWD', EXCEPTION),

  TANZANIE: create('TZ', 'TZS'),

  TCHAD: create('TD', 'XAF'),

  TCHEQUE_REPUBLIQUE: create('CZ', 'CZK'),

  TERRES_AUSTRALES_FRANCAISES: create('TF', 'EUR'),

  THAILANDE: create('TH', 'THB'),

  TIMOR_LESTE: create('TL', 'USD'),

  TOGO: create('TG', 'XOF'),

  TOKELAU: create('TK', 'NZD'),

  TONGA: create('TO', 'TOP'),

  TRINITE_ET_TOBAGO: create('TT', 'TTD', EXCEPTION),

  TUNISIE: create('TN', 'TND'),

  TURKMENISTAN: create('TM', 'TMT'),

  TURKS_ET_CAICOS: create('TC', 'USD'),

  TURQUIE: create('TR', 'TRY'),

  TUVALU: create('TV', 'AUD', EXCEPTION),

  UKRAINE: create('UA', 'UAH'),

  URUGUAY: create('UY', 'UYU'),

  VANUATU: create('VU', 'VUV', EXCEPTION),

  VATICAN: create('VA', 'EUR'),

  VENEZUELA: create('VE', 'VEF'),

  VIET_NAM: create('VN', 'VND'),

  WALLIS_ET_FUTUNA: create('WF', 'XPF', EXCEPTION),

  YEMEN: create('YE', 'YER'),

  ZAMBIE: create('ZM', 'ZMW'),

  ZIMBABWE: create('ZW', 'ZWL', MASCULIN),
  
};

const CENTRAL_BANKS = [
	Pays.EUROPE,
	Pays.ETATS_UNIS,
	Pays.AUSTRALIE,
	Pays.NOUVELLE_ZELANDE,
	Pays.ROYAUME_UNI,
	Pays.MAROC,
	Pays.NORVEGE,
	Pays.DANEMARK,
	Pays.BELIZE,
	Pays.ANTILLES_NEERLANDAISES,
	Pays.ISRAEL,
];

const asArray = Object.entries(Pays).map((entry) => entry[1]);

const getByCurrency = (currency) => CENTRAL_BANKS.find((pays) => pays.currency === currency) || asArray.find((pays) => pays.currency === currency);
const getByCode = (code) => asArray.find((pays) => pays.code === code);

export default {
	...Pays,
	asArray,
	getByCurrency,
	getByCode,
}
