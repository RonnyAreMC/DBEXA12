<script setup>
import { useForm } from './formContext.js'
import TextAreaField from './TextAreaField.vue'

const NAME = 'comentarios'

const form = useForm()
form.register(NAME, () => '')
</script>

<template>
  <TextAreaField
    label="Comentarios (opcional)"
    placeholder="Alguna petición especial..."
    :modelValue="form.state.values[NAME]"
    @update:modelValue="(v) => form.setValue(NAME, v)"
  />
</template>
