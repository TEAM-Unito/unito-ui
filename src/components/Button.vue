<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'indigo' | 'magenta' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'indigo',
  size: 'medium',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2'

  const variantClasses = {
    indigo: 'text-white hover:opacity-90 focus:ring-blue-500',
    magenta: 'text-white hover:opacity-90 focus:ring-pink-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }

  const sizeClasses = {
    small: ' text-xs',
    medium: 'text-sm',
    large: 'text-base',
  }

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.variant, // variant名をクラスとして追加
    props.disabled && 'opacity-50 cursor-not-allowed',
  ]
    .filter(Boolean)
    .join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
button.indigo {
  background-color: #4b7188;
}

button.magenta {
  background-color: #ff7474;
}
</style>
