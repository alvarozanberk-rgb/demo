const { WebpayPlus } = require('transbank-sdk');

module.exports = async function (context, req) {
  const ventaId    = req.query.ventaId;
  const montoTotal = parseInt(req.query.montoTotal, 10);
  const options = {
    commerceCode: process.env.TRKB_COMMERCE_ID,
    apiKey:       process.env.TRKB_API_KEY,
    terminalId:   process.env.TRKB_TERMINAL_ID,
    environment:  WebpayPlus.Transaction.Environment.Integration
  };
  const resp = await WebpayPlus.Transaction.create(
    ventaId, montoTotal, '', '', options
  );
  context.res = { status: 200, body: resp };
};
