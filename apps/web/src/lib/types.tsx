export type GameType = 'puzzle' | 'board' | 'arcade' | 'card' | 'layer' | 'demo';

export interface IGame {
	title: string;
	link: string;
	poster: string;
	released: Date;
	repository: string;
	description: string;
	type: GameType;
}
