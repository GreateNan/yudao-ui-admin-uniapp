<template>
  <view class="page-container">
    <!-- 顶部导航栏 -->
    <wd-navbar
      title="项目"
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
        @click="handleDetail(item)"
      >
        <wd-card type="rectangle">
          <template #title>
            <view class="title">
              <view>{{ formatDateTime(item.createTime[0]) || "-" }}</view>
              <view class="title-tip">
                <wd-icon
                  name="warning"
                  size="14px"
                  custom-style="vertical-align: bottom"
                />
                {{ item.majorname }}
              </view>
            </view>
          </template>
          <view style="height: 40px" class="content">
            <img
              :src="item.imgUrl"
              alt="joy"
              style="border-radius: 4px; margin-right: 24rpx:width:100rpx;height:100rpx"
            />
            <view style="margin-left: 30rpx">
              <view style="color: rgba(0, 0, 0, 0.85); font-size: 16px">{{
                item.name
              }}</view>
              <view style="color: rgba(0, 0, 0, 0.25); font-size: 12px"
                >创建人：{{ item.creatorname }}</view
              >
                <view style="color: rgba(0, 0, 0, 0.25); font-size: 12px"
                >人数：{{ item.projectmenber  }}</view
              >
            </view>
          </view>

          <template #footer>
            <view>
              <wd-button size="small" plain>查看详情</wd-button>
            </view>
          </template>
        </wd-card>
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
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Record } from "@/api/custom/record";
import type { LoadMoreState } from "@/http/types";
import { onReachBottom, onShow } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { getprojectpage } from "@/api/custom/record";
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
  majorId: 119,
});

/** 返回上一页 */
function handleBack() {
  navigateBackPlus();
}

/** 查询操作日志列表 */
async function getList() {
  loadMoreState.value = "loading";
  try {
    const data = await getprojectpage(queryParams.value);
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
    url: `/pages-custom/jjts/project/detail/index?id=${item.id}`,
  });
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
.content,
.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.content {
  justify-content: flex-start;
}
.title {
  justify-content: space-between;
}
.title-tip {
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}
</style>
