import Router from 'koa-router';

const baseUrl = '/api';

export const createRouter = (module: string) => new Router({ prefix: `${baseUrl}/${module}` });
