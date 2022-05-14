import {Repository} from "./repository.ts";

export class PasswdRepository extends Repository {
    get table(): string {
        return "password_reset";
    }

}
