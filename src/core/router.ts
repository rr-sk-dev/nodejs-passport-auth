import Koa from 'koa';

export abstract class RoutesConfig {
  prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  abstract configureRoutes(app: Koa<Koa.DefaultState, Koa.DefaultContext>): void;
}
