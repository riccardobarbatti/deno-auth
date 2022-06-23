
import {Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {Login, Register, Me, Logout} from './controllers/authController.ts';
import {authMiddleware} from "./middlewares/authMiddleware.ts";


const router = new Router();

router
    .post('/api/register', Register)
    .post('/api/login', Login)
    .post('/api/logout', Logout)
    .get('/api/user', authMiddleware, Me)


export default router;
