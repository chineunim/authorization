export const cookieUrl = "/sanctum/csrf-cookie";
export const loginPostUrl = "/login";
export const dashboardUrl = '/';
export const usersIndexUrl = '/api/users/';
export const createUserUrl = '/api/users/';
export const updateUserUrl = (userId: number) => `/api/users/${userId}`;
export const deleteUserUrl = (userId: number) => `/api/users/${userId}`;
