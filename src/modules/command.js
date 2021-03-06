const checkCommand = async function(command, response) {
    const [expectedCmd, ...expectedArgs] = command.split(' ');
    const {cmd, args} = response;

    if (cmd !== expectedCmd) {
        return null;
    }

    let newArgs = {};
    for (let i = 0; i < expectedArgs.length; i++) {
        newArgs[expectedArgs[i]] = args[i];
    }
    response.args = newArgs;

    return response;
};

module.exports = function(command) {
    return async function(response, options) {
        return await checkCommand(command, response, options);
    }
};
