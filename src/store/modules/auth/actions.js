const apiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:';
export default {
  async login(context, payload) {
    const url = `${apiUrl}signInWithPassword?key=AIzaSyB6bykRTT4LzZ1QYViShK2VnYlDtl8XzPM`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to login!');
    }

    const { idToken, expiresIn, localId } = responseData;
    context.commit('setUser', {
      token: idToken,
      userId: localId,
      tokenExpiration: expiresIn,
    });
  },
  async signup(context, payload) {
    const url = `${apiUrl}signUp?key=AIzaSyB6bykRTT4LzZ1QYViShK2VnYlDtl8XzPM`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to signup!');
    }

    const { idToken, expiresIn, localId } = responseData;
    context.commit('setUser', {
      token: idToken,
      userId: localId,
      tokenExpiration: expiresIn,
    });
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
