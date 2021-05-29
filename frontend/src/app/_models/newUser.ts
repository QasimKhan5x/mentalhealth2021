import { Entry } from "./entry";

export class NewUser {
  "firstname": string;
  "lastname": string;
  "id": string;
  "password": string;
  "age": number;
  "entries": Entry[];
}