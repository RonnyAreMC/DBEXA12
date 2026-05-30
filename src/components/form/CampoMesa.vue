<script setup>
import { useForm } from './formContext.js'
import SelectField from './SelectField.vue'

const NAME = 'mesa'
const validar = (v) => (!v ? 'Seleccione el tipo de mesa' : '')

const form = useForm()
form.register(NAME, validar)
</script>

<template>
  <SelectField
    label="Tipo de mesa"
    :options="['Interior', 'Terraza', 'Ventana', 'Privada']"
    :modelValue="form.state.values[NAME]"
    :error="form.state.touched[NAME] ? form.state.errors[NAME] : ''"
    @update:modelValue="(v) => form.setValue(NAME, v)"
    @blur="form.blur(NAME)"
  />
</template>
