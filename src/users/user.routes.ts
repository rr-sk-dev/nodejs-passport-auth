import Koa from 'koa';
import Router from 'koa-router';
import { RoutesConfig } from '../core/router';

export class UsersRoutes extends RoutesConfig {
  constructor() {
    super('/users');
  }

  configureRoutes(app: Koa<Koa.DefaultState, Koa.DefaultContext>): void {
    const router = new Router({ prefix: this.prefix });

    router.get('/', (ctx) => {
      ctx.body = 'users route';
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
  }
}
