import {ICountryListModel} from "../models/country.model";

/**
 * Array of ISO 3166-1 alpha-3 country codes.
 * @type {Array<string>}
 */
export const countriesISOCodes = ["AFG","ALB","DZA","AND","AGO","ATG","ARG","ARM","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BTN","BOL","BIH","BWA","BRA","BRN","BGR","BFA","BDI","CPV","KHM","CMR","CAN","CAF","TCD","CHL","CHN","COL","COM","COG","CRI","CIV","HRV","CUB","CYP","CZE","COD","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FJI","FIN","FRA","GAB","GMB","GEO","DEU","GHA","GRC","GRD","GTM","GIN","GNB","GUY","HTI","HND","HUN","ISL","IND","IDN","IRN","IRQ","IRL","ISR","ITA","JAM","JPN","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MRT","MUS","MEX","FSM","MDA","MCO","MNG","MNE","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NZL","NIC","NER","NGA","NIU","NOR","OMN","PAK","PLW","PAN","PNG","PRY","PER","PHL","POL","PRT","QAT","ROU","RUS","RWA","KNA","LCA","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SVK","SVN","SLB","SOM","ZAF","SSD","ESP","LKA","SDN","SUR","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TON","TTO","TUN","TUR","TKM","TUV","UGA","UKR","ARE","GBR","USA","URY","UZB","VUT","VEN","VNM","YEM","ZMB","ZWE",];

