// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!) {
  createPrivateNote(input: $input) {
    id
    content
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!) {
  updatePrivateNote(input: $input) {
    id
    content
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!) {
  deletePrivateNote(input: $input) {
    id
    content
  }
}
`;
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const createServer = `mutation CreateServer($input: CreateServerInput!) {
  createServer(input: $input) {
    id
    title
    playersOnline {
      id
      nickname
      dateCreated
      online
      mail
    }
    games {
      id
      title
      teamA {
        id
        nickname
        dateCreated
        online
        mail
      }
      teamB {
        id
        nickname
        dateCreated
        online
        mail
      }
      score
      gameType {
        id
        title
        type
        minPlayers
        maxPlayers
      }
    }
  }
}
`;
export const updateServer = `mutation UpdateServer($input: UpdateServerInput!) {
  updateServer(input: $input) {
    id
    title
    playersOnline {
      id
      nickname
      dateCreated
      online
      mail
    }
    games {
      id
      title
      teamA {
        id
        nickname
        dateCreated
        online
        mail
      }
      teamB {
        id
        nickname
        dateCreated
        online
        mail
      }
      score
      gameType {
        id
        title
        type
        minPlayers
        maxPlayers
      }
    }
  }
}
`;
export const deleteServer = `mutation DeleteServer($input: DeleteServerInput!) {
  deleteServer(input: $input) {
    id
    title
    playersOnline {
      id
      nickname
      dateCreated
      online
      mail
    }
    games {
      id
      title
      teamA {
        id
        nickname
        dateCreated
        online
        mail
      }
      teamB {
        id
        nickname
        dateCreated
        online
        mail
      }
      score
      gameType {
        id
        title
        type
        minPlayers
        maxPlayers
      }
    }
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    title
    teamA {
      id
      nickname
      dateCreated
      online
      mail
    }
    teamB {
      id
      nickname
      dateCreated
      online
      mail
    }
    score
    gameType {
      id
      title
      type
      minPlayers
      maxPlayers
    }
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    title
    teamA {
      id
      nickname
      dateCreated
      online
      mail
    }
    teamB {
      id
      nickname
      dateCreated
      online
      mail
    }
    score
    gameType {
      id
      title
      type
      minPlayers
      maxPlayers
    }
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    title
    teamA {
      id
      nickname
      dateCreated
      online
      mail
    }
    teamB {
      id
      nickname
      dateCreated
      online
      mail
    }
    score
    gameType {
      id
      title
      type
      minPlayers
      maxPlayers
    }
  }
}
`;
export const createGameType = `mutation CreateGameType($input: CreateGameTypeInput!) {
  createGameType(input: $input) {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
export const updateGameType = `mutation UpdateGameType($input: UpdateGameTypeInput!) {
  updateGameType(input: $input) {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
export const deleteGameType = `mutation DeleteGameType($input: DeleteGameTypeInput!) {
  deleteGameType(input: $input) {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
