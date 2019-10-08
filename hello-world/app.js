// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const XlsxPopulate = require('xlsx-populate');
var Config = require('./configs/Config');

exports.lambdaHandler = async (event, context) => {
    console.log('DEBUG: Name is ' + event.name);
    callback(null, "Hello" + event.name);
};

function migrate_to_next_version(old_version){
    // Load an template workbook
    XlsxPopulate.fromFileAsync("./public/【公式】依頼FMT(サーチ)_ver.10.1-stock.xlsm")
        .then(new_wb => {
            // Modify the new_wb
            console.log('xinchao');
        });
}
