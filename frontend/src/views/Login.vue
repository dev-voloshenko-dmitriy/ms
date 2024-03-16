<script setup lang="ts">
import BaseLayout from "@/views/layout/base-layout.vue";
import {LockOutlined, MailOutlined} from '@ant-design/icons-vue';
import {LoginProvider} from '@/providers/auth/LoginProvider';
import {message} from 'ant-design-vue';
import {ref, reactive} from 'vue';

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
  labelCol: {span: 5},
  wrapperCol: {flex: "auto"},
};

const key = ref(0);

const openMessage = () => {
  const hide = message.loading(
      'Action in progress..',
        key.value
  );

  setTimeout(() => {
    message.destroy('Action in progress..')
  }, 9000);
};
</script>

<template>
  <base-layout>
    <a-flex style="height: 100%" gap="middle" justify="center" align="center">
      <a-col :xxl="{span: 7}" :xl="{span: 8}" :lg="{span: 10}" :md="{span: 18}">
        <a-card :bordered="true">
          <template #title><h3 style="text-align: center">Login</h3></template>
          <a-form
              :model="formState"
              name="basic"
              v-bind="layout"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed">
            <a-button type="primary" @click="openMessage">Open the message box (update by key)</a-button>
            <a-form-item
                label="Email"
                name="email"
                :rules="[{ type: 'email' }]">
              <a-input v-model:value="formState.email" type="email">
                <template #prefix>
                  <MailOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
                label="Password"
                name="password">
              <a-input v-model:value="formState.password" type="password" placeholder="Password">
                <template #prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item name="remember" :wrapper-col="{align: 'center',  span: 14 }">
              <a-button
                  :disabled="formState.email === '' || formState.password === ''"
                  type="primary" html-type="submit">Submit
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-flex>
  </base-layout>
</template>

<style scoped>

</style>