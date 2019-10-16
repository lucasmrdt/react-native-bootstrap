import i18n from 'i18n-js';
import moment from 'moment';
import * as RNLocalize from 'react-native-localize';
import fr from 'src/translations/fr.json';
import en from 'src/translations/en.json';
import 'moment/locale/fr';

const locales = RNLocalize.getLocales();

i18n.locale = locales.length ? locales[0].languageTag : 'en-US';
i18n.fallbacks = true; // use to define list of defaults
i18n.translations = {fr, en};
moment.locale((i18n.locale || 'en').substr(0, 2));

const {t}: {t: (path: string) => string} = i18n;

export default t.bind(i18n);
