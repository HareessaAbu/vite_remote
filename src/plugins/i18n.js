// import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

export const defaultLocale = getDefaultLanguage() || 'en';

const i18n = createI18n({
    legacy: false, // Use the Composition API
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
    silentTranslationWarn: true,
});

// Export a function to create the app with the i18n instance
export function setupI18n(app) {
    app.use(i18n);
    return i18n;
}

function loadLocaleMessages () {
    const locales = require.context('@/locales', true, /\.json$/i);
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

function getDefaultLanguage () {
    const languages = Object.getOwnPropertyNames(loadLocaleMessages());

    let defaultLanguage = null;

    languages.forEach(lang => {
        const languagePartial = navigator.language.split('-')[0];
        if (lang === languagePartial) {
            defaultLanguage = lang;
        }
    });

    return isLocaleAvailable(defaultLanguage)
        ? defaultLanguage
        : null;
}

function isLocaleAvailable (locale) {
    const locales = require.context('@/locales', true, /\.json$/i);

    return locales.keys()
        .map(key => key.match(/([A-Za-z0-9-_]+)\./i)[1])
        .some(key => key === locale);
}
