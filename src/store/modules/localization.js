import { defaultLocale } from '@/plugins/i18n';
// import User from '@/models/User';
import ISO6391 from 'iso-639-1';

export default {
    namespaced: true,

    state: {
        initialized: false,

        languageCode: defaultLocale,

        supportedLocales: [
            { languageCode: 'bg', countryCode: 'bg' },
            { languageCode: 'zh_Hans', countryCode: 'cn' },
            { languageCode: 'cs', countryCode: 'cz' },
            { languageCode: 'de', countryCode: 'de' },
            { languageCode: 'el', countryCode: 'gr' },
            { languageCode: 'en', countryCode: 'gb' },
            { languageCode: 'es', countryCode: 'es' },
            { languageCode: 'hr', countryCode: 'hr' },
            { languageCode: 'hu', countryCode: 'hu' },
            { languageCode: 'it', countryCode: 'it' },
            { languageCode: 'lt', countryCode: 'lt' },
            { languageCode: 'ms_Arab', countryCode: 'my' },
            { languageCode: 'nl', countryCode: 'nl' },
            { languageCode: 'pl', countryCode: 'pl' },
            { languageCode: 'pt', countryCode: 'pt' },
            { languageCode: 'ro', countryCode: 'ro' },
            { languageCode: 'sk', countryCode: 'sk' },
            { languageCode: 'sl', countryCode: 'si' },
            { languageCode: 'sr', countryCode: 'sr' },
            { languageCode: 'uk', countryCode: 'ua' },
        ],
    },

    getters: {
        supportedLocales: state => {
            return _.map(state.supportedLocales, (locale) => {
                return {
                    languageCode: locale.languageCode,
                    countryCode: locale.countryCode,
                    nativeName: ISO6391.getNativeName(_.first(_.split(locale.languageCode, '_'))),
                    name: ISO6391.getName(_.first(_.split(locale.languageCode, '_'))),
                    flag: require(`svg-country-flags/svg/${locale.countryCode}.svg`),
                };
            });
        },

        currentLocale: (state, getters) => {
            return _.find(getters.supportedLocales, { languageCode: state.languageCode }) ?? _.find(getters.supportedLocales, { languageCode: 'en' });
        },
    },

    // mutations: {
    //     updateLanguageCode (state, languageCode) {
    //         state.languageCode = languageCode;
    //     },

    //     setInitialized (state, initialized) {
    //         state.initialized = initialized;
    //     },
    // },

    // actions: {
    //     initialize ({ commit, state }) {
    //         commit('setInitialized', true);
    //     },

    //     changeUserLanguage ({ commit }, languageCode) {
    //         return api.request(User.endpoint)
    //             .action('changeLanguage')
    //             .onSuccess(() => {
    //                 commit('updateLanguageCode', languageCode);
    //             })
    //             .put({
    //                 language_code: languageCode,
    //             });
    //     },

    //     changeLanguage ({ commit, state }, languageCode) {
    //         if (! _.find(state.supportedLocales, { languageCode: languageCode })) {
    //             commit('updateLanguageCode', defaultLocale);
    //         }

    //         commit('updateLanguageCode', languageCode);
    //     },
    // },
};
