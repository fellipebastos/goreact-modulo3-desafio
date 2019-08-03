export const modalShow = cordinates => ({
  type: 'modal/SHOW',
  payload: { cordinates },
});

export const modalHide = () => ({
  type: 'modal/HIDE',
});
