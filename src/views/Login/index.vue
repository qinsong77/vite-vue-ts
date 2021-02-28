<template>
   <van-form @submit="onSubmit">
      <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      ></van-field>
      <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      ></van-field>
      <div style="margin: 16px;">
         <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
   </van-form>
</template>

<script lang="ts">
    import { reactive } from 'vue'
    import { defineComponent } from "vue"
    export default defineComponent({
        setup() {
            const state = reactive({
                username: '',
                password: '',
            })
            const onSubmit = (values) => {
                console.log('submit', values)
            }

            return {
                state,
                onSubmit,
            }
        },
    })
</script>
<style scoped>
</style>
