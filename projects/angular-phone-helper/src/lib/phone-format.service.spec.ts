import { TestBed } from '@angular/core/testing';

import { PhoneFormatService } from './phone-format.service';
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {API_CONFIG_TOKEN} from "./di";
import {defaultConfig} from "./models/config.model";
import {ICountryPhoneListFormattedMock} from "./models/country-phone.mock.model";
import {countriesDictionary} from "./helper/data.helper";
import {getMockPhone} from "./helper/phone.helper";

describe('PhoneFormatService', () => {
  let service: PhoneFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhoneFormatPipe,
        PhoneFormatService,
        { provide: API_CONFIG_TOKEN, useValue: defaultConfig }
      ]
    });
    service = TestBed.inject(PhoneFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  Object.keys(countriesDictionary).forEach(name => {
    let testData: ICountryPhoneListFormattedMock[] = [];
    if (!!countriesDictionary[name]) {
      testData.push({
        id: `${countriesDictionary[name].isoCode}-${countriesDictionary[name].id}-1`,
        phone: getMockPhone(countriesDictionary[name].phone.format, false),
        expected: true,
        countryHelper: countriesDictionary[name],
      });

      let phone = countriesDictionary[name].id === 1 ?
        `${getMockPhone(countriesDictionary[name].phone.format, true)}` :
        `${countriesDictionary[name].phone.codeDigit} ${getMockPhone(countriesDictionary[name].phone.format, true)}`

      testData.push({
        id: `${countriesDictionary[name].isoCode}-${countriesDictionary[name].id}-2`,
        phone: `+${phone}`.replace(/^(\++)+/g, '+'),
        expected: true,
        countryHelper: countriesDictionary[name],
      });

      testData.push({
        id: `${countriesDictionary[name].isoCode}-${countriesDictionary[name].id}-3`,
        phone: `${phone}`.replace(/^(\++)+/g, '+'),
        expected: true,
        countryHelper: countriesDictionary[name],
      });

      testData.push({
        id: `${countriesDictionary[name].isoCode}-${countriesDictionary[name].id}-4`,
        phone: `+1${phone}`.replace(/^(\++)+/g, '+'),
        expected: false,
        countryHelper: countriesDictionary[name],
      });

    }

    testData.forEach((item ,index) => {
      let message = `${item.countryHelper.phone.code} ${item.countryHelper.phone.format}:${item.countryHelper.name}:${item.id} check phone ${item.phone} to be ${item.expected.toString()}`;
      it('isFormatted ' + message, () => {
        let result = service.isFormatted(item.phone, item.countryHelper.isoCode);
        expect(result).toEqual(item.expected);
        // console.log(`PASSED: ${message}`);
      });

      it('isCustomMethod ' + message, () => {
        let result = false;
        switch (item.countryHelper.id) {
          case countriesDictionary.international.id: result = service.isInternationalFormatted(item.phone); break;
          case countriesDictionary.usa.id: result = service.isUnitedStatesFormatted(item.phone); break;
          case countriesDictionary.can.id: result = service.isCanadaFormatted(item.phone); break;
          case countriesDictionary.gbr.id: result = service.isUnitedKingdomFormatted(item.phone); break;
          case countriesDictionary.fra.id: result = service.isFranceFormatted(item.phone); break;
          case countriesDictionary.deu.id: result = service.isGermanyFormatted(item.phone); break;
          case countriesDictionary.ita.id: result = service.isItalyFormatted(item.phone); break;
          case countriesDictionary.pol.id: result = service.isPolandFormatted(item.phone); break;
          case countriesDictionary.ukr.id: result = service.isUkraineFormatted(item.phone); break;
          case countriesDictionary.mda.id: result = service.isMoldovaFormatted(item.phone); break;
          case countriesDictionary.grc.id: result = service.isGreeceFormatted(item.phone); break;
          case countriesDictionary.tur.id: result = service.isTurkeyFormatted(item.phone); break;
          case countriesDictionary.ind.id: result = service.isIndiaFormatted(item.phone); break;
          case countriesDictionary.chn.id: result = service.isChinaFormatted(item.phone); break;
          case countriesDictionary.idn.id: result = service.isIndonesiaFormatted(item.phone); break;
          case countriesDictionary.phl.id: result = service.isPhilippinesFormatted(item.phone); break;
          case countriesDictionary.aus.id: result = service.isAustraliaFormatted(item.phone); break;
          case countriesDictionary.bra.id: result = service.isBrazilFormatted(item.phone); break;
          case countriesDictionary.arg.id: result = service.isArgentinaFormatted(item.phone); break;
          case countriesDictionary.mex.id: result = service.isMexicoFormatted(item.phone); break;
          case countriesDictionary.esp.id: result = service.isSpainFormatted(item.phone); break;
          case countriesDictionary.cze.id: result = service.isCzechRepublicFormatted(item.phone); break;
          case countriesDictionary.per.id: result = service.isPeruFormatted(item.phone); break;
          case countriesDictionary.jpn.id: result = service.isJapanFormatted(item.phone); break;
          case countriesDictionary.kor.id: result = service.isSouthKoreaFormatted(item.phone); break;
          case countriesDictionary.aut.id: result = service.isAustriaFormatted(item.phone); break;
          case countriesDictionary.aze.id: result = service.isAzerbaijanFormatted(item.phone); break;
          case countriesDictionary.alb.id: result = service.isAlbaniaFormatted(item.phone); break;
          case countriesDictionary.dza.id: result = service.isAlgeriaFormatted(item.phone); break;
          case countriesDictionary.ago.id: result = service.isAngolaFormatted(item.phone); break;
          case countriesDictionary.and.id: result = service.isAndorraFormatted(item.phone); break;
          case countriesDictionary.atg.id: result = service.isAntiguaAndBarbudaFormatted(item.phone); break;
          case countriesDictionary.arm.id: result = service.isArmeniaFormatted(item.phone); break;
          case countriesDictionary.afg.id: result = service.isAfghanistanFormatted(item.phone); break;
          case countriesDictionary.bhs.id: result = service.isBahamasFormatted(item.phone); break;
          case countriesDictionary.bgd.id: result = service.isBangladeshFormatted(item.phone); break;
          case countriesDictionary.brb.id: result = service.isBarbadosFormatted(item.phone); break;
          case countriesDictionary.bhr.id: result = service.isBahrainFormatted(item.phone); break;
          case countriesDictionary.blz.id: result = service.isBelizeFormatted(item.phone); break;
          case countriesDictionary.bel.id: result = service.isBelgiumFormatted(item.phone); break;
          case countriesDictionary.ben.id: result = service.isBeninFormatted(item.phone); break;
          case countriesDictionary.bgr.id: result = service.isBulgariaFormatted(item.phone); break;
          case countriesDictionary.bol.id: result = service.isBoliviaFormatted(item.phone); break;
          case countriesDictionary.bih.id: result = service.isBosniaAndHerzegovinaFormatted(item.phone); break;
          case countriesDictionary.bwa.id: result = service.isBotswanaFormatted(item.phone); break;
          case countriesDictionary.brn.id: result = service.isBruneiFormatted(item.phone); break;
          case countriesDictionary.bfa.id: result = service.isBurkinaFasoFormatted(item.phone); break;
          case countriesDictionary.bdi.id: result = service.isBurundiFormatted(item.phone); break;
          case countriesDictionary.btn.id: result = service.isBhutanFormatted(item.phone); break;
          case countriesDictionary.vut.id: result = service.isVanuatuFormatted(item.phone); break;
          case countriesDictionary.hun.id: result = service.isHungaryFormatted(item.phone); break;
          case countriesDictionary.ven.id: result = service.isVenezuelaFormatted(item.phone); break;
          case countriesDictionary.tls.id: result = service.isEastTimorFormatted(item.phone); break;
          case countriesDictionary.vnm.id: result = service.isVietnamFormatted(item.phone); break;
          case countriesDictionary.gab.id: result = service.isGabonFormatted(item.phone); break;
          case countriesDictionary.hti.id: result = service.isHaitiFormatted(item.phone); break;
          case countriesDictionary.guy.id: result = service.isGuyanaFormatted(item.phone); break;
          case countriesDictionary.gmb.id: result = service.isGambiaFormatted(item.phone); break;
          case countriesDictionary.gha.id: result = service.isGhanaFormatted(item.phone); break;
          case countriesDictionary.htm.id: result = service.isGuatemalaFormatted(item.phone); break;
          case countriesDictionary.gin.id: result = service.isGuineaFormatted(item.phone); break;
          case countriesDictionary.gnb.id: result = service.isGuineaBissauFormatted(item.phone); break;
          case countriesDictionary.hnd.id: result = service.isHondurasFormatted(item.phone); break;
          case countriesDictionary.grd.id: result = service.isGrenadaFormatted(item.phone); break;
          case countriesDictionary.geo.id: result = service.isGeorgiaFormatted(item.phone); break;
          case countriesDictionary.dnk.id: result = service.isDenmarkFormatted(item.phone); break;
          case countriesDictionary.dji.id: result = service.isDjiboutiFormatted(item.phone); break;
          case countriesDictionary.dma.id: result = service.isDominicaFormatted(item.phone); break;
          case countriesDictionary.dom.id: result = service.isDominicanRepublicFormatted(item.phone); break;
          case countriesDictionary.egy.id: result = service.isEgyptFormatted(item.phone); break;
          case countriesDictionary.zmb.id: result = service.isZambiaFormatted(item.phone); break;
          case countriesDictionary.zwe.id: result = service.isZimbabweFormatted(item.phone); break;
          case countriesDictionary.isr.id: result = service.isIsraelFormatted(item.phone); break;
          case countriesDictionary.cpv.id: result = service.isCapeVerdeFormatted(item.phone); break;
          case countriesDictionary.khm.id: result = service.isCambodiaFormatted(item.phone); break;
          case countriesDictionary.cmr.id: result = service.isCameroonFormatted(item.phone); break;
          case countriesDictionary.caf.id: result = service.isCentralAfricanRepublicFormatted(item.phone); break;
          case countriesDictionary.tcd.id: result = service.isChadFormatted(item.phone); break;
          case countriesDictionary.chl.id: result = service.isChileFormatted(item.phone); break;
          case countriesDictionary.col.id: result = service.isColombiaFormatted(item.phone); break;
          case countriesDictionary.com.id: result = service.isComorosFormatted(item.phone); break;
          case countriesDictionary.cog.id: result = service.isCongoFormatted(item.phone); break;
          case countriesDictionary.cri.id: result = service.isCostaRicaFormatted(item.phone); break;
          case countriesDictionary.civ.id: result = service.isIvoryCoastFormatted(item.phone); break;
          case countriesDictionary.hrv.id: result = service.isCroatiaFormatted(item.phone); break;
          case countriesDictionary.cub.id: result = service.isCubaFormatted(item.phone); break;
          case countriesDictionary.cyp.id: result = service.isCyprusFormatted(item.phone); break;
          case countriesDictionary.ecu.id: result = service.isEcuadorFormatted(item.phone); break;
          case countriesDictionary.slv.id: result = service.isElSalvadorFormatted(item.phone); break;
          case countriesDictionary.gnq.id: result = service.isEquatorialGuineaFormatted(item.phone); break;
          case countriesDictionary.est.id: result = service.isEstoniaFormatted(item.phone); break;
          case countriesDictionary.eth.id: result = service.isEthiopiaFormatted(item.phone); break;
          case countriesDictionary.fji.id: result = service.isFijiFormatted(item.phone); break;
          case countriesDictionary.fin.id: result = service.isFinlandFormatted(item.phone); break;
          case countriesDictionary.isl.id: result = service.isIcelandFormatted(item.phone); break;
          case countriesDictionary.irq.id: result = service.isIraqFormatted(item.phone); break;
          case countriesDictionary.irl.id: result = service.isIrelandFormatted(item.phone); break;
          case countriesDictionary.jam.id: result = service.isJamaicaFormatted(item.phone); break;
          case countriesDictionary.jor.id: result = service.isJordanFormatted(item.phone); break;
          case countriesDictionary.kaz.id: result = service.isKazakhstanFormatted(item.phone); break;
          case countriesDictionary.ken.id: result = service.isKenyaFormatted(item.phone); break;
          case countriesDictionary.kir.id: result = service.isKiribatiFormatted(item.phone); break;
          case countriesDictionary.prk.id: result = service.isNorthKoreaFormatted(item.phone); break;
          case countriesDictionary.kwt.id: result = service.isKuwaitFormatted(item.phone); break;
          case countriesDictionary.kgz.id: result = service.isKyrgyzstanFormatted(item.phone); break;
          case countriesDictionary.lao.id: result = service.isLaosFormatted(item.phone); break;
          case countriesDictionary.lva.id: result = service.isLatviaFormatted(item.phone); break;
          case countriesDictionary.lbn.id: result = service.isLebanonFormatted(item.phone); break;
          case countriesDictionary.lso.id: result = service.isLesothoFormatted(item.phone); break;
          case countriesDictionary.lbr.id: result = service.isLiberiaFormatted(item.phone); break;
          case countriesDictionary.lby.id: result = service.isLibyaFormatted(item.phone); break;
          case countriesDictionary.lie.id: result = service.isLiechtensteinFormatted(item.phone); break;
          case countriesDictionary.ltu.id: result = service.isLithuaniaFormatted(item.phone); break;
          case countriesDictionary.lux.id: result = service.isLuxembourgFormatted(item.phone); break;
          case countriesDictionary.mkd.id: result = service.isNorthMacedoniaFormatted(item.phone); break;
          case countriesDictionary.mdg.id: result = service.isMadagascarFormatted(item.phone); break;
          case countriesDictionary.mwi.id: result = service.isMalawiFormatted(item.phone); break;
          case countriesDictionary.mys.id: result = service.isMalaysiaFormatted(item.phone); break;
          case countriesDictionary.mdv.id: result = service.isMaldivesFormatted(item.phone); break;
          case countriesDictionary.mlt.id: result = service.isMaltaFormatted(item.phone); break;
          case countriesDictionary.mhl.id: result = service.isMarshallIslandsFormatted(item.phone); break;
          case countriesDictionary.mrt.id: result = service.isMauritaniaFormatted(item.phone); break;
          case countriesDictionary.mus.id: result = service.isMauritiusFormatted(item.phone); break;
          case countriesDictionary.fsm.id: result = service.isMicronesiaFederatedStatesOfFormatted(item.phone); break;
          case countriesDictionary.mco.id: result = service.isMonacoFormatted(item.phone); break;
          case countriesDictionary.mng.id: result = service.isMongoliaFormatted(item.phone); break;
          case countriesDictionary.mne.id: result = service.isMontenegroFormatted(item.phone); break;
          case countriesDictionary.mar.id: result = service.isMoroccoFormatted(item.phone); break;
          case countriesDictionary.moz.id: result = service.isMozambiqueFormatted(item.phone); break;
          case countriesDictionary.mmr.id: result = service.isMyanmarFormatted(item.phone); break;
          case countriesDictionary.nam.id: result = service.isNamibiaFormatted(item.phone); break;
          case countriesDictionary.nru.id: result = service.isNauruFormatted(item.phone); break;
          case countriesDictionary.npl.id: result = service.isNepalFormatted(item.phone); break;
          case countriesDictionary.nld.id: result = service.isNetherlandsFormatted(item.phone); break;
          case countriesDictionary.nzl.id: result = service.isNewZealandFormatted(item.phone); break;
          case countriesDictionary.ner.id: result = service.isNigerFormatted(item.phone); break;
          case countriesDictionary.nga.id: result = service.isNigeriaFormatted(item.phone); break;
          case countriesDictionary.niu.id: result = service.isNiueFormatted(item.phone); break;
          case countriesDictionary.nor.id: result = service.isNorwayFormatted(item.phone); break;
          case countriesDictionary.omn.id: result = service.isOmanFormatted(item.phone); break;
          case countriesDictionary.pak.id: result = service.isPakistanFormatted(item.phone); break;
          case countriesDictionary.plw.id: result = service.isPalauFormatted(item.phone); break;
          case countriesDictionary.pan.id: result = service.isPanamaFormatted(item.phone); break;
          case countriesDictionary.png.id: result = service.isPapuaNewGuineaFormatted(item.phone); break;
          case countriesDictionary.pry.id: result = service.isParaguayFormatted(item.phone); break;
          case countriesDictionary.prt.id: result = service.isPortugalFormatted(item.phone); break;
          case countriesDictionary.qat.id: result = service.isQatarFormatted(item.phone); break;
          case countriesDictionary.rou.id: result = service.isRomaniaFormatted(item.phone); break;
          case countriesDictionary.rwa.id: result = service.isRwandaFormatted(item.phone); break;
          case countriesDictionary.wsm.id: result = service.isSamoaFormatted(item.phone); break;
          case countriesDictionary.smr.id: result = service.isSanMarinoFormatted(item.phone); break;
          case countriesDictionary.stp.id: result = service.isSaoTomeAndPrincipeFormatted(item.phone); break;
          case countriesDictionary.sau.id: result = service.isSaudiArabiaFormatted(item.phone); break;
          case countriesDictionary.sen.id: result = service.isSenegalFormatted(item.phone); break;
          case countriesDictionary.srb.id: result = service.isSerbiaFormatted(item.phone); break;
          case countriesDictionary.syc.id: result = service.isSeychellesFormatted(item.phone); break;
          case countriesDictionary.sle.id: result = service.isSierraLeoneFormatted(item.phone); break;
          case countriesDictionary.sgp.id: result = service.isSingaporeFormatted(item.phone); break;
          case countriesDictionary.svk.id: result = service.isSlovakiaFormatted(item.phone); break;
          case countriesDictionary.svn.id: result = service.isSloveniaFormatted(item.phone); break;
          case countriesDictionary.slb.id: result = service.isSolomonIslandsFormatted(item.phone); break;
          case countriesDictionary.som.id: result = service.isSomaliaFormatted(item.phone); break;
          case countriesDictionary.zaf.id: result = service.isSouthAfricaFormatted(item.phone); break;
          case countriesDictionary.ssd.id: result = service.isSouthSudanFormatted(item.phone); break;
          case countriesDictionary.lka.id: result = service.isSriLankaFormatted(item.phone); break;
          case countriesDictionary.sdn.id: result = service.isSudanFormatted(item.phone); break;
          case countriesDictionary.sur.id: result = service.isSurinameFormatted(item.phone); break;
          case countriesDictionary.swz.id: result = service.isEswatiniFormatted(item.phone); break;
          case countriesDictionary.swe.id: result = service.isSwedenFormatted(item.phone); break;
          case countriesDictionary.che.id: result = service.isSwitzerlandFormatted(item.phone); break;
          case countriesDictionary.twn.id: result = service.isTaiwanFormatted(item.phone); break;
          case countriesDictionary.tjk.id: result = service.isTajikistanFormatted(item.phone); break;
          case countriesDictionary.tza.id: result = service.isTanzaniaUnitedRepublicOfFormatted(item.phone); break;
          case countriesDictionary.tha.id: result = service.isThailandFormatted(item.phone); break;
          case countriesDictionary.tgo.id: result = service.isTogoFormatted(item.phone); break;
          case countriesDictionary.ton.id: result = service.isTongaFormatted(item.phone); break;
          case countriesDictionary.tto.id: result = service.isTrinidadAndTobagoFormatted(item.phone); break;
          case countriesDictionary.tun.id: result = service.isTunisiaFormatted(item.phone); break;
          case countriesDictionary.tkm.id: result = service.isTurkmenistanFormatted(item.phone); break;
          case countriesDictionary.tuv.id: result = service.isTuvaluFormatted(item.phone); break;
          case countriesDictionary.uga.id: result = service.isUgandaFormatted(item.phone); break;
          case countriesDictionary.are.id: result = service.isUnitedArabEmiratesFormatted(item.phone); break;
          case countriesDictionary.ury.id: result = service.isUruguayFormatted(item.phone); break;
          case countriesDictionary.uzb.id: result = service.isUzbekistanFormatted(item.phone); break;
          case countriesDictionary.yem.id: result = service.isYemenFormatted(item.phone); break;
          case countriesDictionary.kna.id: result = service.isSaintKittsAndNevisFormatted(item.phone); break;
          case countriesDictionary.lca.id: result = service.isSaintLuciaFormatted(item.phone); break;
          case countriesDictionary.vct.id: result = service.isSaintVincentAndtheGrenadinesFormatted(item.phone); break;
          // case countriesDictionary.blr.id: result = service.isBelarusFormatted(item.phone); break;
          // case countriesDictionary.cod.id: result = service.isDemocraticRepublicOfTheCongoFormatted(item.phone); break;
          // case countriesDictionary.eri.id: result = service.isEritreaFormatted(item.phone); break;
          // case countriesDictionary.mli.id: result = service.isMaliFormatted(item.phone); break;
          // case countriesDictionary.nic.id: result = service.isNicaraguaFormatted(item.phone); break;
          // case countriesDictionary.rus.id: result = service.isRussiaFormatted(item.phone); break;
          // case countriesDictionary.syr.id: result = service.isSyriaFormatted(item.phone); break;
          // case countriesDictionary.irn.id: result = service.isIranFormatted(item.phone); break;
        }
        expect(result).toEqual(item.expected);
        // console.log(`PASSED: ${message}`);
      });
    });
  });
});
