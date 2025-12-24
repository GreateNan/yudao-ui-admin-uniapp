<template>
  <view class="page-container">
    <!-- 顶部导航栏 -->
    <wd-navbar
      title="我的记录详情"
      left-arrow
      placeholder
      safe-area-inset-top
      fixed
      @click-left="handleBack"
    />

    <!-- 详情内容 -->
    <view>
      <wd-cell-group border>
        <wd-cell title="编号" :value="String(formData?.id ?? '-')" />
        <!-- <wd-cell v-if="formData?.traceId" title="链路追踪" :value="formData.traceId" />
        <wd-cell title="操作人编号" :value="String(formData?.userId ?? '-')" /> -->
        <wd-cell title="业务类型">
          <dict-tag :type="DICT_TYPE.YWLX" :value="formData?.businessType" />
        </wd-cell>
        <wd-cell title="操作人名字" :value="formData?.createName || '-'" />
        <wd-cell title="记录名" :value="formData?.name || '-'" />
        <!-- <wd-cell title="操作人 IP" :value="formData?.userIp || '-'" />
        <wd-cell title="操作人 UA" :value="formData?.userAgent || '-'" />
        <wd-cell title="操作模块" :value="formData?.type || '-'" />
     
        <wd-cell title="操作内容" :value="formData?.action || '-'" />
        <wd-cell v-if="formData?.extra" title="操作拓展参数" :value="formData.extra" />
        <wd-cell title="请求 URL" :value="getRequestUrl()" />
        <wd-cell title="操作时间" :value="formatDateTime(formData?.createTime) || '-'" />
        <wd-cell title="业务编号" :value="String(formData?.bizId ?? '-')" /> -->
      </wd-cell-group>

      <view class="fixed bottom-0 left-0 right-0 bg-white p-24rpx">
        <view class="w-full flex gap-24rpx"   v-if="hasAccessByCodes(['mngt:form-record:update'])">
          <wd-button class="flex-1" type="warning" @click="handleEdit">
            编辑
          </wd-button>
          <wd-button
            v-if="hasAccessByCodes(['mngt:form-record:delete'])"
            class="flex-1"
            type="info"
            :loading="deleting"
            @click="handleDelete"
          >
            删除
          </wd-button>
          <wd-button class="flex-1" type="error" @click="execute"   v-if="hasAccessByCodes(['mngt:form-record:update'])">
            执行操作卡
          </wd-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import { onMounted, ref } from "vue";
import { useToast } from "wot-design-uni";
import { getRecord,deleRecord } from "@/api/custom/record";
import { navigateBackPlus } from "@/utils";
import { DICT_TYPE } from "@/utils/constants";
import { formatDateTime } from "@/utils/date";
import { useAccess } from '@/hooks/useAccess'
const deleting = ref(false);
const props = defineProps<{
  id?: number | any;
}>();
const { hasAccessByCodes } = useAccess()
definePage({
  style: {
    navigationBarTitleText: "",
    navigationStyle: "custom",
  },
});

const toast = useToast();
const formData = ref<Record>();
/** 编辑记录 */
function handleEdit() {
  uni.navigateTo({
    url: `/pages-system/user/form/index?id=${props.id}`,
  });
}
// 执行记录
function execute() {
  uni.navigateTo({
    url: `/pages-custom/form/index?id=${props.id}`,
  });
}
/** 删除记录 */
function handleDelete() {
  if (!props.id) {
    return;
  }
  uni.showModal({
    title: "提示",
    content: "确定要删除当前数据吗？",
    success: async (res) => {
      if (!res.confirm) {
        return;
      }
      deleting.value = true;
      try {
        await deleRecord(Number(props.id));
        toast.success("删除成功");
        setTimeout(() => {
          handleBack();
        }, 500);
      } finally {
        deleting.value = false;
      }
    },
  });
}

/** 返回上一页 */
function handleBack() {
  navigateBackPlus("/pages-custom/scfw/index");
}

/** 获取请求 URL */
// TODO @AI：放在界面里，这里不要这么搞；
function getRequestUrl() {
  if (formData.value?.requestMethod && formData.value?.requestUrl) {
    return `${formData.value.requestMethod} ${formData.value.requestUrl}`;
  }
  return "-";
}

/** 加载操作卡详情 */
async function getDetail() {
  if (!props.id) {
    return;
  }
  try {
    toast.loading("加载中...");
    formData.value = await getRecord(props.id);
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
</style>
