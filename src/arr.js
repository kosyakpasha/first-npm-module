import array from 'lodash/array';

export const arrModule = (arr, ...arg) => {
  return array.concat(arr, arg);
};
