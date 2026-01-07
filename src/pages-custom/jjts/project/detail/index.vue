<template>
  <view class="page-container" v-if="formData">
    <!-- 顶部导航栏 -->
    <wd-navbar
      title="项目详情"
      left-arrow
      placeholder
      safe-area-inset-top
      fixed
      @click-left="handleBack"
    />

    <!-- 详情内容 -->
    <view>
      <wd-collapse v-model="wdvalue">
        <wd-collapse-item title="项目详情" name="item1">
          <wd-cell-group border>
            <!-- <wd-cell title="编号" :value="String(formData?.id ?? '-')" /> -->
            <!-- <wd-cell v-if="formData?.traceId" title="链路追踪" :value="formData.traceId" />
        <wd-cell title="操作人编号" :value="String(formData?.userId ?? '-')" /> -->
            <wd-cell title="项目优先级">
              <dict-tag
                :type="DICT_TYPE.MNGT_PROJECTPRIORITY"
                :value="formData?.projectPriority"
              />
            </wd-cell>
            <wd-cell title="项目状态">
              <dict-tag
                :type="DICT_TYPE.MNGT_PROJECTSTATUS"
                :value="formData?.projectType"
              />
            </wd-cell>
            <wd-cell
              title="开始日期"
              :value="formatDateTime(formData.startTime)"
            />
            <wd-cell
              title="结束日期"
              :value="formatDateTime(formData.endTime)"
            />
            <wd-cell title="项目名" :value="formData?.name || '-'" />

            <wd-cell title="服务对象" :value="formData?.bojectname || '-'" />

            <wd-cell title="项目类型" :value="formData?.majorname || '-'" />
            <wd-cell title="项目描述" :value="formData?.projectDesc || '-'" />
          </wd-cell-group>
        </wd-collapse-item>
      </wd-collapse>
      <view
        class="tabsList"
        v-if="
          buttons.includes('hd-xm-check') ||
          roles.includes(1) ||
          roles.includes(2) ||
          roles.includes(3)
        "
      >
        <view
          class="tabsItem"
          :class="{
            current: current == index,
          }"
          @click="changeTab(index)"
          v-for="(item, index) in ['项目部', '各专业']"
          :key="index"
          >{{ item }}</view
        >
      </view>
      <wd-select-picker
        v-if="current == 1"
        v-model="majorId"
        label="选择专业"
        :columns="majorList"
        type="radio"
        filterable
        placeholder="请选择专业"
        value-key="majorId"
        label-key="majorName"
        @confirm="confirm"
      />

      <wd-tabs v-model="currenttab" @change="changetab">
        <block>
          <wd-tab title="人员管理" name="0"> </wd-tab>
        </block>
        <block
          v-if="
            buttons.includes('hd-base-list') ||
            roles.includes(3) ||
            roles.includes(2)
          "
        >
          <wd-tab title="基础文件" name="1"> </wd-tab>
        </block>
        <block
          v-if="
            current == 0 &&
            (buttons.includes('hd-zz-list') ||
              roles.includes(3) ||
              roles.includes(2))
          "
        >
          <wd-tab title="安全管理" name="2"> </wd-tab>
        </block>

        <block
          v-if="
            buttons.includes('hd-aq-list') ||
            roles.includes(3) ||
            roles.includes(2)
          "
        >
          <wd-tab title="资质管理" name="3"> </wd-tab>
        </block>
        <block v-if="current == 0">
          <wd-tab title="抄送人员" name="4"> </wd-tab>
        </block>
        <block
          :key="5"
          v-if="
            current == 1 &&
            (buttons.includes('hd-log-list') ||
              roles.includes(3) ||
              roles.includes(2))
          "
        >
          <wd-tab title="调试日志" name="5"> </wd-tab>
        </block>

        <block
          v-if="
            current == 0 &&
            (buttons.includes('hd-kq-list') ||
              roles.includes(3) ||
              roles.includes(2))
          "
        >
          <wd-tab title="考勤管理" name="6"> </wd-tab>
        </block>

        <block
          v-if="
            current == 1 &&
            (buttons.includes('hd-jl-list') ||
              roles.includes(3) ||
              roles.includes(2))
          "
        >
          <wd-tab title="操作卡" name="7"> </wd-tab>
        </block>
      </wd-tabs>

      <member
        :key="majorId"
        :majorId="majorId"
        :projectId="formData.id"
        v-if="currenttabKey == 0"
      />
      <template v-if="current == 0">
        <file
          :key="currenttab"
          :majorId="majorId"
          :projectId="formData.id"
          :type="{ '1': 0, '2': 1, '3': 2, '6': 3 }[currenttabKey]"
          v-if="['1', '2', '3', '6'].includes(currenttabKey)"
        />
      </template>

      <copyMember
        :key="majorId"
        :majorId="majorId"
        :projectId="formData.id"
        v-if="currenttabKey == 4 && current == 0"
      />
      <log
        :key="majorId"
        :majorId="majorId"
        :projectId="formData.id"
         :buttons="buttons"
        v-if="currenttabKey == 5 && current == 1"
      />
      <record
        :key="majorId"
        :majorId="majorId"
        :projectId="formData.id"
        :objectId="formData.objectId"
        :buttons="buttons"
        v-if="currenttabKey == 7 && current == 1"
      ></record>
      <template v-if="current == 1">
        <file
          :key="currenttab"
          :majorId="majorId"
          :projectId="formData.id"
          :type="{ '1': 0, '3': 2 }[currenttabKey]"
          v-if="['1', '3'].includes(currenttabKey)"
        />
      </template>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import { onMounted, ref } from "vue";
