import { usersController } from '..';
import { createRouter } from '../../core/configs';

const USERS_URL = 'users';

const router = createRouter(USERS_URL);

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export { router as usersRouter };
