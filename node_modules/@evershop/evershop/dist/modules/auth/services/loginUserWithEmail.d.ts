export default loginUserWithEmail;
/**
 * This function will login the admin user with email and password. This function must be accessed from the request object (request.loginUserWithEmail(email, password, callback))
 * @param {string} email
 * @param {string} password
 */
declare function loginUserWithEmail(email: string, password: string): Promise<void>;
