export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectErrorAuth = (state) => state.auth.error;

export const selectUserData = (state) => state.auth.user;

export const selectIsBurgerMenuOpen = (state) => state.auth.isBurgerMenuOpen;
