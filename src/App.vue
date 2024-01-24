<template>
  <div>
      <!-- <v-overlay :absolute="false" :dark="true" :model-value="false" :z-index="5">
          <v-progress-circular
              indeterminate
              size="64"
          />
      </v-overlay> -->

      <router-view />

      <!-- <NewVersionReleasedDialog
          v-model="showNewVersionReleasedDialog"
      /> -->
  </div>
</template>

<script>
  // import { mapGetters, mapState } from 'vuex';
  // import websocketMixin from '@/mixins/websocketMixin';
  // import ReleasesChannel from '@/websockets/channels/presence/ReleasesChannel';
  // import NewVersionReleased from '@/websockets/events/versions/NewVersionReleased';
  // import NewVersionReleasedDialog from '@/layouts/components/dialogs/NewVersionReleasedDialog.vue';

  export default {
      name: 'App',

      // components: { NewVersionReleasedDialog },

      // mixins: [
      //     websocketMixin,
      // ],

      // data () {
      //     return {
      //         showNewVersionReleasedDialog: false,
      //     };
      // },

      // computed: {
      //     ...mapGetters(['isInitialized']),

      //     ...mapState('auth', {
      //         user: 'user',
      //     }),
      // },

      // watch: {
      //     user: {
      //         immediate: true,
      //         handler () {
      //             if (this.user?.id) {
      //                 this.initWebsockets();
      //             }
      //         },
      //     },
      // },

      // beforeCreate () {
      //     this.$store.subscribe((mutation) => {
      //         if (mutation.type === 'localization/updateLanguageCode') {
      //             this.$vuetify.lang.current = mutation.payload;
      //             this.$i18n.locale = mutation.payload;
      //         }
      //     });

      //     this.$store.dispatch('localization/initialize');
      // },

      // methods: {
      //     initWebsockets () {
      //         this.websocketChannels = [
      //             new ReleasesChannel()
      //                 .listen([
      //                     new NewVersionReleased()
      //                         .on(() => {
      //                             this.showNewVersionReleasedDialog = true;
      //                         }),
      //                 ]),
      //         ];
      //     },
      // },
  };
</script>
