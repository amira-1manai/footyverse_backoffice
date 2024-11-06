import { Exercise } from "./Exercise";
import { Player } from "./Player";

export class Training {
    returnDate(returnDate: any): unknown {
      throw new Error('Method not implemented.');
    }
    _id!: string;
    player!: Player[];
    date!: string;
    duration!: number;
    trainingType!: string;
    exercises!: Exercise[];
    notes!: string;
}