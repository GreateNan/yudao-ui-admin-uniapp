<template>
  <view class="page-container">
    <!-- 顶部导航栏 -->
    <wd-navbar
      :title="getTitle"
      left-arrow
      placeholder
      safe-area-inset-top
      fixed
      @click-left="handleBack"
    />

    <!-- 表单区域 -->
    <view>
      <wd-form ref="formRef" :model="formData" :rules="formRules">
        <wd-cell-group border>
          <wd-input
            v-model="formData.name"
            label="记录卡名称"
            label-width="180rpx"
            prop="name"
            clearable
            placeholder="请输入记录卡名称"
          />
          <DeptPicker
            v-model="formData.organizationId"
            label="归属部门"
            prop="organizationId"
          />
          <formPicker
            v-model="formData.formId"
            :disabled="props.id"
            prop="formId"
            label="操作卡"
          />

          <objectPicker
            v-model="formData.objectId"
            prop="objectId"
            label="服务对象"
          />
          <objectPicker
            label="关联设备"
            prop="deviceId"
            v-if="formData.objectId"
            v-model="formData.deviceId"
            :rootId="formData.objectId"
          />
          <wd-cell title="状态" title-width="180rpx" center prop="status">
            <wd-switch
              v-model="formData.status"
              :active-value="CommonStatusEnum.ENABLE"
              :inactive-value="CommonStatusEnum.DISABLE"
            />
          </wd-cell>
          <wd-textarea
            v-model="formData.remark"
            label="备注"
            label-width="180rpx"
            placeholder="请输入备注"
            :maxlength="200"
            show-word-limit
            clearable
          />
        </wd-cell-group>
      </wd-form>
    </view>

    <!-- 底部保存按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white p-24rpx">
      <wd-button
        type="primary"
        block
        :loading="formLoading"
        @click="handleSubmit"
      >
        保存
      </wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import { computed, onMounted, ref, watch } from "vue";
import { useToast } from "wot-design-uni";
import { createRecord, getRecord, updateRecord } from "@/api/custom/record";
import { getIntDictOptions } from "@/hooks/useDict";
import DeptPicker from "@/pages-system/dept/form/components/dept-picker.vue";
import formPicker from "@/pages-custom/form/components/form-picker.vue";
import objectPicker from "@/pages-custom/form/components/object-picker.vue";
import { navigateBackPlus } from "@/utils";
import { CommonStatusEnum, DICT_TYPE } from "@/utils/constants";
import { isEmail, isMobile } from "@/utils/validator";

const props = defineProps<{
  id?: number | any;
}>();

definePage({
  style: {
    navigationBarTitleText: "",
    navigationStyle: "custom",
  },
});

const toast = useToast();
const getTitle = computed(() => (props.id ? "编辑记录" : "新增记录"));
const formLoading = ref(false);
const formData = ref<Record>({
  id: undefined,
  name: "",
  organizationId: undefined,
  formId: undefined,
  objectId: undefined,
  deviceId: undefined,
  status: CommonStatusEnum.ENABLE,
  remark: "",
  businessType: "scfw",
});

watch(
  () => formData.objectId,
  (val) => {
    console.log(val);
    formData.deviceId = undefined;
  }
);
const formRules = {
  name: [{ required: true, message: "记录卡名称不能为空" }],
  organizationId: [{ required: true, message: "归属部门不能为空" }],
  formId: [{ required: true, message: "操作卡不能为空" }],
  objectId: [{ required: true, message: "服务对象不能为空" }],
  deviceId: [{ required: true, message: "关联设备不能为空" }],
  status: [{ required: true, message: "状态不能为空" }],
};
const formRef = ref();

/** 返回上一页 */
function handleBack() {
  navigateBackPlus("/pages-custom/scfw/index");
}

/** 加载用户详情 */
async function getDetail() {
  if (!props.id) {
    return;
  }
  formData.value = await getRecord(Number(props.id));
}

/** 提交表单 */
async function handleSubmit() {
  const { valid } = await formRef.value.validate();
  if (!valid) {
    return;
  }

  formLoading.value = true;
  try {
    if (props.id) {
      await updateRecord(formData.value);
      toast.success("修改成功");
    } else {
      await createRecord(formData.value);
      toast.success("新增成功");
    }
    setTimeout(() => {
      handleBack();
    }, 500);
  } finally {
    formLoading.value = false;
  }
}

/** 初始化 */
onMounted(() => {
  getDetail();
});
</script>

<style lang="scss" scoped>
</style>
