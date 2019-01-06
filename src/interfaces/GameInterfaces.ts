interface Player {
  id: string;
  nickname: string;
  dateCreated: string;
  online: boolean;
  mail: string;
}

interface GameType {
  id: string;
  title: string;
  type: number;
  minPlayer: number;
  maxPlayer: number;
}

interface Game {
  id: string;
  title: string;
  teamA: Player[];
  teamB: Player[];
  score: string;
  gameType: GameType;
}

interface Server {
  id: string;
  title: string;
  playersOnline: Player[];
  games: Game[];
}
