import React from 'react'

// Sempre nomear as variáveis pela causa e nunca pelo efeito

// ❌ errado
// efeito
export function Button() {
  const isButtonDisabled = true

  return (
    <button disabled={isButtonDisabled}>
      <span></span>
      {isButtonDisabled ? 'Carregando' : 'Enviar'}
    </button>
  )
}

// ✅ certo
// causa
export function Button() {
  const isFormSubmitting = true

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </button>
  )
}