/**
 * A dictionary of countries with their ISO codes, ISO Alpha-2 codes, names and phone formats.
 * @typedef {Object} ICountryListModel
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
export const countriesDictionary: ICountryListModel = {
  international: { id: 1, name: "International", isoCode: "", isoCodeAlpha2: "", phone: { codeDigit: "", code: "", format: "+X XXX XXX XXXX", pattern: `^\\+\\d \\d{3} \\d{3} \\d{4}$`, }, },
  usa: { id: 2, name: "United States", isoCode: "USA", isoCodeAlpha2: "US", phone: { codeDigit: "1", code: "+1", format: "(XXX) XXX-XXXX", pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  can: { id: 3, name: "Canada", isoCode: "CAN", isoCodeAlpha2: "CA", phone: { codeDigit: "1", code: "+1", format: "(XXX) XXX-XXXX", pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  gbr: { id: 4, name: "United Kingdom", isoCode: "GBR", isoCodeAlpha2: "GB", phone: { codeDigit: "44", code: "+44", formatInternational: "XX XXXX XXXX", format: "0XX XXXX XXXX", pattern: `^0\\d{2}\\s\\d{4}\\s\\d{4}$`, }, },
  fra: { id: 5, name: "France", isoCode: "FRA", isoCodeAlpha2: "FR", phone: { codeDigit: "33", code: "+33", formatInternational: "X XX XX XX XX", format: "0X XX XX XX XX", pattern: `^0\\d\\s\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}$`, }, },
  deu: { id: 6, name: "Germany", isoCode: "DEU", isoCodeAlpha2: "DE", phone: { codeDigit: "49", code: "+49", formatInternational: "XXX XXXXXXX", format: "0XXX XXXXXXX", pattern: `^0\\d{3}\\s\\d{8}$`, }, },
  ita: { id: 7, name: "Italy", isoCode: "ITA", isoCodeAlpha2: "IT", phone: { codeDigit: "39", code: "+39", format: "XXX XXX XXXX", pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  pol: { id: 8, name: "Poland", isoCode: "POL", isoCodeAlpha2: "PL", phone: { codeDigit: "48", code: "+48", format: "XXX XXX XXX", pattern: `^\\d{3}\\s\\d{3}\\s\\d{3}$`, }, },
  ukr: { id: 9, name: "Ukraine", isoCode: "UKR", isoCodeAlpha2: "UA", phone: { codeDigit: "380", code: "+380", format: "XXX XXX XX XX", pattern: `^\\d{3}\\s\\d{3}\\s\\d{2}\\s\\d{2}$`, }, },
  mda: { id: 10, name: "Moldova", isoCode: "MDA", isoCodeAlpha2: "MD", phone: { codeDigit: "373", code: "+373", format: "XX XXX XXX", pattern: `^\\d{2}\\s\\d{3}\\s\\d{3}$`, }, },
  grc: { id: 11, name: "Greece", isoCode: "GRC", isoCodeAlpha2: "GR", phone: { codeDigit: "30", code: "+30", format: "XXX XXX XXXX", pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  tur: { id: 12, name: "Turkey", isoCode: "TUR", isoCodeAlpha2: "TR", phone: { codeDigit: "90", code: "+90", format: "XXX XXX XXXX", pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  ind: { id: 13, name: "India", isoCode: "IND", isoCodeAlpha2: "IN", phone: { codeDigit: "91", code: "+91", format: "XXXXX XXXXX", pattern: `^\\d{5}\\s\\d{5}$`, }, },
  chn: { id: 14, name: "China", isoCode: "CHN", isoCodeAlpha2: "CN", phone: { codeDigit: "86", code: "+86", format: "XXX XXXX XXXX", pattern: `^\\d{3}\\s\\d{4}\\s\\d{4}$`, }, }, // Readme ends
  idn: { id: 15, name: "Indonesia", isoCode: "IDN", isoCodeAlpha2: "ID", phone: { codeDigit: "62", code: "+62", format: "XXXX-XXXX-XXXX", pattern: "^\\d{4}-\\d{4}-\\d{4}$" } },
  phl: { id: 16, name: "Philippines", isoCode: "PHL", isoCodeAlpha2: "PH", phone: { codeDigit: "63", code: "+63", format: "XXX XXX XXXX", pattern: "^\\d{3}\\s\\d{3}\\s\\d{4}$" } },
  aus: { id: 17, name: "Australia", isoCode: "AUS", isoCodeAlpha2: "AU", phone: { codeDigit: "61", code: "+61", format: "XXXX XXX XXX", pattern: "^\\d{4}\\s\\d{3}\\s\\d{3}$" } },
  bra: { id: 18, name: "Brazil", isoCode: "BRA", isoCodeAlpha2: "BR", phone: { codeDigit: "55", code: "+55", format: "(XX) XXXX-XXXX", pattern: "^\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}$" } },
  arg: { id: 19, name: "Argentina", isoCode: "ARG", isoCodeAlpha2: "AR", phone: { codeDigit: "54", code: "+54", format: "XX XXXX-XXXX", pattern: "^\\d{2}\\s\\d{4}-\\d{4}$" } },
  mex: { id: 20, name: "Mexico", isoCode: "MEX", isoCodeAlpha2: "MX", phone: { codeDigit: "52", code: "+52", format: "XX XXXX XXXX", pattern: "^\\d{2}\\s\\d{4}\\s\\d{4}$" } },
  esp: { id: 21, name: "Spain", isoCode: "ESP", isoCodeAlpha2: "ES", phone: { codeDigit: "34", code: "+34", format: "XXX XX XX XX", pattern: "^\\d{3}\\s\\d{2}\\s\\d{2}\\s\\d{2}$" } },
  cze: { id: 22, name: "Czech Republic", isoCode: "CZE", isoCodeAlpha2: "CZ", phone: { codeDigit: "420", code: "+420", format: "XXX XXX XXX", pattern: "^\\d{3}\\s\\d{3}\\s\\d{3}$" } },
  per: { id: 23, name: "Peru", isoCode: "PER", isoCodeAlpha2: "PE", phone: { codeDigit: "51", code: "+51", format: "XXX XXX XXX", pattern: "^\\d{3}\\s\\d{3}\\s\\d{3}$" } },
  jpn: { id: 24, name: "Japan", isoCode: "JPN", isoCodeAlpha2: "JP", phone: { codeDigit: "81", code: "+81", format: "XXX-XXXX-XXXX", pattern: "^\d{3}\-\d{4}\-\d{4}$" } },
  kor: { id: 25, name: "South Korea", isoCode: "KOR", isoCodeAlpha2: "KR", phone: { codeDigit: "82", code: "+82", format: "XXX-XXX-XXXX", pattern: "^\d{3}\-\d{3}\-\d{4}$" } },
  aut: { id: 26, name: "Austria", isoCode: "AUT", isoCodeAlpha2: "AT", phone: { codeDigit: "43", code: "+43", format: "XX XXXXXXXXX", pattern: "^\d{2}\s\d{10}$" } },
  aze: { id: 27, name: "Azerbaijan", isoCode: "AZE", isoCodeAlpha2: "AZ", phone: { codeDigit: "994", code: "+994", format: "XX XXXXX XXXX", pattern: "^\d{2}\s\d{5}\s\d{4}$" } },
  alb: { id: 28, name: "Albania", isoCode: "ALB", isoCodeAlpha2: "AL", phone: { codeDigit: "355", code: "+355", format: "XXX XX XX XXX", pattern: "^\d{3}\s\d{2}\s\d{2}\s\d{3}$" } },
  dza: { id: 29, name: "Algeria", isoCode: "DZA", isoCodeAlpha2: "DZ", phone: { codeDigit: "213", code: "+213", format: "XXX XX XX XX XX", pattern: "^\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$" } },
  ago: { id: 30, name: "Angola", isoCode: "AGO", isoCodeAlpha2: "AO", phone: { codeDigit: "244", code: "+244", format: "XXX XXX XXX", pattern: "^\d{3}\s\d{3}\s\d{3}$" } },
  and: { id: 31, name: "Andorra", isoCode: "AND", isoCodeAlpha2: "AD", phone: { codeDigit: "376", code: "+376", format: "XXXXXX", pattern: "^\d{6}$" } },
  atg: { id: 32, name: "Antigua And Barbuda", isoCode: "ATG", isoCodeAlpha2: "AG", phone: { codeDigit: "1268", code: "+1268", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  arm: { id: 33, name: "Armenia", isoCode: "ARM", isoCodeAlpha2: "AM", phone: { codeDigit: "374", code: "+374", format: "XX XXXXXX", pattern: "^\d{2}\s\d{6}$" } },
  afg: { id: 34, name: "Afghanistan", isoCode: "AFG", isoCodeAlpha2: "AF", phone: { codeDigit: "93", code: "+93", format: "X XX XXX XXXX", pattern: "^\d{1}\s\d{2}\s\d{3}\s\d{4}$" } },
  uzb: { id: 35, name: "Uzbekistan", isoCode: "UZB", isoCodeAlpha2: "UZ", phone: {codeDigit: "998", code: "+998", format: "XX XXX XX XX", pattern: "^\d{2}\s\d{3}\s\d{2}\s\d{2}$"} },
  yem: { id: 36, name: "Yemen", isoCode: "YEM", isoCodeAlpha2: "YE", phone: {codeDigit: "967", code: "+967", format: "X XXX XXX", pattern: "^[0-9]\s\d{3}\s\d{3}$"} },
  kna: { id: 37, name: "Saint Kitts And Nevis", isoCode: "KNA", isoCodeAlpha2: "KN", phone: { codeDigit: "1869", code: "+1869", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$" } },
  bgd: { id: 38, name: "Bangladesh", isoCode: "BGD", isoCodeAlpha2: "BD", phone: { codeDigit: "880", code: "+880", formatInternational: "01XX XXX XXXX", format: "XX XXX XXXX", pattern: "^01\d{2}\s\d{3}\s\d{4}$" } },
  bhs: { id: 39, name: "Bahamas", isoCode: "BHS", isoCodeAlpha2: "BS", phone: { codeDigit: "1-242", code: "+1-242", format: "(XXX) XXX-XXXX", pattern: "^\(\d{3}\)\s\d{3}\-\d{4}$" } },
  brb: { id: 40, name: "Barbados", isoCode: "BRB", isoCodeAlpha2: "BB", phone: { codeDigit: "1-246", code: "+1-246", format: "(XXX) XXX-XXXX", pattern: "^\(\d{3}\)\s\d{3}\-\d{4}$" } },
  bhr: { id: 41, name: "Bahrain", isoCode: "BHR", isoCodeAlpha2: "BH", phone: { codeDigit: "973", code: "+973", format: "XXXX XXXX", pattern: "^\d{4}\s\d{4}$" } },
  blz: { id: 43, name: "Belize", isoCode: "BLZ", isoCodeAlpha2: "BZ", phone: { codeDigit: "501", code: "+501", format: "XXX-XXXX", pattern: "^\d{3}\-\d{4}$" } },
  bel: { id: 44, name: "Belgium", isoCode: "BEL", isoCodeAlpha2: "BE", phone: { codeDigit: "32", code: "+32", formatInternational: "X XX XX XX XX", format: "0X XX XX XX XX", pattern: "^0\d{1}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$" } },
  ben: { id: 45, name: "Benin", isoCode: "BEN", isoCodeAlpha2: "BJ", phone: { codeDigit: "229", code: "+229", format: "XX XX XX XX", pattern: "^\d{2}\s\d{2}\s\d{2}\s\d{2}$" } },
  bgr: { id: 46, name: "Bulgaria", isoCode: "BGR", isoCodeAlpha2: "BG", phone: { codeDigit: "359", code: "+359", format: "X XXX XXXX", pattern: "^\d{1}\s\d{3}\s\d{4}$" } },
  bol: { id: 47, name: "Bolivia", isoCode: "BOL", isoCodeAlpha2: "BO", phone: { codeDigit: "591", code: "+591", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  bih: { id: 48, name: "Bosnia And Herzegovina", isoCode: "BIH", isoCodeAlpha2: "BA", phone: { codeDigit: "387", code: "+387", format: "XXX XXX XXX", pattern: "^\d{3}\s\d{3}\s\d{3}$" } },
  bwa: { id: 49, name: "Botswana", isoCode: "BWA", isoCodeAlpha2: "BW", phone: { codeDigit: "267", code: "+267", format: "XX XXX XXX", pattern: "^\d{2}\s\d{3}\s\d{3}$" } },
  brn: { id: 50, name: "Brunei", isoCode: "BRN", isoCodeAlpha2: "BN", phone: { codeDigit: "673", code: "+673", format: "XXXX XXX", pattern: "^\d{4}\s\d{3}$" } },
  bfa: { id: 51, name: "Burkina Faso", isoCode: "BFA", isoCodeAlpha2: "BF", phone: { codeDigit: "226", code: "+226", format: "XX XX XXXX", pattern: "^\d{2}\s\d{2}\s\d{4}$" } },
  bdi: { id: 52, name: "Burundi", isoCode: "BDI", isoCodeAlpha2: "BI", phone: { codeDigit: "257", code: "+257", format: "XX XX XXXX", pattern: "^\d{2}\s\d{2}\s\d{4}$" } },
  btn: { id: 53, name: "Bhutan", isoCode: "BTN", isoCodeAlpha2: "BT", phone: { codeDigit: "975", code: "+975", format: "XX XX XXX", pattern: "^\d{2}\s\d{2}\s\d{3}$" } },
  vut: { id: 54, name: "Vanuatu", isoCode: "VUT", isoCodeAlpha2: "VU", phone: { codeDigit: "678", code: "+678", format: "XXX-XXXX", pattern: "^\d{3}\-\d{4}$" } },
  hun: { id: 55, name: "Hungary", isoCode: "HUN", isoCodeAlpha2: "HU", phone: { codeDigit: "36", code: "+36", format: "(XX) XXX-XXXX", pattern: "^\(\d{2}\)\s\d{3}\-\d{4}$" } },
  ven: { id: 56, name: "Venezuela", isoCode: "VEN", isoCodeAlpha2: "VE", phone: { codeDigit: "58", code: "+58", format: "(XXX) XXX-XXXX", pattern: "^\(\d{3}\)\s\d{3}\-\d{4}$" } },
  tls: { id: 57, name: "East Timor", isoCode: "TLS", isoCodeAlpha2: "TL", phone: { codeDigit: "670", code: "+670", format: "XXX-XXXX", pattern: "^\d{3}\-\d{4}$" } },
  vnm: { id: 58, name: "Vietnam", isoCode: "VNM", isoCodeAlpha2: "VN", phone: { codeDigit: "84", code: "+84", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  gab: { id: 59, name: "Gabon", isoCode: "GAB", isoCodeAlpha2: "GA", phone: { codeDigit: "241", code: "+241", format: "X XX XX XX", pattern: "^\d{1}\s\d{2}\s\d{2}\s\d{2}$" } },
  hti: { id: 60, name: "Haiti", isoCode: "HTI", isoCodeAlpha2: "HT", phone: { codeDigit: "509", code: "+509", format: "XXX XX-XXXX", pattern: "^\d{3}\s\d{2}-\d{4}$" } },
  guy: { id: 61, name: "Guyana", isoCode: "GUY", isoCodeAlpha2: "GY", phone: { codeDigit: "592", code: "+592", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  gmb: { id: 62, name: "Gambia", isoCode: "GMB", isoCodeAlpha2: "GM", phone: { codeDigit: "220", code: "+220", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  gha: { id: 63, name: "Ghana", isoCode: "GHA", isoCodeAlpha2: "GH", phone: { codeDigit: "233", code: "+233", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  htm: { id: 64, name: "Guatemala", isoCode: "GTM", isoCodeAlpha2: "GT", phone: { codeDigit: "502", code: "+502", format: "XXXX XXXX", pattern: "^\d{4}\s\d{4}$" } },
  gin: { id: 65, name: "Guinea", isoCode: "GIN", isoCodeAlpha2: "GN", phone: { codeDigit: "224", code: "+224", format: "XX XXX XXX", pattern: "^\d{2}\s\d{3}\s\d{3}$" } },
  gnb: { id: 66, name: "Guinea-Bissau", isoCode: "GNB", isoCodeAlpha2: "GW", phone: { codeDigit: "245", code: "+245", format: "X XXX XXXX", pattern: "^\d{1}\s\d{3}\s\d{4}$" } },
  hnd: { id: 67, name: "Honduras", isoCode: "HND", isoCodeAlpha2: "HN", phone: { codeDigit: "504", code: "+504", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  grd: { id: 68, name: "Grenada", isoCode: "GRD", isoCodeAlpha2: "GD", phone: { codeDigit: "473", code: "+473", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  geo: { id: 69, name: "Georgia", isoCode: "GEO", isoCodeAlpha2: "GE", phone: { codeDigit: "995", code: "+995", format: "XXX XX XX XX", pattern: "^\d{3}\s\d{2}\s\d{2}\s\d{2}$" } },
  dnk: { id: 70, name: "Denmark", isoCode: "DNK", isoCodeAlpha2: "DK", phone: { codeDigit: "45", code: "+45", format: "XX XX XX XX", pattern: "^\d{2}\s\d{2}\s\d{2}\s\d{2}$" } },
  dji: { id: 71, name: "Djibouti", isoCode: "DJI", isoCodeAlpha2: "DJ", phone: { codeDigit: "253", code: "+253", format: "XX XX XX XX", pattern: "^\d{2}\s\d{2}\s\d{2}\s\d{2}$" } },
  dma: { id: 72, name: "Dominica", isoCode: "DMA", isoCodeAlpha2: "DM", phone: { codeDigit: "1", code: "+1", format: "(XXX) XXX-XXXX", pattern: "^\(\d{3}\)\s\d{3}\-\d{4}$" } },
  dom: { id: 73, name: "Dominican Republic", isoCode: "DOM", isoCodeAlpha2: "DO", phone: { codeDigit: "1", code: "+1", format: "(XXX) XXX-XXXX", pattern: "^\(\d{3}\)\s\d{3}\-\d{4}$" } },
  egy: { id: 74, name: "Egypt", isoCode: "EGY", isoCodeAlpha2: "EG", phone: { codeDigit: "20", code: "+20", formatInternational: "01X XXX XXXX", format: "X XXX XXXX", pattern: "^01[0-2/5]\s\d{3}\s\d{4}$" } },
  zmb: { id: 75, name: "Zambia", isoCode: "ZMB", isoCodeAlpha2: "ZM", phone: { codeDigit: "260", code: "+260", format: "XXX XXX XXX", pattern: "^\d{3}\s\d{3}\s\d{3}$" } },
  zwe: { id: 76, name: "Zimbabwe", isoCode: "ZWE", isoCodeAlpha2: "ZW", phone: { codeDigit: "263", code: "+263", format: "X XXX XXXX", pattern: "^\d{1}\s\d{3}\s\d{4}$" } },
  isr: { id: 77, name: "Israel", isoCode: "ISR", isoCodeAlpha2: "IL", phone: { codeDigit: "972", code: "+972", format: "XX-XXX-XXXX", pattern: "^\d{2}\-\d{3}\-\d{4}$" } },
  cpv: { id: 78, name: "Cape Verde", isoCode: "CPV", isoCodeAlpha2: "CV", phone: { codeDigit: "238", code: "+238", format: "XXX-XX-XX", pattern: "^\d{3}-\d{2}-\d{2}$" } },
  khm: { id: 79, name: "Cambodia", isoCode: "KHM", isoCodeAlpha2: "KH", phone: { codeDigit: "855", code: "+855", format: "XX-XXX-XXX", pattern: "^([1-9]\\d|[1-9])\\d{6}$" } },
  cmr: { id: 80, name: "Cameroon", isoCode: "CMR", isoCodeAlpha2: "CM", phone: { codeDigit: "237", code: "+237", format: "XX-XX-XX-XX", pattern: "^([2368]\\d{1}|5[124578]\\d{1}|4[79]\\d{1}|7[012578]\\d{1})\\d{6}$" } },
  caf: { id: 81, name: "Central African Republic", isoCode: "CAF", isoCodeAlpha2: "CF", phone: { codeDigit: "236", code: "+236", format: "XX-XX-XX-XX", pattern: "^(\\d{2})(\\d{2})(\\d{2})$" } },
  tcd: { id: 82, name: "Chad", isoCode: "TCD", isoCodeAlpha2: "TD", phone: { codeDigit: "235", code: "+235", format: "XX-XX-XX-XX", pattern: "^\\d{6}$" } },
  chl: { id: 83, name: "Chile", isoCode: "CHL", isoCodeAlpha2: "CL", phone: { codeDigit: "56", code: "+56", format: "XX-XXXX-XXXX", pattern: "^([2-9]\\d{1}|1[0-8]\\d{1}|19[0-79])\\d{6}$" } },
  col: { id: 84, name: "Colombia", isoCode: "COL", isoCodeAlpha2: "CO", phone: { codeDigit: "57", code: "+57", format: "XXX-XXX-XXXX", pattern: "^(3\\d{2}|3\\d{3}|7\\d{2}|8[1-8]\\d{1}|1[2-9]\\d{2}|4([1-9]|[12]\\d|3[0-8])|5[1-46-9])\\d{6}$" } },
  com: { id: 85, name: "Comoros", isoCode: "COM", isoCodeAlpha2: "KM", phone: { codeDigit: "269", code: "+269", format: "XX-XX-XX", pattern: "^\\d{6}$" } },
  cog: { id: 86, name: "Congo", isoCode: "COG", isoCodeAlpha2: "CG", phone: { codeDigit: "242", code: "+242", format: "XXX-XX-XX-XXX", pattern: "^\\d{9}$" } },
  cri: { id: 87, name: "Costa Rica", isoCode: "CRI", isoCodeAlpha2: "CR", phone: { codeDigit: "506", code: "+506", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  civ: { id: 88, name: "Ivory Coast", isoCode: "CIV", isoCodeAlpha2: "CI", phone: { codeDigit: "225", code: "+225", format: "XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}$" } },
  hrv: { id: 89, name: "Croatia", isoCode: "HRV", isoCodeAlpha2: "HR", phone: { codeDigit: "385", code: "+385", format: "XXX-XXX-XXX", pattern: "^\d{3}-\d{3}-\d{3}$" } },
  cub: { id: 90, name: "Cuba", isoCode: "CUB", isoCodeAlpha2: "CU", phone: { codeDigit: "53", code: "+53", format: "X-XXXXXX", pattern: "^\d{1}-\d{6}$" } },
  cyp: { id: 91, name: "Cyprus", isoCode: "CYP", isoCodeAlpha2: "CY", phone: { codeDigit: "357", code: "+357", format: "XX-XXXXXX", pattern: "^\d{2}-\d{6}$" } },
  ecu: { id: 92, name: "Ecuador", isoCode: "ECU", isoCodeAlpha2: "EC", phone: { codeDigit: "593", code: "+593", format: "X-XXX-XXXX", pattern: "^\d{1}-\d{3}-\d{4}$" } },
  slv: { id: 93, name: "El Salvador", isoCode: "SLV", isoCodeAlpha2: "SV", phone: { codeDigit: "503", code: "+503", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  gnq: { id: 94, name: "Equatorial Guinea", isoCode: "GNQ", isoCodeAlpha2: "GQ", phone: { codeDigit: "240", code: "+240", format: "XXX-XXX-XXX", pattern: "^\d{3}-\d{3}-\d{3}$" } },
  est: { id: 95, name: "Estonia", isoCode: "EST", isoCodeAlpha2: "EE", phone: { codeDigit: "372", code: "+372", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  eth: { id: 96, name: "Ethiopia", isoCode: "ETH", isoCodeAlpha2: "ET", phone: { codeDigit: "251", code: "+251", format: "XX XXX XXXX", pattern: "^\d{2}\s\d{3}\s\d{4}$" } },
  fji: { id: 97, name: "Fiji", isoCode: "FJI", isoCodeAlpha2: "FJ", phone: { codeDigit: "679", code: "+679", format: "X XXXXXX", pattern: "^\d\s\d{6}$" } },
  fin: { id: 98, name: "Finland", isoCode: "FIN", isoCodeAlpha2: "FI", phone: { codeDigit: "358", code: "+358", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  isl: { id: 99, name: "Iceland", isoCode: "ISL", isoCodeAlpha2: "IS", phone: { codeDigit: "354", code: "+354", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  irq: { id: 100, name: "Iraq", isoCode: "IRQ", isoCodeAlpha2: "IQ", phone: { codeDigit: "964", code: "+964", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  irl: { id: 101, name: "Ireland", isoCode: "IRL", isoCodeAlpha2: "IE", phone: { codeDigit: "353", code: "+353", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  jam: { id: 102, name: "Jamaica", isoCode: "JAM", isoCodeAlpha2: "JM", phone: { codeDigit: "1", code: "+1", format: "(XXX) XXX-XXXX", pattern: "^\d3\d3\s\d{3}-\d{4}$" } },
  jor: { id: 103, name: "Jordan", isoCode: "JOR", isoCodeAlpha2: "JO", phone: { codeDigit: "962", code: "+962", format: "X XXX XXXX", pattern: "^\d\s\d{3}\s\d{4}$" } },
  kaz: { id: 104, name: "Kazakhstan", isoCode: "KAZ", isoCodeAlpha2: "KZ", phone: { codeDigit: "7", code: "+7", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$" } },
  ken: { id: 105, name: "Kenya", isoCode: "KEN", isoCodeAlpha2: "KE", phone: { codeDigit: "254", code: "+254", format: "XXX-XXX-XXX", pattern: "^\d{3}-\d{3}-\d{3}$" } },
  kir: { id: 106, name: "Kiribati", isoCode: "KIR", isoCodeAlpha2: "KI", phone: { codeDigit: "686", code: "+686", format: "XXX-XXX", pattern: "^\d{3}-\d{3}$" } },
  prk: { id: 107, name: "North Korea", isoCode: "PRK", isoCodeAlpha2: "KP", phone: { codeDigit: "850", code: "+850", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$" } },
  kwt: { id: 108, name: "Kuwait", isoCode: "KWT", isoCodeAlpha2: "KW", phone: { codeDigit: "965", code: "+965", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  kgz: { id: 109, name: "Kyrgyzstan", isoCode: "KGZ", isoCodeAlpha2: "KG", phone: { codeDigit: "996", code: "+996", format: "XXX-XXX-XXX", pattern: "^\d{3}-\d{3}-\d{3}$" } },
  lao: { id: 110, name: "Laos", isoCode: "LAO", isoCodeAlpha2: "LA", phone: { codeDigit: "856", code: "+856", format: "XX-XXX-XXX", pattern: "^\d{2}-\d{3}-\d{3}$" } },
  lva: { id: 111, name: "Latvia", isoCode: "LVA", isoCodeAlpha2: "LV", phone: { codeDigit: "371", code: "+371", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  lbn: { id: 112, name: "Lebanon", isoCode: "LBN", isoCodeAlpha2: "LB", phone: { codeDigit: "961", code: "+961", format: "XX-XXX-XXX", pattern: "^\d{2}-\d{3}-\d{3}$" } },
  lso: { id: 113, name: "Lesotho", isoCode: "LSO", isoCodeAlpha2: "LS", phone: { codeDigit: "266", code: "+266", format: "XXX-XXXXX", pattern: "^\d{3}-\d{5}$" } },
  lbr: { id: 114, name: "Liberia", isoCode: "LBR", isoCodeAlpha2: "lr", phone: {codeDigit: "231", code: "+231", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$"} },
  lby: { id: 115, name: "Libya", isoCode: "LBY", isoCodeAlpha2: "ly", phone: {codeDigit: "218", code: "+218", format: "XX-XXX-XXXX", pattern: "^\d{2}-\d{3}-\d{4}$"} },
  lie: { id: 116, name: "Liechtenstein", isoCode: "LIE", isoCodeAlpha2: "li", phone: {codeDigit: "423", code: "+423", format: "XXXXXXX", pattern: "^\d{7}$"} },
  ltu: { id: 117, name: "Lithuania", isoCode: "LTU", isoCodeAlpha2: "lt", phone: {codeDigit: "370", code: "+370", format: "(X-XXXXX)", pattern: "^(\d)-\d{5}$"} },
  lux: { id: 118, name: "Luxembourg", isoCode: "LUX", isoCodeAlpha2: "lu", phone: {codeDigit: "352", code: "+352", format: "XXXXXXX", pattern: "^\d{7}$"} },
  mkd: { id: 119, name: "North Macedonia", isoCode: "MKD", isoCodeAlpha2: "mk", phone: {codeDigit: "389", code: "+389", format: "XXX-XXX-XX", pattern: "^\d{3}-\d{3}-\d{2}$"} },
  mdg: { id: 120, name: "Madagascar", isoCode: "MDG", isoCodeAlpha2: "mg", phone: {codeDigit: "261", code: "+261", format: "XX-XX-XXX-XX", pattern: "^\d{2}-\d{2}-\d{3}-\d{2}$"} },
  mwi: { id: 121, name: "Malawi", isoCode: "MWI", isoCodeAlpha2: "mw", phone: {codeDigit: "265", code: "+265", format: "XXXXXXXXX", pattern: "^\d{9}$"} },
  mys: { id: 122, name: "Malaysia", isoCode: "MYS", isoCodeAlpha2: "my", phone: {codeDigit: "60", code: "+60", format: "XX-XXXX-XXXX", pattern: "^\d{2}-\d{4}-\d{4}$"} },
  mdv: { id: 123, name: "Maldives", isoCode: "MDV", isoCodeAlpha2: "mv", phone: {codeDigit: "960", code: "+960", format: "XXXXXXX", pattern: "^\d{7}$"} },
  mlt: { id: 124, name: "Malta", isoCode: "MLT", isoCodeAlpha2: "MT", phone: {codeDigit: "356", code: "+356", format: "XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}$"} },
  mhl: { id: 125, name: "Marshall Islands", isoCode: "MHL", isoCodeAlpha2: "MH", phone: {codeDigit: "692", code: "+692", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$"} },
  mrt: { id: 126, name: "Mauritania", isoCode: "MRT", isoCodeAlpha2: "MR", phone: {codeDigit: "222", code: "+222", format: "XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}$"} },
  mus: { id: 127, name: "Mauritius", isoCode: "MUS", isoCodeAlpha2: "MU", phone: {codeDigit: "230", code: "+230", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$"} },
  fsm: { id: 128, name: "Micronesia Federated States Of", isoCode: "FSM", isoCodeAlpha2: "FM", phone: {codeDigit: "691", code: "+691", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$"} },
  mco: { id: 129, name: "Monaco", isoCode: "MCO", isoCodeAlpha2: "MC", phone: {codeDigit: "377", code: "+377", format: "XX-XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$"} },
  mng: { id: 130, name: "Mongolia", isoCode: "MNG", isoCodeAlpha2: "MN", phone: {codeDigit: "976", code: "+976", format: "XX-XX-XXXX", pattern: "^\d{2}-\d{2}-\d{4}$"} },
  mne: { id: 131, name: "Montenegro", isoCode: "MNE", isoCodeAlpha2: "ME", phone: {codeDigit: "382", code: "+382", format: "XX-XXX-XXX", pattern: "^\d{2}-\d{3}-\d{3}$"} },
  mar: { id: 132, name: "Morocco", isoCode: "MAR", isoCodeAlpha2: "MA", phone: {codeDigit: "212", code: "+212", format: "XX-XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$"} },
  moz: { id: 133, name: "Mozambique", isoCode: "MOZ", isoCodeAlpha2: "mz", phone: {codeDigit: "258", code: "+258", format: "XX-XXX-XXXX", pattern: "^\d{2}-\d{3}-\d{4}$"} },
  mmr: { id: 134, name: "Myanmar", isoCode: "MMR", isoCodeAlpha2: "mm", phone: {codeDigit: "95", code: "+95", format: "XX-XXX-XXX", pattern: "^\d{2}-\d{3}-\d{3}$"} },
  nam: { id: 135, name: "Namibia", isoCode: "NAM", isoCodeAlpha2: "na", phone: {codeDigit: "264", code: "+264", format: "XXX-XXXXXX", pattern: "^\d{3}-\d{6}$"} },
  nru: { id: 136, name: "Nauru", isoCode: "NRU", isoCodeAlpha2: "nr", phone: {codeDigit: "674", code: "+674", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$"} },
  npl: { id: 137, name: "Nepal", isoCode: "NPL", isoCodeAlpha2: "np", phone: {codeDigit: "977", code: "+977", format: "XXX-XXXXXXX", pattern: "^\d{3}-\d{7}$"} },
  nld: { id: 138, name: "Netherlands", isoCode: "NLD", isoCodeAlpha2: "nl", phone: {codeDigit: "31", code: "+31", format: "X-XXXXXX", pattern: "^\d{1}-\d{6}$"} },
  nzl: { id: 139, name: "New Zealand", isoCode: "NZL", isoCodeAlpha2: "nz", phone: {codeDigit: "64", code: "+64", format: "XX-XXXX-XXXX", pattern: "^\d{2}-\d{4}-\d{4}$"} },
  ner: { id: 140, name: "Niger", isoCode: "NER", isoCodeAlpha2: "ne", phone: {codeDigit: "227", code: "+227", format: "XX-XX-XXXX", pattern: "^\d{2}-\d{2}-\d{4}$"} },
  nga: { id: 141, name: "Nigeria", isoCode: "NGA", isoCodeAlpha2: "ng", phone: {codeDigit: "234", code: "+234", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$"} },
  niu: { id: 142, name: "Niue", isoCode: "NIU", isoCodeAlpha2: "NU", phone: { codeDigit: "683", code: "+683", format: "XXXX", pattern: "^\d{4}$" } },
  nor: { id: 143, name: "Norway", isoCode: "NOR", isoCodeAlpha2: "NO", phone: { codeDigit: "47", code: "+47", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$" } },
  omn: { id: 144, name: "Oman", isoCode: "OMN", isoCodeAlpha2: "OM", phone: { codeDigit: "968", code: "+968", format: "XXX-XXXX-XXXX", pattern: "^\d{3}-\d{4}-\d{4}$" } },
  pak: { id: 145, name: "Pakistan", isoCode: "PAK", isoCodeAlpha2: "PK", phone: { codeDigit: "92", code: "+92", format: "XXX XXXXXXX", pattern: "^\d{3} \d{7}$" } },
  plw: { id: 146, name: "Palau", isoCode: "PLW", isoCodeAlpha2: "PW", phone: { codeDigit: "680", code: "+680", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  pan: { id: 147, name: "Panama", isoCode: "PAN", isoCodeAlpha2: "PA", phone: { codeDigit: "507", code: "+507", format: "XXX-XXXX-XXXX", pattern: "^\d{3}-\d{4}-\d{4}$" } },
  png: { id: 148, name: "Papua New Guinea", isoCode: "PNG", isoCodeAlpha2: "PG", phone: { codeDigit: "675", code: "+675", format: "XXXX-XXX", pattern: "^\d{4}-\d{3}$" } },
  pry: { id: 149, name: "Paraguay", isoCode: "PRY", isoCodeAlpha2: "PY", phone: { codeDigit: "595", code: "+595", format: "XXX-XXXXXX", pattern: "^\d{3}-\d{6}$" } },
  prt: { id: 150, name: "Portugal", isoCode: "PRT", isoCodeAlpha2: "PT", phone: { codeDigit: "351", code: "+351", format: "XXX XXX XXX", pattern: "^\d{3} \d{3} \d{3}$" } },
  qat: { id: 151, name: "Qatar", isoCode: "QAT", isoCodeAlpha2: "QA", phone: { codeDigit: "974", code: "+974", format: "XXX-XXXX-XXXX", pattern: "^\d{3}-\d{4}-\d{4}$" } },
  rou: { id: 152, name: "Romania", isoCode: "ROU", isoCodeAlpha2: "ro", phone: {codeDigit: "40", code: "+40", formatInternational: "XX XXX XXX", format: "0XX XXX XXX", pattern: "^0\d{2}\s?\d{3}\s?\d{3}$"} },
  rwa: { id: 153, name: "Rwanda", isoCode: "RWA", isoCodeAlpha2: "rw", phone: {codeDigit: "250", code: "+250", format: "XXX XXX XXXX", pattern: "^0?\d{2}\d{3}\d{4}$"} },
  wsm: { id: 154, name: "Samoa", isoCode: "WSM", isoCodeAlpha2: "ws", phone: {codeDigit: "685", code: "+685", format: "XX XXXX", pattern: "^7\d{3}$"} },
  smr: { id: 155, name: "San Marino", isoCode: "SMR", isoCodeAlpha2: "sm", phone: {codeDigit: "378", code: "+378", format: "XXX XXXXXX", pattern: "^6\d{5,8}$"} },
  stp: { id: 156, name: "Sao Tome And Principe", isoCode: "STP", isoCodeAlpha2: "st", phone: {codeDigit: "239", code: "+239", format: "9XXX-XXXX", pattern: "^9\d{3}[\s-]?\d{4}$"} },
  sau: { id: 157, name: "Saudi Arabia", isoCode: "SAU", isoCodeAlpha2: "sa", phone: {codeDigit: "966", code: "+966", format: "XXX XXX XXXX", pattern: "^[1-9]\d{1,2}\s\d{3}\s\d{4}$"} },
  sen: { id: 158, name: "Senegal", isoCode: "SEN", isoCodeAlpha2: "sn", phone: {codeDigit: "221", code: "+221", format: "XX XXX XX XX", pattern: "^(7[0-5]|3[8-9]|7[6-7]|6[3-9]|76|77)\d{3}\d{2}$"} },
  srb: { id: 159, name: "Serbia", isoCode: "SRB", isoCodeAlpha2: "rs", phone: {codeDigit: "381", code: "+381", format: "XX XXXXXXX", pattern: "^((\d{3}-\d{7})|(\d{2}-\d{3}-\d{4}-\d{3}))$"} },
  syc: { id: 160, name: "Seychelles", isoCode: "SYC", isoCodeAlpha2: "sc", phone: {codeDigit: "248", code: "+248", format: "X XX XX XX", pattern: "^(4[2-7]|2[5-7])\d{5}$"} },
  sle: { id: 161, name: "Sierra Leone", isoCode: "SLE", isoCodeAlpha2: "sl", phone: {codeDigit: "232", code: "+232", format: "(XXX) XXX XXXX", pattern: "^\((2[23][2-9])|(3[2-9][2-9])|(4[2-9][2-9])\)\s\d{3}\s\d{4}$"} },
  sgp: { id: 162, name: "Singapore", isoCode: "SGP", isoCodeAlpha2: "sg", phone: {codeDigit: "65", code: "+65", format: "XXXX XXXX", pattern: "^\d{4}\s\d{4}$"} },
  svk: { id: 163, name: "Slovakia", isoCode: "SVK", isoCodeAlpha2: "sk", phone: {codeDigit: "421", code: "+421", format: "XXX/XXX XXX", pattern: "^(0[1-9]|[1-9][0-9])[/]?\d{3}\s\d{3}$"} },
  svn: { id: 164, name: "Slovenia", isoCode: "SVN", isoCodeAlpha2: "si", phone: {codeDigit: "386", code: "+386", formatInternational: "X XXX XX XX", format: "0X XXX XX XX", pattern: "^0[1-9]\d{1,2}\s\d{2}\s\d{2}$"} },
  slb: { id: 165, name: "Solomon Islands", isoCode: "SLB", isoCodeAlpha2: "sb", phone: {codeDigit: "677", code: "+677", format: "XXX XXXX", pattern: "^((2[3-7]|3[2-9]|7[3-8]|8[2-7])\d{3})$"} },
  som: { id: 166, name: "Somalia", isoCode: "SOM", isoCodeAlpha2: "SO", phone: { codeDigit: "252", code: "+252", format: "XX-XXX-XXXX", pattern: "^\d{2}-\d{3}-\d{4}$" } },
  zaf: { id: 167, name: "South Africa", isoCode: "ZAF", isoCodeAlpha2: "ZA", phone: { codeDigit: "27", code: "+27", format: "XXX XXX XXXX", pattern: "^((\+27)|(0))[0-9]{9}$" } },
  ssd: { id: 168, name: "South Sudan", isoCode: "SSD", isoCodeAlpha2: "SS", phone: { codeDigit: "211", code: "+211", format: "XX XXX XXXX", pattern: "^\d{2}\s\d{3}\s\d{4}$" } },
  lka: { id: 169, name: "Sri Lanka", isoCode: "LKA", isoCodeAlpha2: "LK", phone: { codeDigit: "94", code: "+94", format: "XX XXX XXXX", pattern: "^\d{2}\s\d{3}\s\d{4}$" } },
  sdn: { id: 170, name: "Sudan", isoCode: "SDN", isoCodeAlpha2: "SD", phone: { codeDigit: "249", code: "+249", format: "XXX XXX XXXX", pattern: "^\d{3}\s\d{3}\s\d{4}$" } },
  sur: { id: 171, name: "Suriname", isoCode: "SUR", isoCodeAlpha2: "SR", phone: { codeDigit: "597", code: "+597", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  swz: { id: 172, name: "Eswatini", isoCode: "SWZ", isoCodeAlpha2: "SZ", phone: { codeDigit: "268", code: "+268", format: "XXX XXXX", pattern: "^\d{3}\s\d{4}$" } },
  swe: { id: 173, name: "Sweden", isoCode: "SWE", isoCodeAlpha2: "SE", phone: { codeDigit: "46", code: "+46", format: "XXX-XXX XX XX", pattern: "^\d{3}-\d{3}\s\d{2}\s\d{2}$" } },
  che: { id: 174, name: "Switzerland", isoCode: "CHE", isoCodeAlpha2: "CH", phone: { codeDigit: "41", code: "+41", formatInternational: "XX XXX XX XX", format: "0XX XXX XX XX", pattern: "^0\d{2}\s\d{3}\s\d{2}\s\d{2}$" } },
  twn: { id: 175, name: "Taiwan", isoCode: "TWN", isoCodeAlpha2: "TW", phone: { codeDigit: "886", code: "+886", format: "XXX-XXXXXX", pattern: "^\d{3}-\d{6}$" } },
  tjk: { id: 176, name: "Tajikistan", isoCode: "TJK", isoCodeAlpha2: "TJ", phone: { codeDigit: "992", code: "+992", format: "XXX-XX-XX-XX", pattern: "^\d{3}-\d{2}-\d{2}-\d{2}$" } },
  tza: { id: 177, name: "Tanzania, United Republic Of", isoCode: "TZA", isoCodeAlpha2: "TZ", phone: { codeDigit: "255", code: "+255", format: "XXX-XXX-XXXX", pattern: "^\d{3}-\d{3}-\d{4}$" } },
  tha: { id: 178, name: "Thailand", isoCode: "THA", isoCodeAlpha2: "TH", phone: { codeDigit: "66", code: "+66", format: "XXX-XXXX-XXXX", pattern: "^\d{3}-\d{4}-\d{4}$" } },
  tgo: { id: 179, name: "Togo", isoCode: "TGO", isoCodeAlpha2: "TG", phone: { codeDigit: "228", code: "+228", format: "XX-XX-XXXX", pattern: "^\d{2}-\d{2}-\d{4}$" } },
  ton: { id: 180, name: "Tonga", isoCode: "TON", isoCodeAlpha2: "TO", phone: { codeDigit: "676", code: "+676", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  tto: { id: 181, name: "Trinidad And Tobago", isoCode: "TTO", isoCodeAlpha2: "TT", phone: { codeDigit: "1868", code: "+1868", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  tun: { id: 182, name: "Tunisia", isoCode: "TUN", isoCodeAlpha2: "TN", phone: { codeDigit: "216", code: "+216", format: "XX-XXX-XXX", pattern: "^\d{2}-\d{3}-\d{3}$" } },
  tkm: { id: 183, name: "Turkmenistan", isoCode: "TKM", isoCodeAlpha2: "TM", phone: { codeDigit: "993", code: "+993", format: "XX-XX-XX-XX-XX", pattern: "^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$" } },
  tuv: { id: 184, name: "Tuvalu", isoCode: "TUV", isoCodeAlpha2: "TV", phone: { codeDigit: "688", code: "+688", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  uga: { id: 185, name: "Uganda", isoCode: "UGA", isoCodeAlpha2: "UG", phone: {codeDigit: "256", code: "+256", format: "XX XXX XXXX", pattern: "^([0-9]{2})\s([0-9]{3})\s([0-9]{4})$"} },
  are: { id: 186, name: "United Arab Emirates", isoCode: "ARE", isoCodeAlpha2: "AE", phone: {codeDigit: "971", code: "+971", format: "XXXX XXX XXXX", pattern: "^\d{4}\s\d{3}\s\d{4}$"} },
  ury: { id: 187, name: "Uruguay", isoCode: "URY", isoCodeAlpha2: "UY", phone: {codeDigit: "598", code: "+598", format: "X XXX XXXX", pattern: "^[0-9]\s\d{3}\s\d{4}$"} },
  vct: { id: 188, name: "Saint Vincent And the Grenadines", isoCode: "VCT", isoCodeAlpha2: "VC", phone: { codeDigit: "1784", code: "+1784", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  lca: { id: 189, name: "Saint Lucia", isoCode: "LCA", isoCodeAlpha2: "LC", phone: { codeDigit: "1758", code: "+1758", format: "XXX-XXXX", pattern: "^\d{3}-\d{4}$" } },
  // blr: { id: 190, name: "Belarus", isoCode: "BLR", isoCodeAlpha2: "BY", phone: { codeDigit: "375", code: "+375", format: "(XX) XXX-XX-XX", pattern: "^\(\d{2}\)\s\d{3}\-\d{2}\-\d{2}$" } },
  // cod: { id: 191, name: "Democratic Republic Of The Congo", isoCode: "COD", isoCodeAlpha2: "CD", phone: { codeDigit: "243", code: "+243", format: "XX XXX XXXX", pattern: "^\d{2}\s\d{3}\s\d{4}$" } },
  // eri: { id: 192, name: "Eritrea", isoCode: "ERI", isoCodeAlpha2: "ER", phone: { codeDigit: "291", code: "+291", format: "X-XXXXX", pattern: "^\d{1}-\d{5}$" } },
  // mli: { id: 193, name: "Mali", isoCode: "MLI", isoCodeAlpha2: "ml", phone: {codeDigit: "223", code: "+223", format: "XX-XX-XXXX", pattern: "^\d{2}-\d{2}-\d{4}$"} },
  // nic: { id: 194, name: "Nicaragua", isoCode: "NIC", isoCodeAlpha2: "ni", phone: {codeDigit: "505", code: "+505", format: "XXXX-XXXX", pattern: "^\d{4}-\d{4}$"} },
  // syr: { id: 195, name: "Syria", isoCode: "SYR", isoCodeAlpha2: "SY", phone: { codeDigit: "963", code: "+963", format: "XX-XXX-XXXX", pattern: "^\d{2}-\d{3}-\d{4}$" } },
  // irn: { id: 196, name: "Iran", isoCode: "IRN", isoCodeAlpha2: "IR", phone: { codeDigit: "98", code: "+98", format: "XX XXXX XXXX", pattern: "^\d{2}\s\d{4}\s\d{4}$" } },
  // rus: { id: 197, name: "Russia", isoCode: "RUS", isoCodeAlpha2: "RU", phone: { codeDigit: "7", code: "+7", format: "XXX-XXX-XX-XX", pattern: "^\d{3}-\d{3}-\d{2}-\d{2}$" } },
}
