import { Player } from "./Player";

export class Stats {

    _id?: string;   
    player: Player;
    
    // General stats
    weakness : string;
    strength : string;
    matchesPlayed: number;
    fouls: number;
    penaltiesCommitted: number;
    minutes: number;
    yellowCards: number;
    redCards: number;

    // Goalkeeper stats
    keepSaves: number;
    peenalitiesSaved: number;
    
    

    // Defender player stats
    interceptions: number;
    tackles: number;
    possessionWon: number;
    ballsRecovered: number;

    // Midfielder player stats
    goals: number;
    assists: number;
    shotsOnTarget: number;
    passesCompleted: number;
}
