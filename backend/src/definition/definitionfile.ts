import { Request } from "express"
import File from "./file";
export interface DecodedRequest extends Request {
    decodedId: number
}


