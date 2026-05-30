<script setup>
import { useForm } from './formContext.js'
import InputField from './InputField.vue'

const NAME = 'telefono'
const validar = (v) =>
  !v.trim()
    ? 'El teléfono es obligatorio'
    : !/^\d{7,10}$/.test(v)
      ? 'Ingrese de 7 a 10 dígitos'
      : ''

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <InputField
    label="Teléfono"
    type="tel"
    inputmode="numeric"
    :maxlength="10"
    autocomplete="tel"
    placeholder="0999999999"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
