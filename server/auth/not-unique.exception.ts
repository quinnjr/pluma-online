import { HttpException, HttpStatus } from "@nestjs/common";
import { UniqueError } from "./uniqueError";


/**
 * NotUniqueException: throw exception if user exists in database when attempting to register
 * @param nui NotUniqueIndex:
 *            accepts value from UniqueError.ts
 */
export class NotUniqueException extends HttpException {
  constructor(nui: UniqueError) {
    super({
      "status" : HttpStatus.FORBIDDEN,
      "error" : {
        "status" : true,
        "message" : nui
      }
    }, HttpStatus.FORBIDDEN);
  }
}
