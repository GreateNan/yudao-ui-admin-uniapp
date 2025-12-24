<template>
  <wd-upload
    v-model:file-list="fileList"
    :upload-method="customUpload"
    accept="image"
    multiple
    :limit="9"
  />
</template>
<script lang="ts" setup>
import type {
  UploadFile,
  UploadMethod,
} from "wot-design-uni/components/wd-upload/types";
import { ref } from "vue";

import { getEnvBaseUrl, } from "@/utils/index";
const props = withDefaults(defineProps<{
  modelValue?: any
 
}>(), {
 modelValue:[]
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any | []): void
}>()

const fileList = ref<any[]>([])
/** 监听外部值变化，回显选中值 */
watch(
  () => props.modelValue,
  (val) => {
   
   if(val && val.length){
    fileList.value=val.map(res=>{
        return {url:res}
    })
   }
   
  },
  { immediate: true },
)


/** 自定义上传方法 */
const customUpload: UploadMethod = (file, formData, options) => {
  const uploadTask = uni.uploadFile({
    url: `${getEnvBaseUrl()}/infra/file/upload`,
    header: {
      ...options.header,
    },
    name: options.name,
    fileType: options.fileType,
    formData,
    filePath: file.url,
    success(res) {
      if (res.statusCode === options.statusCode) {
        options.onSuccess(res, file, formData);
      

       let temp= fileList.value
        .filter(file => file.status === 'success')
        .map((file) => {
          // 尝试从响应中解析 URL
          if (file.response) {
            try {
              const res = typeof file.response === 'string' ? JSON.parse(file.response) : file.response
              return res.data || file.url
            } catch {
              return file.url
            }
          }
          return file.url
        })
         emit('update:modelValue', temp)
      } else {
        options.onError({ ...res, errMsg: res.errMsg || "" }, file, formData);
      }
    },
    fail(err) {
      options.onError(err, file, formData);
    },
  });
  uploadTask.onProgressUpdate((res) => {
    options.onProgress(res, file);
  });
};
</script>