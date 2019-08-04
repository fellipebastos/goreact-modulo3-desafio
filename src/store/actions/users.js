export const userAddRequest = (userInput, cordinates) => ({
  type: 'user/ADD_REQUEST',
  payload: { userInput, cordinates },
});

export const userAddSuccess = data => ({
  type: 'user/ADD_SUCCESS',
  payload: { data },
});

export const userRemove = user => ({
  type: 'user/REMOVE',
  payload: { user },
});
