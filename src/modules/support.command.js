
module.exports = async function(response, { input, i18n }) {
    response.output = i18n('support');

    return response;
}

module.exports.command = 'support';
