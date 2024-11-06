import { Player } from "./Player";

export interface Notification {
    _id: string;
    title: string;
    message: string;
    date: string;
    player: Player;
    status: string;
}