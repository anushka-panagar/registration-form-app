import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  /**
   *  Common API function for calling all api
   * @param path - API URL
   * @param type - Method type - GET, POST , PUT, DELETE
   * @returns response data from API or if there is an error returns appropriate response
   */
  public async fetchApi(path: string, type: string) {
    return await fetch(`${path}`, {
      method: type,
    })
      .then((response) => response.text())
      .then((jsonData) => {
        const response = jsonData.length ? JSON.parse(jsonData) : {};
        return response;
      })
      .catch((error: any) => {
        return { success: false };
      });
  }
}
