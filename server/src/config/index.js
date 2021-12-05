function getBool(s) {
  return s === 'true';
}

function getInt(v) {
  return parseInt(v, 10);
}

function getFloat(v) {
  return parseFloat(v);
}

const port = getInt(process.env.PORT) || 3003;

module.exports = {
  ws: {
    port,
  }
};
