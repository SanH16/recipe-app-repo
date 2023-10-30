import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../configs/firebase";

export class AuthServices {
  isAuthorized() {
    if (this.getToken() || this.getRefreshToken()) return true;
    return false;
  }
  getToken() {
    const token = Cookies.get("token") || Cookies.get("oauthAccessToken");
    return token;
  }

  getRefreshToken() {
    return Cookies.get("refreshToken");
  }

  storeCredentialsToCookie({ idToken, refreshToken, oauthAccessToken }) {
    // const expires = new Date();
    // expires.setSeconds(expires.getSeconds() + 10);

    // if (idToken) Cookies.set("idToken", idToken, { expires });
    if (idToken) Cookies.set("idToken", idToken);

    // if (oauthAccessToken) Cookies.set("oauthAccessToken", oauthAccessToken, { expires });
    if (oauthAccessToken) Cookies.set("oauthAccessToken", oauthAccessToken);
    Cookies.set("refreshToken", refreshToken);
  }

  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
    Cookies.remove("refreshToken");
    Cookies.remove("oauthAccessToken");
  }

  async logOut() {
    try {
      await signOut(auth);
      this.clearCredentialsFromCookie();
      window.location.href = "/logoutsession";
    } catch (err) {
      console.error(err);
    }
  }
}
