import axios from "axios";

const userInstance = axios.create({
  // baseURL: "https://cfmotoworld.pythonanywhere.com/",
  baseURL: "https://api.cfmoto.world/",
});

export const signUp = (user) =>
  userInstance.request({ method: "POST", data: user, url: "/api/user/register/" });

export const signIn = (user) =>
  userInstance.request({ method: "POST", data: user, url: "/api/user/login/" });

export const profileData = (token) =>
  userInstance.request({ method: "GET", url: "/api/user/profile/",headers:{"Authorization":`Bearer ${token}`} });

export const vinnIn = (number) => userInstance.request({ method: "GET", url: `/product/vin/${number}/` });

