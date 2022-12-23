// ❌ errado
// evite negações
const isUserOlderThan18Years = true
const isUserLivesOnBrazil = true

if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {

}

// ✅ certo
// criar variáveis auxiliares
const isUserYoungerThan18Years = true
const doesUserLivesOutsideBrazil = true

if (isUserOlderThan18Years && doesUserLivesOutsideBrazil) {

}

// Early return vs else
// Else
function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  } else {
    return user.age >= 18
  }
}

// Early return 
function isUserOlderThan18Years(user) {
  if (!user) {
    return { error: true }
  } 

  return user.age >= 18
}

// Evite condicionais dentro da outra

user.age >= 18 ? users.age === 18 ? : :

if (users.age > 18) {
  return
}

if (...)