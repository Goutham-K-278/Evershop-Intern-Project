export default loginCustomerWithEmail;
/**
 * Login a customer with email and password. This function must be accessed from the request object (request.loginCustomerWithEmail(email, password, callback))
 * @param {string} email
 * @param {string} password
 */
declare function loginCustomerWithEmail(email: string, password: string): Promise<void>;
