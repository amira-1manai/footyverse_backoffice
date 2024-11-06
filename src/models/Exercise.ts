export class Exercise {
    back() {
      throw new Error('Method not implemented.');
    }
    _id!: string;
    name!: string;
    description!: string;
    position!: string;
    difficultyLevel!: string;
    durationMinutes!: number;
}