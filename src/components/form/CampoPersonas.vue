<script setup>
import { useForm } from './formContext.js'
import SelectField from './SelectField.vue'

const NAME = 'personas'
const validar = (v) => (!v ? 'Seleccione el número de personas' : '')

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <SelectField
    label="Número de personas"
    :options="['1', '2', '3', '4', '5', '6 o más']"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