import { useToast } from "wot-design-uni";
import { getprojectget, deleRecord, getmajor } from "@/api/custom/record";
import { navigateBackPlus } from "@/utils";
import { DICT_TYPE } from "@/utils/constants";
import { formatDateTime } from "@/utils/date";
import { useAccess } from "@/hooks/useAccess";
import member from "./modules/member.vue";
import file from "./modules/file/index.vue";
import copyMember from "./modules/copyMember.vue";

import log from "./modules/log.vue";
import record from "./record/index.vue";
const deleting = ref(false);
const props = defineProps<{
  id?: number | any;
}>();
const { hasAccessByCodes } = useAccess();
definePage({
  style: {
    navigationBarTitleText: "",
    navigationStyle: "custom",
  },
});
const wdvalue = ref<string[]>([]);
const toast = useToast();

const current = ref(0); //0 项目 1各专业

const currenttab = ref(0); //
function changeTab(index) {
  console.log(index);
  current.value = index;
  if (index == 1) {
    majorList.value.length && (majorId.value = majorList.value[0].majorId);
  } else {
    majorId.value = formData.value.majorId;
  }
  currenttab.value = 0;
}

const formData = ref<Record>();
/** 编辑记录 */
function handleEdit() {
  uni.navigateTo({
    url: `/pages-custom/scfw/form/index?id=${props.id}`,
  });
}
const currenttabKey = ref(0); //
function changetab(e) {
  console.log(e);
  currenttabKey.value = e.name;
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
  navigateBackPlus("/pages-custom/jjts/project/index");
}

/** 获取请求 URL */
// TODO @AI：放在界面里，这里不要这么搞；
function getRequestUrl() {
  if (formData.value?.requestMethod && formData.value?.requestUrl) {
    return `${formData.value.requestMethod} ${formData.value.requestUrl}`;
  }
  return "-";
}
const buttons = ref([]);
const roles = ref([]);
const majorList = ref([]);
const majorId = ref();
/** 加载操作卡详情 */
async function getDetail() {
  if (!props.id) {
    return;
  }
  try {
    toast.loading("加载中...");
    formData.value = await getprojectget(props.id);

    buttons.value = formData.value.projectpost;
    roles.value = formData.value.projectrole;
    majorId.value = formData.value.majorId;

    let a = await getmajor(props.id);
    majorList.value = a.projectmajorlist;
    if (
      !buttons.value.includes("hd-xm-check") &&
      !roles.value.includes(1) &&
      !roles.value.includes(2) &&
      !roles.value.includes(3)
    ) {
      current.value = 1;
      console.log("aaa");
      majorList.value.length && (majorId.value = majorList.value[0].majorId);
    }
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
.tabsList {
  width: calc(100% - 48rpx);
  padding: 25rpx 24rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  .tabsItem {
    width: 326rpx;
    height: 76rpx;
    line-height: 76rpx;
    text-align: center;
    border-radius: 35rpx;
    color: #333333;
    font-size: 28rpx;
    background: #f5f5f5;
  }
  .current {
    background: linear-gradient(
      270deg,
      rgba(106, 227, 246, 0.37) -55%,
      #0d62b2 100%
    );
    border: none;
    color: #ffffff;
  }
}
</style>
