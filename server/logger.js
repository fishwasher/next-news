const logger = {};
['log', 'info', 'warn', 'error'].forEach(it => logger[it] = console[it]);
logger.json = obj => console.log(JSON.stringify(obj, null, 2));

module.exports = logger;