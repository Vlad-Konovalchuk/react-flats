import {Api} from "../utils/api";
import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {apiConfig, apiUrls} from "../constants/api";
import {FlatModel} from "../components/Flats/ducks/types";
import {flatsData} from "../components/Flats/mock";

class Service extends Api {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    this.createFlat = this.createFlat.bind(this);
    this.getAll = this.getAll.bind(this);
  }
  public getAll() {
    return flatsData;
    return this.post<[FlatModel]>(apiUrls.flats.getAll)
      .then((response: AxiosResponse<FlatModel[]>) => {
        const { data } = response;
          return flatsData;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  }
  public getOne() {
    return this.post<FlatModel>("API_LOGIN")
      .then((response: AxiosResponse<FlatModel>) => {
        const { data } = response;

        return data;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  }
  /**
   *
   * @param {object} credentials - user's identifications.
   * @param {string} credentials.email - user's email.
   * @param {string} credentials.password - user's password.
   * @returns {Promise<UserState>} userState - user information,
   */
  public createFlat(flat: FlatModel): Promise<FlatModel> {
    return this.post<FlatModel>("API_LOGIN", JSON.stringify(flat))
      .then((response: AxiosResponse<FlatModel>) => {
        const { data } = response;

        const state: FlatModel = {
            _id:'2321321321321321',
          title: data.title,
          description: data.description,
        };

        return state;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  }
}
export const FlatsService = new Service(apiConfig);
