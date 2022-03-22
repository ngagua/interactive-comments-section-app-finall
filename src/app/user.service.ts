import * as data from '../data.json';
import { Comments, Data } from './model/model';


export class UserService {
    getusers(): Promise<Data> {
        return new Promise((resolve) =>
            setTimeout(() => {
                return resolve(JSON.parse(JSON.stringify(data)));
            }))

    }


}
