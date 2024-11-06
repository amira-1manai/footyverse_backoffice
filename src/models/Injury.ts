import { Player } from "./Player";

export interface Injury {
    _id: string;
    date: string;
    player: Player;
    injuryType: string;
    description: string;
    treatment: string;
    diagnosis: string;
    doctor: string;
    time: number;
    returnDate: string;
    status: string;
  }