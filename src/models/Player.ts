import { User } from "./User";

export interface Player {
    _id: string;
    firstName: string;
    lastName: string;
    playerNumber: string;
    age: string;
    height: string;
    avatar: string;
    email: string;
    phoneNumber: string;
    country: string;
    position: string;
    weight: string;
    preferredFoot: string;
    idUser: User;
  }