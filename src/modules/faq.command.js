
module.exports = async function(response, { input, i18n }) {
    response.output = i18n('faq');

    return response;
}

module.exports.command = 'faq';
