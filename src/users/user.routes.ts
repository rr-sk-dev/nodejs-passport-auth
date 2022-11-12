import Koa from 'koa';
import Router from 'koa-router';
import { RoutesConfig } from '../core/router';
import { createUser, getUsers } from './users.controller';

export class UsersRoutes extends RoutesConfig {
  constructor() {
    super('users');
  }

  configureRoutes(app: Koa<Koa.DefaultState, Koa.DefaultContext>): void {
    const router = new Router({ prefix: this.prefix });

    router.get('/', getUsers);
    router.post('/', createUser);

    app.use(router.routes());
    app.use(router.allowedMethods());
  }
}
