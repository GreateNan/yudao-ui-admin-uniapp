<template>
  <view class="page-container" style="background: #fff">
    <forderPicker
      v-model="forderId"
      :majorId="props.majorId"
      :projectId="props.projectId"
      :type="props.type"
      :key="props.majorId"
    />

    <!-- 搜索组件 -->
    <SearchForm @search="handleQuery" @reset="handleReset" />
    <!-- 操作日志列表 -->
    <view class="p-24rpx">
      <view
        v-for="item in list"
        :key="item.id"
        class="mb-24rpx overflow-hidden rounded-12rpx bg-white shadow-sm"
      >
        <view class="p-24rpx">
          <view class="mb-16rpx flex items-center justify-between">
            <view class="text-32rpx text-[#333] font-semibold">
              {{ item.name }}
            </view>
          </view>
          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">文件类型：</text>
            <text class="line-clamp-1">
              <dict-tag
                :type="DICT_TYPE.MNGT_FILE_TYEP"
                :value="item.fileType"
              />
            </text>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">创建时间：</text>
            <text class="line-clamp-1">{{
              formatDateTime(item.createTime) || "-"
            }}</text>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">创建人：</text>
            <text class="line-clamp-1">{{ item.creatorname }}</text>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">描述：</text>
            <text class="line-clamp-1">{{ item.remark }}</text>
          </view>
          <view class="left-0 right-0 bg-white p-24rpx">
            <view class="w-full flex gap-24rpx">
              <wd-button
                class="flex-1"
                type="warning"
                @click="showVersion(item)"
              >
                历史版本
              </wd-button>
            </view>
          </view>
        </view>
      </view>
      <wd-popup
        v-model="show"
        position="left"
        custom-style="width: 300px;padding-top:50px"
        closable
        @close="show = false"
      >
        <versionList :fileId="fileId" v-if="fileId" :key="fileId" />
      </wd-popup>
      <!-- 加载更多 -->
      <view
        v-if="loadMoreState !== 'loading' && list.length === 0"
        class="py-100rpx text-center"
      >
        <wd-status-tip image="content" tip="暂无数据" />
      </view>
      <wd-loadmore
        v-if="list.length > 0"
        :state="loadMoreState"
        @reload="loadMore"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import type { LoadMoreState } from "@/http/types";
import { onReachBottom, onShow } from "@dcloudio/uni-app";
import { onMounted, ref, watch } from "vue";
import { getprojectfilepage, getfileVersion } from "@/api/custom/record";
import { navigateBackPlus } from "@/utils";
import { DICT_TYPE } from "@/utils/constants";
import { formatDateTime } from "@/utils/date";
import SearchForm from "./modules/search-from.vue";
import forderPicker from "@/pages-custom/form/components/forder-picker.vue";
import versionList from "./modules/versionList.vue";
import { useAccess } from "@/hooks/useAccess";
const { hasAccessByCodes } = useAccess();

const total = ref(0);
const list = ref<Record[]>([]);
const loadMoreState = ref<LoadMoreState>("loading"); // 加载更多状态
const props = withDefaults(
  defineProps<{
    majorId?: number;
    projectId?: number;
    type?: number;
  }>(),
  {
    majorId: undefined,
    projectId: undefined,
    type: undefined,
  }
);
const fileId = ref();
function showVersion(item) {
  show.value = true;
  fileId.value = item.id;
}
const queryParams = ref({
  pageNo: 1,
  pageSize: 10,
  majorId: props.majorId,
  projectId: props.projectId,
  type: props.type,
});
const forderId = ref(undefined);
const show = ref(false);
watch(
  () => props.majorId,
  (val) => {
    console.log(val, "majorId");
    queryParams.value.pageNo = 1;
    list.value = [];
    forderId.value = undefined;
    getList();
  }
);
watch(
  () => forderId.value,
  (val) => {
    console.log(val, "forderId");
    queryParams.value.pageNo = 1;
    list.value = [];
    getList();
  }
);
/** 搜索按钮操作 */
function handleQuery(data?: Record<string, any>) {
  queryParams.value = {
    ...data,
    pageNo: 1,

    pageSize: queryParams.value.pageSize,
  };
  list.value = [];
  getList();
}

/** 重置按钮操作 */
function handleReset() {
  handleQuery();
}
/** 查询操作日志列表 */
async function getList() {
  console.log("list")
  loadMoreState.value = "loading";
  try {
    const data = await getprojectfilepage({
      ...queryParams.value,
      projectdirectoryId: forderId.value,
    });
    list.value = [...list.value, ...data.list];
    total.value = data.total;
    loadMoreState.value =
      list.value.length >= total.value ? "finished" : "loading";
  } catch {
    queryParams.value.pageNo =
      queryParams.value.pageNo > 1 ? queryParams.value.pageNo - 1 : 1;
    loadMoreState.value = "error";
  }
}

/** 加载更多 */
function loadMore() {
  if (loadMoreState.value === "finished") {
    return;
  }
  queryParams.value.pageNo++;
  getList();
}

/** 触底加载更多 */
onReachBottom(() => {
  loadMore();
});

/** 初始化 */
// onMounted(() => {
//   forderId.value = undefined;
//   getList();
// });
</script>

<style lang="scss" scoped>
</style>
