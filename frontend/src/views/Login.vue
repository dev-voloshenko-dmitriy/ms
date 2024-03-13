<script setup lang="ts">
import BaseLayout from "@/views/layout/base-layout.vue";


import {reactive} from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const layout = {
  wrapperCol: {flex: "auto"},
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
</script>

<template>
  <base-layout>
    <a-row justify="center">
      <a-col :span="6">
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
                :validate-messages="validateMessages"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  label="Username"
                  name="username"
                  :rules="[{ required: true, message: 'Please input your username!' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>

              <a-form-item
                  label="Password"
                  name="password"
                  :rules="[{ required: true, message: 'Please input your password!' }]"
              >
                <a-input-password v-model:value="formState.password"/>
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ span: 24 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
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