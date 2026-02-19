// Auth0 Configuration
// Replace these with your Auth0 credentials from https://manage.auth0.com/

export const auth0Config = {
  domain: process.env.VITE_AUTH0_DOMAIN || "dev-placeholder.auth0.com",
  clientId: process.env.VITE_AUTH0_CLIENT_ID || "placeholder-client-id",
  authorizationParams: {
    redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
  },
  cacheLocation: 'localstorage',
  useRefreshTokens: true,
};
