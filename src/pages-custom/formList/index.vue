<template>
  <view class="page-container">
    <!-- 顶部导航栏 -->
    <wd-navbar
      title="操作卡"
      left-arrow
      placeholder
      safe-area-inset-top
      fixed
      @click-left="handleBack"
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
            <text class="mr-8rpx text-[#999]">业务类型：</text>
            <text class="">
              <dict-tag
                :type="DICT_TYPE.YWLX"
                :value="item?.business_type"
              
              />
            </text>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">创建时间：</text>
            <text class="line-clamp-1">{{
              formatDateTime(item.createTime[0]) || "-"
            }}</text>
          </view>

          <view class="mb-12rpx flex items-center text-28rpx text-[#666]">
            <text class="mr-8rpx text-[#999]">所属部门：</text>
            <text class="line-clamp-1">{{ item.organizationname }}</text>
          </view>

          <view class="left-0 right-0 bg-white p-24rpx">
            <view class="w-full flex gap-24rpx">
              <wd-button class="flex-1" type="warning"  @click="handleDetail(item)">
                查看操作卡
              </wd-button>
              <wd-button
                class="flex-1"
                type="info"
              
                @click="handleOffice(item)"
              >
                查看源文件
              </wd-button>
            </view>
          </view>
        </view>
      </view>

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

      <!-- 新增按钮 -->
      <!-- <wd-fab
      v-if="hasAccessByCodes(['mngt:form-record:create'])"
      position="right-bottom"
      type="primary"
      :expandable="false"
      @click="handleAdd"
    /> -->
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import type { LoadMoreState } from "@/http/types";
import { onReachBottom, onShow } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { getmngtformpage } from "@/api/custom/record";
import { navigateBackPlus } from "@/utils";
import { DICT_TYPE } from "@/utils/constants";
import { formatDateTime } from "@/utils/date";
import SearchForm from "./modules/search-form.vue";
import { useAccess } from "@/hooks/useAccess";
const { hasAccessByCodes } = useAccess();
definePage({
  style: {
    navigationBarTitleText: "",
    navigationStyle: "custom",
  },
});
/** 新增记录 */
function handleAdd() {
  uni.navigateTo({
    url: "/pages-custom/scfw/form/index",
  });
}
const total = ref(0);
const list = ref<Record[]>([]);
const loadMoreState = ref<LoadMoreState>("loading"); // 加载更多状态

const queryParams = ref({
  pageNo: 1,
  pageSize: 10,
  businessType: undefined,
});

/** 返回上一页 */
function handleBack() {
  navigateBackPlus();
}

/** 查询操作日志列表 */
async function getList() {
  loadMoreState.value = "loading";
  try {
    const data = await getmngtformpage(queryParams.value);
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

/** 加载更多 */
function loadMore() {
  if (loadMoreState.value === "finished") {
    return;
  }
  queryParams.value.pageNo++;
  getList();
}

/** 查看详情 */
function handleDetail(item: Record) {
  uni.navigateTo({
    url: `/pages-custom/formList/detail/index?id=${item.id}`,
  });
}
/** 预览 */
function handleOffice(item: Record) {
 window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
    item.source_file_url
  )}`)
 
}
/** 触底加载更多 */
onReachBottom(() => {
  loadMore();
});
onShow(() => {
  list.value = [];
  getList();
});
/** 初始化 */
// onMounted(() => {
//   getList()
// })
</script>

<style lang="scss" scoped>
</style>
