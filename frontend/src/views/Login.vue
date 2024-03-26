<script setup lang="ts">
import BaseLayout from "@/views/layout/base-layout.vue";
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { LoginProvider } from '@/providers/auth/LoginProvider';
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import type { AuthResponseProvider } from "@/providers/auth/AuthResponseProvider";
import { storeApp } from "@/stores/stores";
import router from "@/router";
import type {FormLoginState} from "@/formInterface/formLogin/FormLoginState";
import type {FormLoginError} from "@/formInterface/formLogin/FormLoginError";

const openMessage = () => {
	message.loading('Выполняем вход', 0);
};

const formState = reactive<FormLoginState>({
	email: '',
	password: ''
});

let ErrorForm = reactive<FormLoginError>({
	messages: [],
});

const onFinish = async (values: any) => {
	let provider: LoginProvider = new LoginProvider();
	let response: AuthResponseProvider = await provider.login(formState);
	
	message.destroy();

	if (response.status === 200) {
		ErrorForm.messages = [];
		message.success('Вход успешно выполнен');

		const store = storeApp();
		store.saveAuthorizationData(response.data.tokin);
		router.push('/');

	} else {
		ErrorForm.messages = response.data.messages;
		message.error('Не удалось войти');
	}

};

const layout = {
	labelCol: { span: 5 },
	wrapperCol: { flex: "auto" },
};

</script>

<template>
	<base-layout>
		<a-flex  style="height: 100%" gap="middle" justify="center" align="center">
			<a-col :xxl="{ span: 7 }" :xl="{ span: 8 }" :lg="{ span: 10 }" :md="{ span: 18 }">
				<a-alert v-for="item in ErrorForm.messages" style="margin-bottom: 10px;" type="error" :message="item" 
					banner closable />
				<a-card class="shadow-md" :bordered="true">
					<template #title>
						<h3 style="text-align: center">Войти</h3>
					</template>
					<a-form :model="formState" name="basic" v-bind="layout" autocomplete="off" @finish="onFinish">
						<a-form-item label="Email" name="email" :rules="[{ type: 'email' }]">
							<a-input v-model:value="formState.email" type="email">
								<template #prefix>
									<MailOutlined style="color: rgba(0, 0, 0, 0.25)" />
								</template>
							</a-input>
						</a-form-item>

						<a-form-item label="Password" name="password">
							<a-input v-model:value="formState.password" type="password" placeholder="Password">
								<template #prefix>
									<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
								</template>
							</a-input>
						</a-form-item>

						<a-form-item name="remember" :wrapper-col="{ align: 'center', span: 14 }">
							<a-button 
								@click="openMessage" 
								:disabled="formState.email === '' || formState.password === ''" 
								type="primary"
								html-type="submit">
								Войти
							</a-button>
						</a-form-item>
					</a-form>
				</a-card>
			</a-col>
		</a-flex>
	</base-layout>
</template>