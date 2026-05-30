import { reactive, provide, inject } from 'vue'

const FORM_KEY = Symbol('reserva-form')

export function provideForm(onSubmit) {
  const state = reactive({
    values: {},
    errors: {},
    touched: {},
    enviado: false,
  })
  const reglas = {}

  const register = (name, rule) => {
    reglas[name] = rule
    if (!(name in state.values)) state.values[name] = ''
  }

  const validar = (name) =>
    reglas[name] ? reglas[name](state.values[name] ?? '') : ''

  function aplicarError(name) {
    const msg = validar(name)
    if (msg) state.errors[name] = msg
    else delete state.errors[name]
  }

  const setValue = (name, value) => {
    state.values[name] = value
    if (state.touched[name]) aplicarError(name)
  }

  const blur = (name) => {
    state.touched[name] = true
    aplicarError(name)
  }

  const submit = () => {
    Object.keys(reglas).forEach((name) => {
      state.touched[name] = true
      aplicarError(name)
    })

    if (Object.keys(state.errors).length === 0) {
      if (onSubmit) onSubmit({ ...state.values })
      Object.keys(state.values).forEach((k) => (state.values[k] = ''))
      state.touched = {}
      state.enviado = true
      setTimeout(() => (state.enviado = false), 5000)
    }
  }

  const api = { state, register, setValue, blur, submit }
  provide(FORM_KEY, api)
  return api
}

export function useForm() {
  return inject(FORM_KEY)
}
