import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from '../langs/en.json'
import tr from '../langs/tr.json'
import ro from '../langs/ro.json'

i18n.translations = {
  en,
  tr,
  ro
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;
