import Koa from 'koa';

export abstract class RoutesConfig {
  prefix: string;

  constructor(name: string) {
    this.prefix = `/api/${name}`;
  }

  abstract configureRoutes(app: Koa<Koa.DefaultState, Koa.DefaultContext>): void;
}
