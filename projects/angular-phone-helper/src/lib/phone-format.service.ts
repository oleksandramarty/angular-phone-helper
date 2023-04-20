import {Inject, Injectable, Optional} from '@angular/core';
import {API_CONFIG_TOKEN} from "./di";
import {ApiConfig} from "./models/config.model";
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {countriesDictionary} from "./helper/data.helper";
import {ICountryModel} from "./models/country.model";
import {getCountryHelperByCountryCode} from "./helper/phone.helper";

@Injectable({
  providedIn: 'root'
})
export class PhoneFormatService {

  constructor(
    @Optional() @Inject(API_CONFIG_TOKEN) private readonly config: ApiConfig | null,
    private readonly phoneFormatPipe: PhoneFormatPipe,
    ) { }

  public isFormatted(phone: string | null | undefined, countryIsoCode: string | null | undefined): boolean {
    if (!phone || !countryIsoCode) {
      return false;
    }

    const countryHelper = getCountryHelperByCountryCode(countryIsoCode, this.config?.defaultCountryIsoCode);

    return this.isMatchedWithHelper(phone, countryHelper);
  }

  private isMatchedWithHelper(phone: string | null | undefined, countryHelper: ICountryModel): boolean {
    if (!phone) {
      return false;
    }

    const phoneWithoutCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: false });
    const phoneWithCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: true });

    const arrPhones = [
      `+${phone}`.replace(/^(\++)+/g, '+'),
      phone,
      `${countryHelper.phone.code} ${phone}`,
    ];

    return arrPhones.filter((value, index, self) => {
      return self.indexOf(value) === index;
    }).findIndex(phone => phone === phoneWithoutCode || phone === phoneWithCode) > -1;
  }

  public isInternationalFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.international); }
  public isUnitedStatesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.usa); }
  public isCanadaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.can); }
  public isUnitedKingdomFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gbr); }
  public isFranceFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.fra); }
  public isGermanyFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.deu); }
  public isItalyFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ita); }
  public isPolandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.pol); }
  public isUkraineFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ukr); }
  public isMoldovaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mda); }
  public isGreeceFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.grc); }
  public isTurkeyFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tur); }
  public isIndiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ind); }
  public isChinaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.chn); }
  public isIndonesiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.idn); }
  public isPhilippinesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.phl); }
  public isAustraliaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.aus); }
  public isBrazilFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bra); }
  public isArgentinaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.arg); }
  public isMexicoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mex); }
  public isSpainFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.esp); }
  public isCzechRepublicFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cze); }
  public isPeruFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.per); }
  public isJapanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.jpn); }
  public isSouthKoreaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kor); }
  public isAustriaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.aut); }
  public isAzerbaijanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.aze); }
  public isAlbaniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.alb); }
  public isAlgeriaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.dza); }
  public isAngolaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ago); }
  public isAndorraFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.and); }
  public isAntiguaAndBarbudaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.atg); }
  public isArmeniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.arm); }
  public isAfghanistanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.afg); }
  public isBahamasFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bhs); }
  public isBangladeshFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bgd); }
  public isBarbadosFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.brb); }
  public isBahrainFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bhr); }
  public isBelizeFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.blz); }
  public isBelgiumFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bel); }
  public isBeninFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ben); }
  public isBulgariaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bgr); }
  public isBoliviaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bol); }
  public isBosniaAndHerzegovinaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bih); }
  public isBotswanaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bwa); }
  public isBruneiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.brn); }
  public isBurkinaFasoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bfa); }
  public isBurundiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.bdi); }
  public isBhutanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.btn); }
  public isVanuatuFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.vut); }
  public isHungaryFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.hun); }
  public isVenezuelaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ven); }
  public isEastTimorFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tls); }
  public isVietnamFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.vnm); }
  public isGabonFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gab); }
  public isHaitiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.hti); }
  public isGuyanaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.guy); }
  public isGambiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gmb); }
  public isGhanaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gha); }
  public isGuatemalaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.htm); }
  public isGuineaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gin); }
  public isGuineaBissauFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gnb); }
  public isHondurasFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.hnd); }
  public isGrenadaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.grd); }
  public isGeorgiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.geo); }
  public isDenmarkFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.dnk); }
  public isDjiboutiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.dji); }
  public isDominicaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.dma); }
  public isDominicanRepublicFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.dom); }
  public isEgyptFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.egy); }
  public isZambiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.zmb); }
  public isZimbabweFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.zwe); }
  public isIsraelFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.isr); }
  public isCapeVerdeFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cpv); }
  public isCambodiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.khm); }
  public isCameroonFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cmr); }
  public isCentralAfricanRepublicFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.caf); }
  public isChadFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tcd); }
  public isChileFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.chl); }
  public isColombiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.col); }
  public isComorosFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.com); }
  public isCongoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cog); }
  public isCostaRicaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cri); }
  public isIvoryCoastFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.civ); }
  public isCroatiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.hrv); }
  public isCubaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cub); }
  public isCyprusFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cyp); }
  public isEcuadorFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ecu); }
  public isElSalvadorFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.slv); }
  public isEquatorialGuineaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.gnq); }
  public isEstoniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.est); }
  public isEthiopiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.eth); }
  public isFijiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.fji); }
  public isFinlandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.fin); }
  public isIcelandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.isl); }
  public isIraqFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.irq); }
  public isIrelandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.irl); }
  public isJamaicaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.jam); }
  public isJordanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.jor); }
  public isKazakhstanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kaz); }
  public isKenyaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ken); }
  public isKiribatiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kir); }
  public isNorthKoreaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.prk); }
  public isKuwaitFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kwt); }
  public isKyrgyzstanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kgz); }
  public isLaosFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lao); }
  public isLatviaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lva); }
  public isLebanonFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lbn); }
  public isLesothoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lso); }
  public isLiberiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lbr); }
  public isLibyaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lby); }
  public isLiechtensteinFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lie); }
  public isLithuaniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ltu); }
  public isLuxembourgFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lux); }
  public isNorthMacedoniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mkd); }
  public isMadagascarFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mdg); }
  public isMalawiFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mwi); }
  public isMalaysiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mys); }
  public isMaldivesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mdv); }
  public isMaltaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mlt); }
  public isMarshallIslandsFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mhl); }
  public isMauritaniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mrt); }
  public isMauritiusFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mus); }
  public isMicronesiaFederatedStatesOfFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.fsm); }
  public isMonacoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mco); }
  public isMongoliaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mng); }
  public isMontenegroFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mne); }
  public isMoroccoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mar); }
  public isMozambiqueFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.moz); }
  public isMyanmarFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mmr); }
  public isNamibiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nam); }
  public isNauruFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nru); }
  public isNepalFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.npl); }
  public isNetherlandsFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nld); }
  public isNewZealandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nzl); }
  public isNigerFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ner); }
  public isNigeriaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nga); }
  public isNiueFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.niu); }
  public isNorwayFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nor); }
  public isOmanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.omn); }
  public isPakistanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.pak); }
  public isPalauFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.plw); }
  public isPanamaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.pan); }
  public isPapuaNewGuineaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.png); }
  public isParaguayFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.pry); }
  public isPortugalFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.prt); }
  public isQatarFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.qat); }
  public isRomaniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.rou); }
  public isRwandaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.rwa); }
  public isSamoaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.wsm); }
  public isSanMarinoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.smr); }
  public isSaoTomeAndPrincipeFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.stp); }
  public isSaudiArabiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sau); }
  public isSenegalFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sen); }
  public isSerbiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.srb); }
  public isSeychellesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.syc); }
  public isSierraLeoneFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sle); }
  public isSingaporeFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sgp); }
  public isSlovakiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.svk); }
  public isSloveniaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.svn); }
  public isSolomonIslandsFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.slb); }
  public isSomaliaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.som); }
  public isSouthAfricaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.zaf); }
  public isSouthSudanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ssd); }
  public isSriLankaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lka); }
  public isSudanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sdn); }
  public isSurinameFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.sur); }
  public isEswatiniFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.swz); }
  public isSwedenFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.swe); }
  public isSwitzerlandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.che); }
  public isTaiwanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.twn); }
  public isTajikistanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tjk); }
  public isTanzaniaUnitedRepublicOfFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tza); }
  public isThailandFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tha); }
  public isTogoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tgo); }
  public isTongaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ton); }
  public isTrinidadAndTobagoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tto); }
  public isTunisiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tun); }
  public isTurkmenistanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tkm); }
  public isTuvaluFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.tuv); }
  public isUgandaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.uga); }
  public isUnitedArabEmiratesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.are); }
  public isUruguayFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.ury); }
  public isUzbekistanFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.uzb); }
  public isYemenFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.yem); }
  public isSaintKittsAndNevisFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.kna); }
  public isSaintLuciaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.lca); }
  public isSaintVincentAndtheGrenadinesFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.vct); }
  // public isBelarusFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.blr); }
  // public isDemocraticRepublicOfTheCongoFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.cod); }
  // public isEritreaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.eri); }
  // public isMaliFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.mli); }
  // public isNicaraguaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.nic); }
  // public isRussiaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.rus); }
  // public isSyriaFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.syr); }
  // public isIranFormatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.irn); }
}
