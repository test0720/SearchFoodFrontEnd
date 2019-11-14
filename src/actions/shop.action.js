import { shopService, externalService } from '../services';

export const shopActions = {
  getCountry, getDistrict, addressToLatLong, getStoreType
}

const GET_COUNTY_SUCCESS = 'GET_COUNTY_SUCCESS';
const GET_COUNTY_FAILURE = 'GET_COUNTY_FAILURE';
const GET_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
const GET_DISTRICT_FAILURE = 'GET_DISTRICT_FAILURE';
const GET_LAT_LONG_SUCCESS = 'GET_LAT_LONG_SUCCESS';
const GET_LAT_LONG_FAILURE = 'GET_LAT_LONG_FAILURE';
const GET_STORE_TYPE_SUCCESS = 'GET_STORE_TYPE_SUCCESS';
const GET_STORE_TYPE_FAILURE = 'GET_STORE_TYPE_FAILURE';

function getCountry() {
  return dispatch => {
    externalService.getCounty()
      .then(
        data => dispatch({ type: GET_COUNTY_SUCCESS, county: data.countyItem }),
        error => dispatch({ type: GET_COUNTY_FAILURE, error })
      );
  }
}

function getDistrict(cityId) {
  return dispatch => {
    externalService.getDistrict(cityId)
      .then(
        data => dispatch({ type: GET_DISTRICT_SUCCESS, district: data.townItem }),
        error => dispatch({ type: GET_DISTRICT_FAILURE, error })
      );
  }
}

function addressToLatLong(address) {
  return dispatch => {
    externalService.addressToLatLong(address)
      .then(
        data => dispatch({ type: GET_LAT_LONG_SUCCESS, latLong: data }),
        error => dispatch({ type: GET_LAT_LONG_FAILURE, error })
      );
  }
}

function getStoreType() {
  return dispatch => {
    shopService.getStoreType()
      .then(
        data => dispatch({ type: GET_STORE_TYPE_SUCCESS, storeType: data.data }),
        error => dispatch({ type: GET_STORE_TYPE_FAILURE, error })
      )
  }
}