import { UsersController } from './controller/users.controller';
import { MongoDBUsersRepository } from './repository/mongo-db-users.repository';
import { UsersService } from './service/users.service';

/** MongoDB Repository **/
const mongoDBUsersRepository = new MongoDBUsersRepository();

/** Users Service **/
const usersService = new UsersService(mongoDBUsersRepository);

/** Users Controller **/
const usersController = new UsersController(usersService);

export { usersController };
