import { ParameterizedContext } from 'koa';
import { UsersService } from '../service/users.service';

// TODO: input validations (sanitize, check agains the model, etc..)
// ! https://www.npmjs.com/package/koa-joi-router

export class UsersController {
  constructor(private usersService: UsersService) {}

  getUsers = async (ctx: ParameterizedContext): Promise<void> => {
    ctx.body = await this.usersService.getUsers();
  };

  getUser = async (ctx: ParameterizedContext): Promise<void> => {
    ctx.body = await this.usersService.getUser(ctx.params.id);
  };

  createUser = async (ctx: ParameterizedContext): Promise<void> => {
    ctx.body = await this.usersService.createUser(ctx.request.body);
  };

  updateUser = async (ctx: ParameterizedContext): Promise<void> => {
    ctx.body = await this.usersService.updateUser(ctx.params.id, ctx.request.body);
  };

  deleteUser = async (ctx: ParameterizedContext): Promise<void> => {
    ctx.body = await this.usersService.deleteUser(ctx.params.id);
  };
}
