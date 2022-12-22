
// Nomeclatura de variáveis

const users = ['Airton', 'Gabriel', 'diego']

// ❌ errado
// não abrevie os nomes, deixe o mais descritivo possível, o tamanho da variável não importa
const filtered = users.filter(u => {
  return u.startsWith('G')
})

// ✅ certo
const usersStartingWithLetterG = users.filter(u => {
  return u.startsWith('G')
})

// evite nomes genéricos (data, response, params, list, args)
// ❌ errado
function getUsers() {
  const data = getUsersFromDataBase()

  return data
}

// ✅ certo
function getUsers() {
  const users = getUsersFromDataBase()

  return users
}