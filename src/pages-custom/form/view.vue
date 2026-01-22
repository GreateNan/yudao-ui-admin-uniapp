<template>
  <view>
    
    <web-view
      v-if="fileurl"
      :src="fileurl"
      style="width: 100vw; height: 100vh"
    ></web-view>
  </view>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps<{
  url?: number | any;
}>();

const fileurl = ref('');

function handleOffice() {
  uni.request({
    url: `${
      import.meta.env.VITE_SERVER_BASEURL
    }/file/to/url-to-pdf-upload?token=5eb6422178e24300a6594a1652a33fe6&scureurl=${decodeURIComponent(
      props.url
    )}`,

    method: "GET", // 默认GET，可选POST/PUT/DELETE等

    // #ifndef MP-WEIXIN
    responseType: "json",
    // #endif
    // 响应成功
    success: (res) => {
      console.log(res.data.data);
      // 构建PDF.js查看器URL
      // 注意：需要将PDF.js放到服务器，或使用在线版本
      let url=res.data.data
      // let newUrl = url.replace(/mngt-mngt\.oss-cn-beijing\.aliyuncs\.com/, 'oss.mngt.ink');
       let viewerUrl= '/static/pdfjs/web/viewer.html'
      fileurl.value =viewerUrl+ '?file='+encodeURIComponent(url) ;
    },
  });
}
onMounted(() => {
  handleOffice();
});
</script>