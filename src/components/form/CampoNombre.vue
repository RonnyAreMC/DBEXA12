<script setup>
import { useForm } from './formContext.js'
import InputField from './InputField.vue'

const NAME = 'nombre'
const validar = (v) =>
  !v.trim()
    ? 'El nombre es obligatorio'
    : v.trim().length < 3
      ? 'Mínimo 3 caracteres'
      : ''

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <InputField
    label="Nombre completo"
    autocomplete="name"
    placeholder="Ej: Ana Pérez"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
