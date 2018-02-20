import routes from './config';

const routesFn = app => 
    Object.keys(routes).forEach(key => {
        const params = routes[key];
        const method = key.split(' ')[0].toLowerCase();
        const route = key.split(' ')[1].toLowerCase();
        params.unshift(route);
        return app[method].apply(app, params);
    })



export default routesFn;