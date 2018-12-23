/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id?: string | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  nickname: string,
  dateCreated: string,
  online?: boolean | null,
  mail?: string | null,
};

export type UpdatePlayerInput = {
  id: string,
  nickname?: string | null,
  dateCreated?: string | null,
  online?: boolean | null,
  mail?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateServerInput = {
  id?: string | null,
  title: string,
};

export type UpdateServerInput = {
  id: string,
  title?: string | null,
};

export type DeleteServerInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
  title: string,
  score: string,
};

export type UpdateGameInput = {
  id: string,
  title?: string | null,
  score?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreateGameTypeInput = {
  id?: string | null,
  title: string,
  type: number,
  minPlayers?: number | null,
  maxPlayers?: number | null,
};

export type UpdateGameTypeInput = {
  id: string,
  title?: string | null,
  type?: number | null,
  minPlayers?: number | null,
  maxPlayers?: number | null,
};

export type DeleteGameTypeInput = {
  id?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDFilterInput | null,
  nickname?: ModelStringFilterInput | null,
  dateCreated?: ModelStringFilterInput | null,
  online?: ModelBooleanFilterInput | null,
  mail?: ModelStringFilterInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelServerFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelServerFilterInput | null > | null,
  or?: Array< ModelServerFilterInput | null > | null,
  not?: ModelServerFilterInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  score?: ModelStringFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameTypeFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  type?: ModelIntFilterInput | null,
  minPlayers?: ModelIntFilterInput | null,
  maxPlayers?: ModelIntFilterInput | null,
  and?: Array< ModelGameTypeFilterInput | null > | null,
  or?: Array< ModelGameTypeFilterInput | null > | null,
  not?: ModelGameTypeFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type CreateServerMutationVariables = {
  input: CreateServerInput,
};

export type CreateServerMutation = {
  createServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type UpdateServerMutationVariables = {
  input: UpdateServerInput,
};

export type UpdateServerMutation = {
  updateServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type DeleteServerMutationVariables = {
  input: DeleteServerInput,
};

export type DeleteServerMutation = {
  deleteServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type CreateGameTypeMutationVariables = {
  input: CreateGameTypeInput,
};

export type CreateGameTypeMutation = {
  createGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type UpdateGameTypeMutationVariables = {
  input: UpdateGameTypeInput,
};

export type UpdateGameTypeMutation = {
  updateGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type DeleteGameTypeMutationVariables = {
  input: DeleteGameTypeInput,
};

export type DeleteGameTypeMutation = {
  deleteGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description: string | null,
      status: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetServerQueryVariables = {
  id: string,
};

export type GetServerQuery = {
  getServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type ListServersQueryVariables = {
  filter?: ModelServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServersQuery = {
  listServers:  {
    __typename: "ModelServerConnection",
    items:  Array< {
      __typename: "Server",
      id: string,
      title: string,
      playersOnline:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      games:  Array< {
        __typename: "Game",
        id: string,
        title: string,
        teamA:  Array< {
          __typename: "Player",
          id: string,
          nickname: string,
          dateCreated: string,
          online: boolean | null,
          mail: string | null,
        } | null > | null,
        teamB:  Array< {
          __typename: "Player",
          id: string,
          nickname: string,
          dateCreated: string,
          online: boolean | null,
          mail: string | null,
        } | null > | null,
        score: string,
        gameType:  {
          __typename: "GameType",
          id: string,
          title: string,
          type: number,
          minPlayers: number | null,
          maxPlayers: number | null,
        } | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameTypeQueryVariables = {
  id: string,
};

export type GetGameTypeQuery = {
  getGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type ListGameTypesQueryVariables = {
  filter?: ModelGameTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameTypesQuery = {
  listGameTypes:  {
    __typename: "ModelGameTypeConnection",
    items:  Array< {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    nickname: string,
    dateCreated: string,
    online: boolean | null,
    mail: string | null,
  } | null,
};

export type OnCreateServerSubscription = {
  onCreateServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnUpdateServerSubscription = {
  onUpdateServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnDeleteServerSubscription = {
  onDeleteServer:  {
    __typename: "Server",
    id: string,
    title: string,
    playersOnline:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    games:  Array< {
      __typename: "Game",
      id: string,
      title: string,
      teamA:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      teamB:  Array< {
        __typename: "Player",
        id: string,
        nickname: string,
        dateCreated: string,
        online: boolean | null,
        mail: string | null,
      } | null > | null,
      score: string,
      gameType:  {
        __typename: "GameType",
        id: string,
        title: string,
        type: number,
        minPlayers: number | null,
        maxPlayers: number | null,
      } | null,
    } | null > | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    title: string,
    teamA:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    teamB:  Array< {
      __typename: "Player",
      id: string,
      nickname: string,
      dateCreated: string,
      online: boolean | null,
      mail: string | null,
    } | null > | null,
    score: string,
    gameType:  {
      __typename: "GameType",
      id: string,
      title: string,
      type: number,
      minPlayers: number | null,
      maxPlayers: number | null,
    } | null,
  } | null,
};

export type OnCreateGameTypeSubscription = {
  onCreateGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type OnUpdateGameTypeSubscription = {
  onUpdateGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};

export type OnDeleteGameTypeSubscription = {
  onDeleteGameType:  {
    __typename: "GameType",
    id: string,
    title: string,
    type: number,
    minPlayers: number | null,
    maxPlayers: number | null,
  } | null,
};
