/**
 * @typedef User
 * @property {integer} id - User id
 * @property {string} email - User email
 * @property {string} name - User name
 * @property {string} [status] - User status
 * @property {array<string>} phoneNumbers - User phoneNumbers
 */
interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}