<template>
  <view class="page-container" style="background: #fff">
    <!-- 操作日志列表 -->
    <view class="p-24rpx">
      <view
        v-for="item in list"
        :key="item.id"
        class="mb-24rpx overflow-hidden rounded-12rpx bg-white shadow-sm"
        @click="showVersion(item)"
      >
        <view class="p-24rpx">
          <view class="mb-16rpx flex items-center justify-between">
            <view class="text-32rpx text-[#333] font-semibold">
              {{ item.project }}
            </view>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">创建时间：</text>
            <text class="line-clamp-1">{{
              formatDateTime(item.createTime) || "-"
            }}</text>
          </view>

          <!-- <view class="left-0 right-0 bg-white p-24rpx">
            <view class="w-full flex gap-24rpx">
              <wd-button class="flex-1" type="warning" @click="showVersion(item)">
                查看详情
              </wd-button>
            </view>
          </view> -->
        </view>
      </view>
      <wd-popup
        v-model="show"
        position="top"
        custom-style="height: 300px;padding-top:50px"
        closable
        @close="show = false"
      >

      

      <wd-cell-group border>
        <!-- <wd-cell title="编号" :value="String(detail?.id ?? '-')" /> -->
       <wd-cell title="日志项目" :value="detail?.project || '-'" />
        <wd-cell title="日志时间">
             {{      formatDateTime(detail.createTime ) || "-"}}
        </wd-cell>
        <wd-cell title="日志内容" :value="detail?.log || '-'" />
        <wd-cell title="备注" :value="detail?.remark || '-'" />
      
      
        
      </wd-cell-group>
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
import { logopage, logoget } from "@/api/custom/record";
import { navigateBackPlus } from "@/utils";
import { DICT_TYPE } from "@/utils/constants";
import { formatDateTime } from "@/utils/date";

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
  getDetail()
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
  () => forderId.value,
  (val) => {
    console.log(val, "forderId");
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
const detail=ref()
async function getDetail() {
    console.log(fileId.value)
  const data = await logoget(fileId.value);
  detail.value=data
}
/** 查询操作日志列表 */
async function getList() {
  loadMoreState.value = "loading";
  try {
    const data = await logopage({
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
onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
</style>
