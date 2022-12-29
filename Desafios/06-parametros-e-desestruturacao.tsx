function updateUserRoute(body, params) {
  const { name, email, password } = body;
  const { id } = params;

  updateUserController({ name, email, password }, { id });
}

function updateUserController(data, params) {
  const { name, email, password } = data;
  const { id } = params;

  userRepository.update({ name, email, password }, { id });
}

const userRepository = {
  update: ({ name, email, password }, { id }) => {},
};
