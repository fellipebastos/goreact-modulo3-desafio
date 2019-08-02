const INITIAL_STATE = [
  {
    id: 1,
    avatar: 'https://avatars1.githubusercontent.com/u/35773455?v=4',
    name: 'Fellipe Bastos',
    login: 'fellipebastos',
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
