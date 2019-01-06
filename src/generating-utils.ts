import moment from 'moment';

const generateTestPlayer = (): Player => {
  const testTitle = Math.random().toPrecision(5);
  return {
    id: `player-id-${testTitle}`,
    nickname: `Player Nickname ${testTitle}`,
    dateCreated: moment().format('DD MMM YYYY HH:mm:ss'),
    online: !!Math.round(Math.random()),
    mail: `test-mail-${testTitle}@gmail.com`,
  };
};

const getDefaultGameType = (): GameType => {
  return {
    id: `test-id-${Math.round(Math.random() * 10000)}`,
    title: 'Default mode',
    type: 0,
    minPlayer: 1,
    maxPlayer: 2,
  };
};

const generateTestGame = (): Game => {
  const testTitle = Math.random().toPrecision(5);
  return {
    id: `game-id-${testTitle}`,
    title: `title-${testTitle}`,
    teamA: [generateTestPlayer(), generateTestPlayer()],
    teamB: [generateTestPlayer(), generateTestPlayer()],
    score: `${Math.round(Math.random() * 100)} - ${Math.round(
      Math.random() * 100,
    )}`,
    gameType: getDefaultGameType(),
  };
};

const generateTestServer = (): Server => {
  const testTitle = Math.random().toPrecision(5);
  return {
    id: `test-id${testTitle}`,
    title: `Test string title + ${testTitle}`,
    playersOnline: [
      generateTestPlayer(),
      generateTestPlayer(),
      generateTestPlayer(),
    ],
    games: [generateTestGame(), generateTestGame()],
  };
};

export { generateTestGame, generateTestPlayer, generateTestServer };
