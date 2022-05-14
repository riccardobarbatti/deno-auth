import { Router } from "https://deno.land/x/oak/mod.ts";
import {Hello, Register} from "./controllers/authController.ts";


const router = new Router();

//hello test
router.get('/api/hello', Hello)
//register
router.post('/api/register', Register);







export default router;


//check route
// router.get('/', ({response} ) => {
//     response.body = 'HomePage'
// }).get('/new', ({response}) => {
//     response.body = 'New Page'
// });
