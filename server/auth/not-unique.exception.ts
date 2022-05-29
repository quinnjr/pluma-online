import { HttpException, HttpStatus } from "@nestjs/common";


/**
 * NotUniqueException: throw exception if user exists in database when attempting to register
 * @param nui NotUniqueIndex:
 *            0 -> email not uniquie
 *            1 -> display name not unique
 *            2 -> both not unique
 */
export class NotUniqueException extends HttpException {
  constructor(nui: any) {
    super({
      "status" : HttpStatus.FORBIDDEN,
      "error" : {
        "status" : true,
        "message" : nui
      }
    }, HttpStatus.FORBIDDEN);
  }
}
