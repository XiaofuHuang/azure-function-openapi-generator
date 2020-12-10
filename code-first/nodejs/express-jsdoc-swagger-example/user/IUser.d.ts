/**
 * User model
 * @typedef {object} User
 * @property {integer} id.required - User id
 * @property {string} email.required - User email
 * @property {string} name.required - User name
 * @property {string} status - User status - enum:Happy,Sad
 * @property {array<string>} phoneNumbers - User phoneNumbers
 */
interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}