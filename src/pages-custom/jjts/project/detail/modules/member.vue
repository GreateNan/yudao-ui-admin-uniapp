<template>
  <view class="page-container" style="background: #fff;">
    <!-- 操作日志列表 -->
    <view class="p-24rpx">
      <wd-table :data="list" border>
        <wd-table-col prop="username" label="姓名" ></wd-table-col>
        <wd-table-col prop="postname" label="岗位" width="300"></wd-table-col>
       
      </wd-table>

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
import { getprojectmemberpage } from "@/api/custom/record";
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
  }>(),
  {
    majorId: undefined,
    projectId: undefined,
  }
);
const queryParams = ref({
  pageNo: 1,
  pageSize: 10,
  majorId: props.majorId,
  projectId: props.projectId,
});

/** 查询操作日志列表 */
async function getList() {
  loadMoreState.value = "loading";
  try {
    const data = await getprojectmemberpage(queryParams.value);
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
