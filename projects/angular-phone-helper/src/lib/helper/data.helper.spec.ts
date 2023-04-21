import {countriesDictionary, countriesISOCodes} from "./data.helper";

describe('countriesDictionary', () => {

  it('All data IDs are unique', () => {
    const ids: string[] = [];
    Object.keys(countriesDictionary).forEach(name => {
      ids.push(String(countriesDictionary[name].id))
    });

    const nonUniqueObjects = ids.filter((obj, index, array) => {
      return array.findIndex(o => o === obj) !== index;
    });

    const nonUniqueIds = nonUniqueObjects.map(obj => obj);
    // if (nonUniqueObjects.length > 0) {
    //   console.log(`phone-format-pipe IDs ${nonUniqueIds.join(', ')} are not unique.`);
    // }
    expect(nonUniqueIds.length === 0).toBeTrue();
  });

  it('All data ISOs are unique', () => {
    const ids: string[] = [];
    // let str = '';
    Object.keys(countriesDictionary).forEach(name => {
      ids.push(countriesDictionary[name].isoCode!);
      // str +=
      //   countriesDictionary[name].name + ', '
      // `case countriesDictionary.${name}.id: result = service.is${countriesDictionary[name].name?.split(' ').join('')}Formatted(item.phone); break;\n`;
      // `public is${countriesDictionary[name].name?.split(' ').join('')}Formatted(phone: string | null | undefined): boolean { return this.isMatchedWithHelper(phone, countriesDictionary.${name}); }\n`;
      // `| \`${countriesDictionary[name].id}\` | \`${countriesDictionary[name].isoCode}\` | \`${countriesDictionary[name].phone.code}\` | \`${countriesDictionary[name].phone.format}\` | \`is${countriesDictionary[name].name?.split(' ').join('')}Formatted\` | \n`
    });
    // console.log(str);

    const nonUniqueObjects = ids.filter((obj, index, array) => {
      return array.findIndex(o => o === obj) !== index;
    });

    const nonUniqueIds = nonUniqueObjects.map(obj => obj);
    // if (nonUniqueObjects.length > 0) {
    //   console.log(`phone-format-pipe IDs ${nonUniqueIds.join(', ')} are not unique.`);
    // }

    expect(nonUniqueIds.length === 0).toBeTrue();
  });

  it('All ISO codes in dictionary', () => {
    const dictionaryISOCodes: string[] = [];
    Object.keys(countriesDictionary).forEach(name => {
      dictionaryISOCodes.push(countriesDictionary[name].isoCode!)
    });

    let resultArray = countriesISOCodes
      .filter(item => !['BLR','COD','ERI','MLI','NIC','RUS','SYR','IRN'].includes(item))
      .filter(x => !dictionaryISOCodes.includes(x));

    // if (resultArray.length > 0) {
    //   console.log(`Countries to add: ${resultArray.length}`)
    //   console.log(resultArray);
    // }

    expect(resultArray.length > 0).toBeFalse();
  });

  xit('All ISO codes in dictionary', () => {
    const dictionaryISOCodes: string[] = [];
    Object.keys(countriesDictionary).forEach(name => {
      dictionaryISOCodes.push(countriesDictionary[name].isoCode!)
    });

    let resultArray = ['BLR','COD','ERI','MLI','NIC','RUS','SYR','IRN']
      .filter(x => dictionaryISOCodes.includes(x));

    // if (resultArray.length > 0) {
    //   console.log(`Countries to exclude: ${resultArray.length}`)
    //   console.log(resultArray);
    // }

    expect(resultArray.length > 0).toBeFalse();
  });
});
