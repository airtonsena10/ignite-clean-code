// Boleanos

const userData = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeightToEnter = 130

const currentHour = new Date().getHours()

const parkIsOpen = currentHour > 9 && currentHour < 18

if (!parkIsOpen) {
  throw new Error('O parque está fechado!')
}

const UserHasticket = userData.hasTicket

if (!UserHasticket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const UserHasNecessaryHeight = userData.height > necessaryHeightToEnter

if (!UserHasNecessaryHeight) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')