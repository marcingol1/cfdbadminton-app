// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote {
  onCreatePrivateNote {
    id
    content
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote {
  onUpdatePrivateNote {
    id
    content
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote {
  onDeletePrivateNote {
    id
    content
  }
}
`;
export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
    id
    nickname
    dateCreated
    online
    mail
  }
}
`;
export const onCreateServer = `subscription OnCreateServer {
  onCreateServer {
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
export const onUpdateServer = `subscription OnUpdateServer {
  onUpdateServer {
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
export const onDeleteServer = `subscription OnDeleteServer {
  onDeleteServer {
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
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateGameType = `subscription OnCreateGameType {
  onCreateGameType {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
export const onUpdateGameType = `subscription OnUpdateGameType {
  onUpdateGameType {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
export const onDeleteGameType = `subscription OnDeleteGameType {
  onDeleteGameType {
    id
    title
    type
    minPlayers
    maxPlayers
  }
}
`;
