<template>
  <view>
    <web-view
      :src="'data:application/pdf;base64,' + pdfBase64"
      v-if="pdfBase64"
    ></web-view>
  </view>
</template>
<script lang="ts" setup>
const props = defineProps<{
  url?: number | any;
}>();

const pdfBase64 = ref("");

function loadPdf(pdfBuffer) {
  const reader = new FileReader();
  reader.readAsDataURL(new Blob([pdfBuffer], { type: "application/pdf" }));
  reader.onloadend = () => {
    pdfBase64.value = reader.result.split(",")[1]; // 移除data:application/pdf;base64,部分
  };
}
function handleOffice() {

  uni.request({
    url: `${import.meta.env.VITE_SERVER_BASEURL}/file/to/url-to-pdf-stream?token=5eb6422178e24300a6594a1652a33fe6&scureurl=${decodeURIComponent(
      props.url
    )}`,

    method: "GET", // 默认GET，可选POST/PUT/DELETE等

    // #ifndef MP-WEIXIN
    responseType: "arraybuffer",
    // #endif
    // 响应成功
    success: async (res) => {
      console.log(res);
      loadPdf(res.data);
    },
  });
}
handleOffice();
</script>