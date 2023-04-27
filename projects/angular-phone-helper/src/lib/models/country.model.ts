import {IPhoneModel} from "./phone.model";

/**
 * @typedef {Object.<string, ICountryModel>} ICountryListModel
 * @property {ICountryModel} international - The international country object with empty ISO codes.
 * @property {ICountryModel} usa - The United States country object.
 * @property {ICountryModel} can - The Canada country object.
 * @property {ICountryModel} gbr - The United Kingdom country object.
 * @property {ICountryModel} fra - The France country object.
 * @property {ICountryModel} deu - The Germany country object.
 * @property {ICountryModel} ita - The Italy country object.
 * @property {ICountryModel} pol - The Poland country object.
 * @property {ICountryModel} ukr - Ukraine country object.
 * @property {ICountryModel} mda - The Moldova country object.
 * @property {ICountryModel} grc - The Greece country object.
 * @property {ICountryModel} tur - The Turkey country object.
 * @property {ICountryModel} ind - The India country object.
 * @property {ICountryModel} chn - The China country object.
 * @property {ICountryModel} idn - The Indonesia country object.
 * @property {ICountryModel} phl - The Philippines country object.
 * @property {ICountryModel} aus - The Australia country object.
 * @property {ICountryModel} bra - The Brazil country object.
 * @property {ICountryModel} arg - The Argentina country object.
 * @property {ICountryModel} mex - The Mexico country object.
 * @property {ICountryModel} esp - The Spain country object.
 * @property {ICountryModel} cze - The Czech Republic country object.
 * @property {ICountryModel} per - The Peru country object.
 * @property {ICountryModel} jpn - The Japan country object.
 * @property {ICountryModel} kor - The South Korea country object.
 * @property {ICountryModel} aut - The Austria country object.
 * @property {ICountryModel} aze - The Azerbaijan country object.
 * @property {ICountryModel} alb - The Albania country object.
 * @property {ICountryModel} dza - The Algeria country object.
 * @property {ICountryModel} ago - The Angola country object.
 * @property {ICountryModel} and - The Andorra country object.
 * @property {ICountryModel} atg - The Antigua And Barbuda country object.
 * @property {ICountryModel} arm - The Armenia country object.
 * @property {ICountryModel} afg - The Afghanistan country object.
 * @property {ICountryModel} uzb - The Uzbekistan country object.
 * @property {ICountryModel} yem - The Yemen country object.
 * @property {ICountryModel} kna - The Saint Kitts And Nevis country object.
 * @property {ICountryModel} bgd - The Bangladesh country object.
 * @property {ICountryModel} bhs - The Bahamas country object.
 * @property {ICountryModel} brb - The Barbados country object.
 * @property {ICountryModel} bhr - The Bahrain country object.
 * @property {ICountryModel} blz - The Belize country object.
 * @property {ICountryModel} bel - The Belgium country object.
 * @property {ICountryModel} ben - The Benin country object.
 * @property {ICountryModel} bgr - The Bulgaria country object.
 * @property {ICountryModel} bol - The Bolivia country object.
 * @property {ICountryModel} bih - The Bosnia And Herzegovina country object.
 * @property {ICountryModel} bwa - The Botswana country object.
 * @property {ICountryModel} brn - The Brunei country object.
 * @property {ICountryModel} bfa - The Burkina Faso country object.
 * @property {ICountryModel} bdi - The Burundi country object.
 * @property {ICountryModel} btn - The Bhutan country object.
 * @property {ICountryModel} vut - The Vanuatu country object.
 * @property {ICountryModel} hun - The Hungary country object.
 * @property {ICountryModel} ven - The Venezuela country object.
 * @property {ICountryModel} tls - The East Timor country object.
 * @property {ICountryModel} vnm - The Vietnam country object.
 * @property {ICountryModel} gab - The Gabon country object.
 * @property {ICountryModel} hti - The Haiti country object.
 * @property {ICountryModel} guy - The Guyana country object.
 * @property {ICountryModel} gmb - The Gambia country object.
 * @property {ICountryModel} gha - The Ghana country object.
 * @property {ICountryModel} htm - The Guatemala country object.
 * @property {ICountryModel} gin - The Guinea country object.
 * @property {ICountryModel} gnb - The Guinea-Bissau country object.
 * @property {ICountryModel} hnd - The Honduras country object.
 * @property {ICountryModel} grd - The Grenada country object.
 * @property {ICountryModel} geo - The Georgia country object.
 * @property {ICountryModel} dnk - The Denmark country object.
 * @property {ICountryModel} dji - The Djibouti country object.
 * @property {ICountryModel} dma - The Dominica country object.
 * @property {ICountryModel} dom - The Dominican Republic country object.
 * @property {ICountryModel} egy - The Egypt country object.
 * @property {ICountryModel} zmb - The Zambia country object.
 * @property {ICountryModel} zwe - The Zimbabwe country object.
 * @property {ICountryModel} isr - The Israel country object.
 * @property {ICountryModel} cpv - The Cape Verde country object.
 * @property {ICountryModel} khm - The Cambodia country object.
 * @property {ICountryModel} cmr - The Cameroon country object.
 * @property {ICountryModel} caf - The Central African Republic country object.
 * @property {ICountryModel} tcd - The Chad country object.
 * @property {ICountryModel} chl - The Chile country object.
 * @property {ICountryModel} col - The Colombia country object.
 * @property {ICountryModel} com - The Comoros country object.
 * @property {ICountryModel} cog - The Congo country object.
 * @property {ICountryModel} cri - The Costa Rica country object.
 * @property {ICountryModel} civ - The Ivory Coast country object.
 * @property {ICountryModel} hrv - The Croatia country object.
 * @property {ICountryModel} cub - The Cuba country object.
 * @property {ICountryModel} cyp - The Cyprus country object.
 * @property {ICountryModel} ecu - The Ecuador country object.
 * @property {ICountryModel} slv - The El Salvador country object.
 * @property {ICountryModel} gnq - The Equatorial Guinea country object.
 * @property {ICountryModel} est - The Estonia country object.
 * @property {ICountryModel} eth - The Ethiopia country object.
 * @property {ICountryModel} fji - The Fiji country object.
 * @property {ICountryModel} fin - The Finland country object.
 * @property {ICountryModel} isl - The Iceland country object.
 * @property {ICountryModel} irq - The Iraq country object.
 * @property {ICountryModel} irl - The Ireland country object.
 * @property {ICountryModel} jam - The Jamaica country object.
 * @property {ICountryModel} jor - The Jordan country object.
 * @property {ICountryModel} kaz - The Kazakhstan country object.
 * @property {ICountryModel} ken - The Kenya country object.
 * @property {ICountryModel} kir - The Kiribati country object.
 * @property {ICountryModel} prk - The North Korea country object.
 * @property {ICountryModel} kwt - The Kuwait country object.
 * @property {ICountryModel} kgz - The Kyrgyzstan country object.
 * @property {ICountryModel} lao - The Laos country object.
 * @property {ICountryModel} lva - The Latvia country object.
 * @property {ICountryModel} lbn - The Lebanon country object.
 * @property {ICountryModel} lso - The Lesotho country object.
 * @property {ICountryModel} lbr - The Liberia country object.
 * @property {ICountryModel} lby - The Libya country object.
 * @property {ICountryModel} lie - The Liechtenstein country object.
 * @property {ICountryModel} ltu - The Lithuania country object.
 * @property {ICountryModel} lux - The Luxembourg country object.
 * @property {ICountryModel} mkd - The North Macedonia country object.
 * @property {ICountryModel} mdg - The Madagascar country object.
 * @property {ICountryModel} mwi - The Malawi country object.
 * @property {ICountryModel} mys - The Malaysia country object.
 * @property {ICountryModel} mdv - The Maldives country object.
 * @property {ICountryModel} mlt - The Malta country object.
 * @property {ICountryModel} mhl - The Marshall Islands country object.
 * @property {ICountryModel} mrt - The Mauritania country object.
 * @property {ICountryModel} mus - The Mauritius country object.
 * @property {ICountryModel} fsm - The Micronesia Federated States Of country object.
 * @property {ICountryModel} mco - The Monaco country object.
 * @property {ICountryModel} mng - The Mongolia country object.
 * @property {ICountryModel} mne - The Montenegro country object.
 * @property {ICountryModel} mar - The Morocco country object.
 * @property {ICountryModel} moz - The Mozambique country object.
 * @property {ICountryModel} mmr - The Myanmar country object.
 * @property {ICountryModel} nam - The Namibia country object.
 * @property {ICountryModel} nru - The Nauru country object.
 * @property {ICountryModel} npl - The Nepal country object.
 * @property {ICountryModel} nld - The Netherlands country object.
 * @property {ICountryModel} nzl - The New Zealand country object.
 * @property {ICountryModel} ner - The Niger country object.
 * @property {ICountryModel} nga - The Nigeria country object.
 * @property {ICountryModel} niu - The Niue country object.
 * @property {ICountryModel} nor - The Norway country object.
 * @property {ICountryModel} omn - The Oman country object.
 * @property {ICountryModel} pak - The Pakistan country object.
 * @property {ICountryModel} plw - The Palau country object.
 * @property {ICountryModel} pan - The Panama country object.
 * @property {ICountryModel} png - The Papua New Guinea country object.
 * @property {ICountryModel} pry - The Paraguay country object.
 * @property {ICountryModel} prt - The Portugal country object.
 * @property {ICountryModel} qat - The Qatar country object.
 * @property {ICountryModel} rou - The Romania country object.
 * @property {ICountryModel} rwa - The Rwanda country object.
 * @property {ICountryModel} wsm - The Samoa country object.
 * @property {ICountryModel} smr - The San Marino country object.
 * @property {ICountryModel} stp - The Sao Tome And Principe country object.
 * @property {ICountryModel} sau - The Saudi Arabia country object.
 * @property {ICountryModel} sen - The Senegal country object.
 * @property {ICountryModel} srb - The Serbia country object.
 * @property {ICountryModel} syc - The Seychelles country object.
 * @property {ICountryModel} sle - The Sierra Leone country object.
 * @property {ICountryModel} sgp - The Singapore country object.
 * @property {ICountryModel} svk - The Slovakia country object.
 * @property {ICountryModel} svn - The Slovenia country object.
 * @property {ICountryModel} slb - The Solomon Islands country object.
 * @property {ICountryModel} som - The Somalia country object.
 * @property {ICountryModel} zaf - The South Africa country object.
 * @property {ICountryModel} ssd - The South Sudan country object.
 * @property {ICountryModel} lka - The Sri Lanka country object.
 * @property {ICountryModel} sdn - The Sudan country object.
 * @property {ICountryModel} sur - The Suriname country object.
 * @property {ICountryModel} swz - The Eswatini country object.
 * @property {ICountryModel} swe - The Sweden country object.
 * @property {ICountryModel} che - The Switzerland country object.
 * @property {ICountryModel} twn - The Taiwan country object.
 * @property {ICountryModel} tjk - The Tajikistan country object.
 * @property {ICountryModel} tza - The Tanzania, United Republic Of country object.
 * @property {ICountryModel} tha - The Thailand country object.
 * @property {ICountryModel} tgo - The Togo country object.
 * @property {ICountryModel} ton - The Tonga country object.
 * @property {ICountryModel} tto - The Trinidad And Tobago country object.
 * @property {ICountryModel} tun - The Tunisia country object.
 * @property {ICountryModel} tkm - The Turkmenistan country object.
 * @property {ICountryModel} tuv - The Tuvalu country object.
 * @property {ICountryModel} uga - The Uganda country object.
 * @property {ICountryModel} are - The United Arab Emirates country object.
 * @property {ICountryModel} ury - The Uruguay country object.
 * @property {ICountryModel} vct - The Saint Vincent And the Grenadines country object.
 * @property {ICountryModel} lca - The Saint Lucia country object.
 */
