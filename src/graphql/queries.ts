// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nickname
      dateCreated
      online
      mail
    }
    nextToken
  }
}
`;
export const getServer = `query GetServer($id: ID!) {
  getServer(id: $id) {
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
export const listServers = `query ListServers(
  $filter: ModelServerFilterInput
  $limit: Int
  $nextToken: String
) {
  listServers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
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
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getGameType = `query GetGameType($id: ID!) {
  getGameType(id: $id) {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
export const listGameTypes = `query ListGameTypes(
  $filter: ModelGameTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      type
      minPlayers
      maxPlayers
    }
    nextToken
  }
}
`;
