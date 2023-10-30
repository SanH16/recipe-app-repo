import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebase";
import { authServices } from "../configs/auth";

export const APIauth = {
  signInWithCredentials: async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      authServices.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

  signInWithGoogleOAuth: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { oauthAccessToken, refreshToken } = result._tokenResponse;
      authServices.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
      // navigate("/");
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },
};