export interface ICountryListModel {
  /**
   * Any additional country in the list, indexed by its ISO code.
   */
  [key: string]: ICountryModel,
  international: ICountryModel,
  usa: ICountryModel,
  can: ICountryModel,
  gbr: ICountryModel,
  fra: ICountryModel,
  deu: ICountryModel,
  ita: ICountryModel,
  pol: ICountryModel,
  ukr: ICountryModel,
  mda: ICountryModel,
  grc: ICountryModel,
  tur: ICountryModel,
  ind: ICountryModel,
  chn: ICountryModel,
  idn: ICountryModel,
  phl: ICountryModel,
  aus: ICountryModel,
  bra: ICountryModel,
  arg: ICountryModel,
  mex: ICountryModel,
  esp: ICountryModel,
  cze: ICountryModel,
  per: ICountryModel,
  jpn: ICountryModel,
  kor: ICountryModel,
  aut: ICountryModel,
  aze: ICountryModel,
  alb: ICountryModel,
  dza: ICountryModel,
  ago: ICountryModel,
  and: ICountryModel,
  atg: ICountryModel,
  arm: ICountryModel,
  afg: ICountryModel,
  bhs: ICountryModel,
  bgd: ICountryModel,
  brb: ICountryModel,
  bhr: ICountryModel,
  blz: ICountryModel,
  bel: ICountryModel,
  ben: ICountryModel,
  bgr: ICountryModel,
  bol: ICountryModel,
  bih: ICountryModel,
  bwa: ICountryModel,
  brn: ICountryModel,
  bfa: ICountryModel,
  bdi: ICountryModel,
  btn: ICountryModel,
  vut: ICountryModel,
  hun: ICountryModel,
  ven: ICountryModel,
  tls: ICountryModel,
  vnm: ICountryModel,
  gab: ICountryModel,
  hti: ICountryModel,
  guy: ICountryModel,
  gmb: ICountryModel,
  gha: ICountryModel,
  htm: ICountryModel,
  gin: ICountryModel,
  gnb: ICountryModel,
  hnd: ICountryModel,
  grd: ICountryModel,
  geo: ICountryModel,
  dnk: ICountryModel,
  dji: ICountryModel,
  dma: ICountryModel,
  dom: ICountryModel,
  egy: ICountryModel,
  zmb: ICountryModel,
  zwe: ICountryModel,
  isr: ICountryModel,
  cpv: ICountryModel,
  khm: ICountryModel,
  cmr: ICountryModel,
  caf: ICountryModel,
  tcd: ICountryModel,
  chl: ICountryModel,
  col: ICountryModel,
  com: ICountryModel,
  cog: ICountryModel,
  cri: ICountryModel,
  civ: ICountryModel,
  hrv: ICountryModel,
  cub: ICountryModel,
  cyp: ICountryModel,
  ecu: ICountryModel,
  slv: ICountryModel,
  gnq: ICountryModel,
  est: ICountryModel,
  eth: ICountryModel,
  fji: ICountryModel,
  fin: ICountryModel,
  isl: ICountryModel,
  irq: ICountryModel,
  irl: ICountryModel,
  jam: ICountryModel,
  jor: ICountryModel,
  kaz: ICountryModel,
  ken: ICountryModel,
  kir: ICountryModel,
  prk: ICountryModel,
  kwt: ICountryModel,
  kgz: ICountryModel,
  lao: ICountryModel,
  lva: ICountryModel,
  lbn: ICountryModel,
  lso: ICountryModel,
  lbr: ICountryModel,
  lby: ICountryModel,
  lie: ICountryModel,
  ltu: ICountryModel,
  lux: ICountryModel,
  mkd: ICountryModel,
  mdg: ICountryModel,
  mwi: ICountryModel,
  mys: ICountryModel,
  mdv: ICountryModel,
  mlt: ICountryModel,
  mhl: ICountryModel,
  mrt: ICountryModel,
  mus: ICountryModel,
  fsm: ICountryModel,
  mco: ICountryModel,
  mng: ICountryModel,
  mne: ICountryModel,
  mar: ICountryModel,
  moz: ICountryModel,
  mmr: ICountryModel,
  nam: ICountryModel,
  nru: ICountryModel,
  npl: ICountryModel,
  nld: ICountryModel,
  nzl: ICountryModel,
  ner: ICountryModel,
  nga: ICountryModel,
  niu: ICountryModel,
  nor: ICountryModel,
  omn: ICountryModel,
  pak: ICountryModel,
  plw: ICountryModel,
  pan: ICountryModel,
  png: ICountryModel,
  pry: ICountryModel,
  prt: ICountryModel,
  qat: ICountryModel,
  rou: ICountryModel,
  rwa: ICountryModel,
  wsm: ICountryModel,
  smr: ICountryModel,
  stp: ICountryModel,
  sau: ICountryModel,
  sen: ICountryModel,
  srb: ICountryModel,
  syc: ICountryModel,
  sle: ICountryModel,
  sgp: ICountryModel,
  svk: ICountryModel,
  svn: ICountryModel,
  slb: ICountryModel,
  som: ICountryModel,
  zaf: ICountryModel,
  ssd: ICountryModel,
  lka: ICountryModel,
  sdn: ICountryModel,
  sur: ICountryModel,
  swz: ICountryModel,
  swe: ICountryModel,
  che: ICountryModel,
  twn: ICountryModel,
  tjk: ICountryModel,
  tza: ICountryModel,
  tha: ICountryModel,
  tgo: ICountryModel,
  ton: ICountryModel,
  tto: ICountryModel,
  tun: ICountryModel,
  tkm: ICountryModel,
  tuv: ICountryModel,
  uga: ICountryModel,
  are: ICountryModel,
  ury: ICountryModel,
  uzb: ICountryModel,
  yem: ICountryModel,
  kna: ICountryModel,
  lca: ICountryModel,
  vct: ICountryModel,
  // blr: ICountryModel,
  // cod: ICountryModel,
  // eri: ICountryModel,
  // mli: ICountryModel,
  // nic: ICountryModel,
  // rus: ICountryModel,
  // syr: ICountryModel,
  // irn: ICountryModel,
}

/**
 * An object representing a country.
 *
 * @typedef {Object} ICountryModel
 * @property {number|null} [id] - The ID of the country.
 * @property {string|null} name - The name of the country.
 * @property {string|null} isoCode - The ISO code of the country.
 * @property {string|null} isoCodeAlpha2 - The ISO 3166-1 alpha-2 code of the country.
 * @property {IPhoneModel} phone - An object representing the phone number format for the country.
 */
export interface ICountryModel {
  id?: number | null,
  name: string | null,
  isoCode: string | null,
  isoCodeAlpha2: string | null,
  phone: IPhoneModel,
}
