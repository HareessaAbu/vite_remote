<template>
    <v-card
        class="light-grey text-center"
        elevation="3"
        outlined
        width="600"
    >
        <v-row no-gutters>
            <v-col class="grow" />

            <v-col class="shrink">
                <v-card-title class="primary--text text-no-wrap">
                    Login
                </v-card-title>
            </v-col>

            <v-col class="grow d-flex justify-end align-center">
                <div class="mr-4">
                    <!-- <AppLanguageSelect offset-x right transition="slide-x-transition" /> -->
                </div>
            </v-col>
        </v-row>

        <v-card-text>
            <LoginForm />
        </v-card-text>
    </v-card>
</template>

<script>
    // import AppLanguageSelect from '@/components/AppLanguageMenu';
    import LoginForm from '@/components/forms/auth/LoginForm';

    export default {
        name: 'Login',

        components: { LoginForm },

        methods: {
            // authenticated () {
            //     this.$router.replace(this.$route.query.redirect || '/');
            // },
        },
    };
</script>
