const ApiEndpoint = {
  REGISTER: '/register',
  LOGIN: '/login',

  GET_ALL_STORIES: '/stories',
  GET_BY_ID_STORIES: (id) => `/stories/${id}`,
  STORE_TRANSACTION: '/stories'

};

export default ApiEndpoint;
