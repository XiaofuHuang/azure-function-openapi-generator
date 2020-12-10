import {
  Controller,
  Get,
  Path,
  Route,
} from "tsoa";

import {User} from "../model/user"

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<User> {
    let result: User = {
        id: userId,
        email: "test@microsoft.com",
        name: "test",
        status: "Happy",
        phoneNumbers: ["123456"]
    };
    return result;
  }
}