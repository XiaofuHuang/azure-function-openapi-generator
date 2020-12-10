import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import * as fs from "fs-extra"

@Route("openApi")
export class OpenApiController extends Controller {
  @Get("")
  public async getOpenApi(): Promise<any> {
    let result = await fs.readFile("dist/swagger.json", "utf8");
    return JSON.parse(result);
  }
}
