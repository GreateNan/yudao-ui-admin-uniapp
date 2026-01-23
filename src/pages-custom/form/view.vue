<template>
  <view>
    <web-view
      v-if="fileurl"
      :src="fileurl"
      style="width: 100vw; height: 100vh"
    ></web-view>
    <image :src="imageUrl" mode="widthFix" v-if="imageUrl" style="width:100%"/>
    <video :src="videoUrl" v-if="videoUrl"></video>
  </view>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps<{
  url?: number | any;
}>();

const fileurl = ref("");
const imageUrl=ref('')
const videoUrl=ref('')
function typeFun(url) {
  if (
    url.indexOf(".png") != -1 ||
    url.indexOf(".jpg") != -1 ||
    url.indexOf(".gif") != -1
  ) {
    return "image";
  } else if (url.indexOf(".pdf") != -1 || url.indexOf(".PDF") != -1) {
    return "pdf";
  } else if (url.indexOf(".xls") != -1 || url.indexOf(".xlsx") != -1) {
    return "excel";
  } else if (url.indexOf(".docx") != -1 || url.indexOf(".doc") != -1) {
    return "word";
  } else if (url.indexOf(".ppt") != -1 || url.indexOf(".pptx") != -1) {
    return "ppt";
  } else if (url.indexOf(".mp4") != -1) {
    return "mp4";
  } else {
    return "file";
  }
}

function handleOffice() {
  let url = decodeURIComponent(props.url);
  if (
    typeFun(url) == "excel" ||
    typeFun(url) == "word" ||
    typeFun(url) == "ppt"
  ) {
    uni.request({
      url: `${
        import.meta.env.VITE_SERVER_BASEURL
      }/file/to/url-to-pdf-upload?token=5eb6422178e24300a6594a1652a33fe6&scureurl=${url}`,

      method: "GET", // 默认GET，可选POST/PUT/DELETE等

      // #ifndef MP-WEIXIN
      responseType: "json",
      // #endif
      // 响应成功
      success: (res) => {
      
        let urlorg = res.data.data;
   
        let viewerUrl = "/static/pdfjs/web/viewer.html";
        fileurl.value = viewerUrl + "?file=" + encodeURIComponent(urlorg);
      },
    });
  } else if (typeFun(url) == "pdf") {
    let viewerUrl = "/static/pdfjs/web/viewer.html";
    fileurl.value = viewerUrl + "?file=" + encodeURIComponent(url);
    console.log(fileurl.value)
  }else if(typeFun(url) == "image"){
    imageUrl.value=url
  }
  else if(typeFun(url) == "mp4"){
    videoUrl.value=url
  }
}
onMounted(() => {
  handleOffice();
});
</script>