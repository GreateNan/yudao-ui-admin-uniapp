<template>

  <wd-select-picker
    v-model="selectedId"
    :label="label"
    :label-width="label ? '180rpx' : '0'"
    :columns="columns"
    :type="type"
    filterable
    :placeholder="placeholder"
    @confirm="handleConfirm"
  />
</template>

<script lang="ts" setup>
import type { Record } from '@/api/custom/record'
import { computed, onMounted, ref, watch } from 'vue'
import { getmngtformall } from '@/api/custom/record'

const props = withDefaults(defineProps<{
  modelValue?: number | number[]
  type?: 'radio' | 'checkbox'
  label?: string
  placeholder?: string
  business_type?:string

}>(), {
  type: 'radio',
  label: '',
  placeholder: '请选择',
  business_type:'scfw'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | number[] | undefined): void
}>()

/** 根据用户 ID 获取昵称 */
function getUserNickname(userId: number | undefined): string {
  if (!userId) return ''
  const user = userList.value.find(u => u.id === userId)
  return user?.name || ''
}

defineExpose({
  getUserNickname,
})

const userList = ref<Record[]>([])
const selectedId = ref<number | string | number[]>([])

// 构建 columns 数据
const columns = computed(() => {
  return userList.value.map(user => ({
    label: user.name,
    value: user.id,
  }))
})

watch(
  () => props.modelValue,
  (val) => {
  
    if (props.type === 'radio') {
      // 单选时，如果值为 undefined，使用空字符串避免警告
      selectedId.value = val !== undefined ? val : ''
    } else {
      // 多选时，确保是数组
      selectedId.value = Array.isArray(val) ? val : []
    }
  },
  { immediate: true },
)

async function loadUserList() {
  userList.value = await getmngtformall({business_type:props.business_type})
}

function handleConfirm({ value }: { value: any }) {
  emit('update:modelValue', value)
}

onMounted(() => {
  loadUserList()
})
</script>
