import Realm from 'realm';

const provinces = {
  name: 'provinces',
  properties: {
    PROVINCE_ID: 'int?',
    PROVINCE_CODE: 'string?',
    PROVINCE_NAME: 'string',
    VALUE: 'string',
  },
};
const wards = {
  name: 'wards',
  properties: {
    WARDS_ID: 'int?',
    WARDS_NAME: 'string',
    DISTRICT_ID: 'int?',
    LOCATION_CODE: 'string',
  },
};

const districts = {
  name: 'districts',
  properties: {
    DISTRICT_ID: 'int?',
    DISTRICT_VALUE: 'string',
    DISTRICT_NAME: 'string',
    PROVINCE_ID: 'int?',
    VALUE: 'string',
  },
};

const saveProvinces = async (listProvinces: any) => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [provinces],
  });

  let task1;
  realm.write(() => {
    listProvinces?.map(e => {
      task1 = realm.create('provinces', e);
    });
  });
};

const getProvinces = () => {
  return new Promise(async (resolve, reject) => {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [provinces],
    });
    const tasks = realm.objects('provinces');
    resolve(tasks);
  });
};
const saveDistricts = async (listDistricts: any) => {
  const realm = await Realm.open({
    path: 'mydistricts',
    schema: [districts],
  });
  let districtss;
  realm.write(() => {
    listDistricts?.map(e => {
      districtss = realm.create('districts', e);
    });
  });
};

const getDistricts = () => {
  return new Promise(async (resolve, reject) => {
    const realm = await Realm.open({
      path: 'mydistricts',
      schema: [districts],
    });
    const district = realm.objects('districts');
    resolve(district);
  });
};

const saveWards = async (listWards: any) => {
  const realm = await Realm.open({
    path: 'mywards',
    schema: [wards],
  });
  let wardss;
  realm.write(() => {
    listWards?.map(e => {
      wardss = realm.create('wards', e);
    });
  });
};

const getWards = () => {
  return new Promise(async (resolve, reject) => {
    const realm = await Realm.open({
      path: 'mywards',
      schema: [wards],
    });
    const ward = realm.objects('wards');
    resolve(ward);
  });
};
export default {
  saveProvinces,
  getProvinces,
  saveDistricts,
  getDistricts,
  saveWards,
  getWards,
};
