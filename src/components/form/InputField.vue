<script setup>
defineProps({
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  error: String,
  placeholder: { type: String, default: '' },
  inputmode: String,
  maxlength: [String, Number],
  autocomplete: String,
})
defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :inputmode="inputmode"
      :maxlength="maxlength"
      :autocomplete="autocomplete"
      :class="{ invalid: error }"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>
