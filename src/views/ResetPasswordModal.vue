<template>
    <v-container>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title class="text-h5 text-center">
                    비밀번호 변경하기
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="resetPassword">
                        <v-text-field label="email" v-model="email" type="email" prepend-icon="mdi-email" required></v-text-field>
                        <v-text-field label="기존 비밀번호" v-model="asIsPassword" type="password" prepend-icon="mdi-lock" required></v-text-field>
                        <v-text-field label="신규 비밀번호" v-model="toBePassword" type="password" prepend-icon="mdi-lock" required></v-text-field>
                        <v-btn color="red" @click="resetPassword" block>비밀번호 재설정 요청</v-btn>
                        <v-btn color="primary" @click="closeModal" block>닫기</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            dialog: true,
            email: null,
            asIsPassword: null,
            toBePassword: null
        };
    },
    methods: {
        async resetPassword() {
            const body = {
                email: this.email,
                asIsPassword: this.asIsPassword,
                toBePassword: this.toBePassword
            }
            try {
                //  {body} 라고 쓰면 body : {}
                //  body 라고 쓰면 {}
                const response = await axios.patch(`${process.env.VUE_APP_API_BASE_URL}/member/reset-password`, body)
                console.log(response.data);
                alert("정상 변경 처리 되었습니다.");
            } catch (e) {
                console.log(e);
                alert(e.response?.data?.error_message || "입력값을 확인해주세요.");
            }
        },
        closeModal() {
            this.dialog = false;
            this.$emit('update:dialog', false);
        }
    },
};
</script>
