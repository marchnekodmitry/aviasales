import * as R from 'ramda';

const findKeyOfTrueField = (obj) => {
  return R.find(
    R.flip(R.prop)(obj),
    R.keys(obj)
  )
};

export {
  findKeyOfTrueField
}