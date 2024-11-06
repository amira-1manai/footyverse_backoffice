import { Injury } from "./Injury";
import { Player } from "./Player";

export interface Recovery {
    _id: string;
    startDate: string;
    endDate: string;
    activities: string;
    player: Player;
    injury: Injury;
    status: string;
    }
