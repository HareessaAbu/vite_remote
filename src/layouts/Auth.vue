<template>
    <v-app>
        <core-view>
            <v-container class="background-gradient" style="height: 100vh; padding-top: 100px;" fluid>
                <v-row justify="center">
                    <router-view />
                        <!-- <v-slide-y-reverse-transition leave-absolute>
                            <component :is="Component" />
                        </v-slide-y-reverse-transition> -->
                    <!-- </router-view> -->
                </v-row>
            </v-container>
        </core-view>

        <core-footer>
            Example © {{ new Date().getFullYear() }} Alle rechten voorbehouden
        </core-footer>

        <core-snackbar />
    </v-app>
</template>

<script>
    // import Login from '../views/auth/Login.vue';
    export default {
        name: 'LayoutAuth',

        // created () {
        //     const languageCode = this.$route.query?.lang;

        //     if (languageCode) {
        //         this.$store.dispatch('localization/changeLanguage', languageCode);

        //         const query = _.cloneDeep(this.$route.query);

        //         _.unset(query, 'lang');

        //         this.$router.replace({ query });
        //     }
        // },
    };
</script>

<style scoped>
    .background-gradient {
        background-image: linear-gradient(to right, #d60b52, #ea610d);
    }
</style>
