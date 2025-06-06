// plugins/apps/greeter/index.js
// TODO: refactor 9
module.exports = {
    name: 'greeter',
    init: async (context) => {
        context.logger.log('[greeter-plugin] Initialized.');
    },
    handle_event: (event) => {
        if (event.type === 'hello') {
            console.log(`[greeter-plugin] received hello:`, event.payload);
        }
    },
    shutdown: async () => {
        console.log('[greeter-plugin] shutdown.');
    }
};