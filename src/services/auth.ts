import {Api} from "../utils/api";
import {AxiosRequestConfig} from "axios";
import {apiConfig} from "../constants/api";
import {auth} from '../utils/firebase'

interface ICredentials {
    email: string,
    password: string
}

class Service extends Api {
    public constructor(config: AxiosRequestConfig) {
        super(config);
        this.login = this.login.bind(this);
    }

    public async login(credentials: ICredentials) {
        try {
            return await auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        } catch (e) {
            console.log(e)
        }
    }

    public async register(credentials: ICredentials) {
        try {
            return await auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        } catch (e) {
            console.log(e)
        }
    }

}

export const AuthService = new Service(apiConfig);
