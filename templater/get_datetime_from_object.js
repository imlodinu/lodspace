// this is to prevent parsing basic numbers as dates
function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
function isValidNumber(num) {
  return (Number.isInteger(num) && num >= 1) || !isNumeric(num);
}

module.exports = (obj) => {
  if (obj.position) {
    delete obj.position;
  }
  for (let key in obj) {
    try {
      let temp = obj[key];
      if (!isValidNumber(temp) && moment(Date.parse(temp)).isValid()) {
        return temp;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return;
};
