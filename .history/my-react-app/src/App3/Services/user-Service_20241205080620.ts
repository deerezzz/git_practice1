import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
  }

class userService {
   getAllUsers() {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
   }
}

export default new userService; 