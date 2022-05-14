import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from  'https://deno.land/x/cors@v1.2.1/mod.ts';
import router from "./src/routes.ts";

//app
const app = new Application();

//enable cors
app.use(oakCors({
    credentials: true,
    origin: /^.+localhost:(3000|4200|8080)$/,
}));

//router
app.use(router.routes());
app.use(router.allowedMethods());


app.listen({ port: 8000 });
console.log('Deno Started on port: 8000');

