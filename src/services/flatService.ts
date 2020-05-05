import { Api } from "../utils/api";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig, apiUrls } from "../constants/api";
import { IFlat } from "../components/Flats/ducks/types";

class Service extends Api {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    this.createFlat = this.createFlat.bind(this);
    this.getAll = this.getAll.bind(this);
  }
  public getAll() {
    const mock: [IFlat] = [
      {
        title: "Title",
        description: "DEcsription",
      },
    ];
    return mock;
    return this.post<[IFlat]>(apiUrls.flats.getAll)
      .then((response: AxiosResponse<[IFlat]>) => {
        const { data } = response;
        const mock: [IFlat] = [
          {
            title: "Title",
            description: "DEcsription",
          },
        ];
        return mock;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  }
  public getOne() {
    return this.post<IFlat>("API_LOGIN")
      .then((response: AxiosResponse<IFlat>) => {
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
  public createFlat(flat: IFlat): Promise<IFlat> {
    return this.post<IFlat>("API_LOGIN", JSON.stringify(flat))
      .then((response: AxiosResponse<IFlat>) => {
        const { data } = response;

        const state: IFlat = {
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
