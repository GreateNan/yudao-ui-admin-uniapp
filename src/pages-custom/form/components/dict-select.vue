<template>

  <wd-select-picker
    v-model="selectedId"
   
    
    :columns="getDictOptions"
    :type="selectType=='select' || selectType=='radio'?'radio':'checkbox'"
    filterable
    :placeholder="placeholder"
    @confirm="handleConfirm"
  />
</template>

<script lang="ts" setup>

import { computed, onMounted, ref, watch } from 'vue'
import { getBoolDictOptions, getIntDictOptions, getStrDictOptions } from '@/hooks/useDict'

const props = withDefaults(defineProps<{
  modelValue?: number | number[]
  dictType:string,
  selectType?: 'select' | 'radio' | 'checkbox' 
  valueType?: 'str' | 'int' | 'bool'
  placeholder?: string
}>(), {
   valueType: 'str',
  selectType: 'select'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | number[] | undefined): void
}>()

/** 根据用户 ID 获取昵称 */
function getUserNickname(userId: number | undefined): string {
  if (!userId) return ''
  const user = userList.value.find(u => u.id === userId)
  return user?.nickname || ''
}

defineExpose({
  getUserNickname,
})

const userList = ref<User[]>([])
const selectedId = ref<number | string | number[]>([])



watch(
  () => props.modelValue,
  (val) => {
  
    if (props.selectType === 'radio' || props.selectType === 'select') {
      // 单选时，如果值为 undefined，使用空字符串避免警告
      selectedId.value = val !== undefined ? val : ''
    } else {
      // 多选时，确保是数组
      selectedId.value = Array.isArray(val) ? val : []
    }
  },
  { immediate: true },
)

// 获得字典配置
const getDictOptions = computed(() => {
  switch (props.valueType) {
    case 'str':
      return getStrDictOptions(props.dictType)
    case 'int':
      return getIntDictOptions(props.dictType)
    case 'bool':
      return getBoolDictOptions(props.dictType)
    default:
      return []
  }
})
function handleConfirm({ value }: { value: any }) {
  emit('update:modelValue', value)
}


</script>
