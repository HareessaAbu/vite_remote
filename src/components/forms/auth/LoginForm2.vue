<template>
    <div>
        <label for="email">Email/Name</label>
        <input
            id="email"
            type="email"
            v-model="credentials.email"
            autofocus
            @keydown.enter="login"
        />
        <span class="error-message">{{ validationErrors['email'] }}</span>

        <label for="password">Password</label>
        <input
            id="password"
            type="{{ passwordInputType }}"
            v-model="credentials.password"
            @keydown.enter="login"
        />
        <i
            class="password-icon"
            @click="showPassword = !showPassword"
        >{{ showPassword ? 'Hide' : 'Show' }}</i>
        <span class="error-message">{{ validationErrors['password'] }}</span>

        <button
            v-if="withForgotPassword"
            class="forgot-password"
            onclick="window.location.href='forgot-password'"
        >Forgot password</button>

        <button
            class="login-btn mt-3 rounded-sm"
            :disabled="loggingIn"
            onclick="login()"
        >Login</button>

        <div
            class="maintenance-alert mt-6 mb-0"
            v-if="isMaintenanceMode"
        >
            We are currently down for maintenance. Please check back again later.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        props: {
            withForgotPassword: {
                type: Boolean,
                default: true,
            },
        },

        data () {
            return {
                showPassword: false,

                credentials: {
                    email: null,
                    password: null,
                    device_name: 'webclient',
                },

                validationErrors: {},

                loggingIn: false,

                isMaintenanceMode: false,
            };
        },

        computed: {
            passwordInputType () {
                return this.showPassword ? 'text' : 'password';
            },
        },

        // created () {
        //     this.credentials.email = this.$route.query.email;

        //     if (this.$route.query.registered) {
        //         setTimeout(() => this.$snackbar.showSuccess("Registration successful"), 500);
        //     }
        // },

        methods: {
            async login () {
                this.loggingIn = true;

                await api.request(`auth/token`)
                    .onSuccess(async (data) => {
                        await this.$store.commit('page/team/setTeamId', data.default_team_id);

                        await this.$store.dispatch('auth/validateToken', data.access_token);

                        this.$emit('authenticated');

                        this.loggingIn = false;
                    })
                    .onValidationError((validation) => {
                        this.validationErrors = validation?.errors ?? {};

                        this.$emit('authentication-failed', this.validationErrors);
                    })
                    .onError((response) => {
                        if (response.statusCode === 503) {
                            this.isMaintenanceMode = true;
                        }

                        this.$emit('authentication-failed');
                    })
                    .post({
                        locale: this.$store.state.localization.languageCode,
                        ...this.credentials,
                    });

                this.loggingIn = false;
            },
        },
    };
</script>
