<script setup>
import { useForm } from './formContext.js'
import InputField from './InputField.vue'

const NAME = 'fecha'
const validar = (v) =>
  !v
    ? 'Seleccione una fecha'
    : v < new Date().toISOString().split('T')[0]
      ? 'La fecha no puede ser pasada'
      : ''

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <InputField
    label="Fecha de reserva"
    type="date"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
