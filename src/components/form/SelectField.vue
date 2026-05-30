<script setup>
defineProps({
  label: String,
  modelValue: String,
  error: String,
  options: { type: Array, default: () => [] },
})
defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <select
      :value="modelValue"
      :class="{ invalid: error }"
      @change="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    >
      <option value="">Seleccione...</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>
