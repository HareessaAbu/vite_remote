<template>
    <div>
        <base-fields-text
            v-model="credentials.email"
            autofocus
            :error-messages="validationErrors['email']"
            label="Email/Name"
            type="email"
            @keydown.enter="login"
        />

        <base-fields-text
            v-model="credentials.password"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :error-messages="validationErrors['password']"
            label="Password"
            :type="passwordInputType"
            @click:append="showPassword = !showPassword"
            @keydown.enter="login"
        />

        <!-- no longer using text to specify the variant -->
        <v-btn
            v-if="withForgotPassword"
            color="primary"
            variant="text"
            to="forgot-password"
        >
            <!-- {{ $t('auth.actions.forgotPassword') }} -->
            Forgot password

        </v-btn>

        <v-btn
            block
            class="mt-3 rounded-sm"
            color="primary"
            depressed
            :loading="loggingIn"
            @click="login"
        >
            <!-- {{ $t('auth.actions.login') }} -->
            Login
        </v-btn>

        <v-alert
            class="mt-6 mb-0"
            color="tertiary"
            type="info"
            :value="isMaintenanceMode"
        >
            <!-- {{ $t('general.static.maintenanceInfo') }} -->
            We are currently down for maintenance. Please check back again later.
        </v-alert>
    </div>
    <div style="margin-top: 50px">
       <span>Child component from remote:</span>
        <Hello />
    </div>
</template>

<script>
    import Hello from '@/Hello.vue';

    export default {
        name: 'LoginForm',

        components: { Hello },

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
                    email: 'admin@weap.nl',
                    password: 'admin',
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
                        // await this.$store.commit('page/team/setTeamId', data.default_team_id);

                        // await this.$store.dispatch('auth/validateToken', data.access_token);

                        // this.$emit('authenticated');

                        // this.loggingIn = false;
                        alert('logging in!')
                    })
                    .onValidationError((validation) => {
                        // this.validationErrors = validation?.errors ?? {};

                        alert('logging in!')


                        // this.$emit('authentication-failed', this.validationErrors);
                    })
                    .onError((response) => {

                        alert('logging in!')
                        // if (response.statusCode === 503) {
                        //     this.isMaintenanceMode = true;
                        // }

                        // this.$emit('authentication-failed');
                    })
                    .post({
                        locale: 'en',
                        ...this.credentials,
                    });


                this.loggingIn = false;
            },
        },
    };
</script>
