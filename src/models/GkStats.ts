import { Player } from "./Player";

export class GkStats {
    _id?: string;
    player: Player;
    saves: number;
    aerialAbility: number;
    anticipation: number;
    ballHandling: number;
    tackling: number;
}