<template>
  <view class="page-container">
    <wd-navbar
      title="操作卡"
      left-arrow
      placeholder
      safe-area-inset-top
      fixed
      @click-left="handleBack"
    />

    <form-create
      v-model="formData"
      v-model:api="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  

     <view class="safe-area-inset-bottom fixed bottom-0 left-0 right-0 bg-white p-24rpx" style="z-index: 10;">
      <wd-button
        type="primary"
        block
        :loading="formLoading"
        @click="onSubmit"
      >
        提交操作卡
      </wd-button>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { getRecord, updateRecord } from "@/api/custom/record";
import { ref, onMounted } from "vue";
import { navigateBackPlus } from "@/utils";
import { useToast } from "wot-design-uni";
const toast = useToast();
const props = defineProps<{
  id?: number | any;
}>();
definePage({
  style: {
    navigationBarTitleText: "",
    navigationStyle: "custom",
  },
});
const option = ref();
const rule = ref();

const fapi = ref(null);
const formData = ref({});
const formLoading = ref(false);
const onSubmit = async () => {
  console.log(formData.value, "提交表单");

  //todo 提交表单

  formLoading.value = true;
  console.log(props.id)
  try {
    if (props.id) {
      await updateRecord({ id: props.id, variables: formData.value });
      toast.success("修改成功");
    }
    setTimeout(() => {
      handleBack();
    }, 500);
  } finally {
    formLoading.value = false;
  }
};

// 解码表单 Fields
function decodeFields(fields: string[]) {
  const rule: object[] = [];
  fields.forEach((item) => {
    rule.push(formCreate.parseJson(item));
  });
  return rule;
}
/** 返回上一页 */
function handleBack() {
  navigateBackPlus("");
}
/** 加载操作卡详情 */
async function getDetail() {
  if (!props.id) {
    return;
  }
  try {
    toast.loading("加载中...");
    const { conf, fields, variables } = await getRecord(props.id);
    option.value = formCreate.parseJson(conf);
    rule.value = decodeFields(fields);
    formData.value = variables;
  } finally {
    toast.close();
  }
}
/** 初始化 */
onMounted(() => {
  getDetail();
});
</script>
<style lang="scss" scoped>
.page-container {
  padding: 20rpx;
  padding-bottom: 200rpx;
}
</style>