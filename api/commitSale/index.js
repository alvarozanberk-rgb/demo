const { WebpayPlus } = require('transbank-sdk');

module.exports = async function (context, req) {
  const { token } = req.body;
  const options = {
    commerceCode: process.env.TRKB_COMMERCE_ID,
    apiKey:       process.env.TRKB_API_KEY,
    terminalId:   process.env.TRKB_TERMINAL_ID,
    environment:  WebpayPlus.Transaction.Environment.Integration
  };
  await WebpayPlus.Transaction.commit(token, options);
  context.res = { status: 200, body: { status: 'OK' } };
};
