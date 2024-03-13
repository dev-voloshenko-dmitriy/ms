<script setup lang="ts">
import BaseLayout from "@/views/layout/base-layout.vue";
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { LoginProvider } from '@/providers/auth/LoginProvider';

import {reactive} from 'vue';

interface FormState {
  email: string;
  password: string;
}

const formState = reactive<FormState>({
  email: '',
  password: ''
});

const onFinish = async (values: any) => {
  let provider = new LoginProvider();
  provider.login(values.email, values.password)
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const layout = {
  wrapperCol: {flex: "auto"},
};

</script>

<template>
  <base-layout>
    <a-row justify="center">
      <a-col :gutter="[8,8]" :xxl="{span: 7}" :xl="{span: 8}" :lg="{span: 10}" :md="{span: 18}">
        <a-row style="margin-bottom: 20px;" justify="center">
          <a-col>
            <h3>Login</h3>
          </a-col>
        </a-row>
        <a-row justify="center">
          <a-col :span="24">
            <a-form
                :model="formState"
                name="basic"
                v-bind="layout"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="Email"
                  name="email"
                  :rules="[{ type: 'email' }]"
              >
                <a-input v-model:value="formState.email" type="email">
                  <template #prefix><MailOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                </a-input>
              </a-form-item>

              <a-form-item
                  label="Password"
                  name="password"
              >
                <a-input v-model:value="formState.password" type="password" placeholder="Password">
                  <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                </a-input>
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ span: 24 }">
                <a-button
                :disabled="formState.email === '' || formState.password === ''"
                type="primary" html-type="submit">Submit</a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

  </base-layout>
</template>

<style scoped>

</style>