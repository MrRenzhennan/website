<template>
    <div class="uedit">
    <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
      <el-form-item>
        <el-col :span="22">
        <el-button type="primary" @click="onSubmit">Post</el-button>
        <el-button >Preview</el-button>

        </el-col>
      </el-form-item>

          <el-form-item label="Title:" prop="title">
            <el-col :span="22">
            <el-input v-model="infoForm.title" placeholder="Input Title ..."></el-input>

            </el-col>
          </el-form-item>

          <el-form-item label="Tag:" prop="tag">
            <el-col :span="22">
            <el-input v-model="infoForm.tag"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item >
            <el-col :span="22">
            <div class="edit_container">
              <editor api-key="jfna52ng7buv22eoyd6ol393uhj6uelpvvbahvdsvip883w0" :init="tinyinit" v-model="infoForm.content"></editor>
            </div>
            </el-col>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { publishText } from '../request'
import { getStore, setStore } from '../utils/cache'

  export default {

  data() {
      return {
        tinyinit: {
          selector: "textarea",
          resize: false,
          height: 500,
          autosave_ask_before_unload: false,
          codesample_dialog_width: 600,
          codesample_dialog_height: 425,
          template_popup_width: 600,
          template_popup_height: 450,
          // mentions_fetch: mentionsFetchFunction,
          powerpaste_allow_local_images: true,
          plugins : "autosave",
          toolbar: 'undo redo | image code',
          // without images_upload_url set, Upload tab won't show up
          //images_upload_url: 'http://192.168.150.132:1111/api/v1/uploadImg',
          // we override default upload handler to simulate successful upload
          images_upload_handler: function (blobInfo, success, failure) {
            var xhr, formData;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', 'http://192.168.150.132:1111/api/v1/uploadImg');
            xhr.onload = function() {
              console.log('this', this);

              var json;
              if (xhr.status < 200 || xhr.status >= 300) {
                failure('HTTP Error: ' + xhr.status);
                return;
                }
                json = JSON.parse(xhr.responseText);
                // this.infoForm.imageUrl.push(json.data.picpath);
                setStore('PIC_LIST', json.data.picpath)
                console.log("fasfsaf", getStore('PIC_LIST'));

                success(json.data.picpath);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
          plugins: [
            "a11ychecker advcode advlist anchor autolink codesample colorpicker contextmenu fullscreen help image imagetools",
            " lists link linkchecker media mediaembed noneditable powerpaste preview",
            " searchreplace table template textcolor tinymcespellchecker visualblocks wordcount"
          ], //removed:  charmap insertdatetime print
          external_plugins: {
            mentions: "//www.tinymce.com/pro-demo/mentions/plugin.min.js",
            moxiemanager: "//www.tinymce.com/pro-demo/moxiemanager/plugin.min.js"
          },
          toolbar:
            "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image",
          content_css: [
            "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
            "//www.tiny.cloud/css/content-standard.min.css"
          ]
        },
        infoForm: {
          title: '',
          topicList: 'aaaaaaaa',
          content:'',
          category: '3',
          userId: '1',
          imageUrl: [],
        },
        //表单验证
        rules: {
          title: [
            {required: true, message: 'Please input title.', trigger: 'blur'}
          ],
          content: [
            {required: true, message: 'Please input content.', trigger: 'blur'}
          ]
        },
      }
    },
    computed: {
    },
    methods: {
      onSubmit() {
        this.infoForm.imageUrl.push(getStore('PIC_LIST'));
        publishText(this.infoForm).then(ret => {
          console.log("fafdafsdf", ret);
          if(errcode === 1000){
            this.$router.push({path: '/'});
          }

        });


        this.$refs.infoForm.validate((valid) => {
          if(valid) {
            console.log(valid, this.infoForm);
          }
        });
      }
    },
    components: {
      editor: Editor,
    }
  }
</script>
<style scoped>
.uedit {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 120px;
  padding-right: 30px;
}
.quill-editor{
  height: 400px;
  padding-bottom: 20px;
  background-color: #ffffff;
 }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    display: flex;
    justify-content: space-around;
     align-items: center;
  }
</style>

