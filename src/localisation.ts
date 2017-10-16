import 'intl';
import 'intl/locale-data/jsonp/en.js';

import Vue from 'vue';
import VueLocale from 'vue-ts-locale';

const Config = require('./config.json');
const EnglishMessageText = require('./locale/en.json');

Vue.use(VueLocale, {
  language: Config.language,
  currency: Config.currency,
  messages: EnglishMessageText
});
