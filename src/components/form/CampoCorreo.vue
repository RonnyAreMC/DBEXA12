<script setup>
import { useForm } from './formContext.js'
import InputField from './InputField.vue'

const NAME = 'email'
const validar = (v) =>
  !v.trim()
    ? 'El correo es obligatorio'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? 'Correo no válido'
      : ''

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <InputField
    label="Correo electrónico"
    type="email"
    inputmode="email"
    autocomplete="email"
    placeholder="correo@ejemplo.com"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
