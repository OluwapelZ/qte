import * as checkHealth from './health.controller';

/**
 * Health Check APIs
 * @param {App Instance} app 
 */
const healthRoutes = (app) => {
    app.get('/health', checkHealth.health)
}

export default healthRoutes;
