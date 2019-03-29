export const DEFAULT_SERVER_MODAL = 'DEFAULT_SERVER_MODAL';
export const CREATE_SERVER_MODAL = 'CREATE_SERVER_MODAL';
export const JOIN_SERVER_MODAL = 'JOIN_SERVER_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const openDefServerModal = {
  type: DEFAULT_SERVER_MODAL,
  modal: 'default server'
};
export const openJoinServerModal = {
  type: JOIN_SERVER_MODAL,
  modal: 'join server'
};
export const openCreateServerModal = {
  type: CREATE_SERVER_MODAL,
  modal: 'create server'
};

export const closeModal = {
  type: CLOSE_MODAL,
}



