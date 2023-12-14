import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFinalnyjjДолжностиLForm from './forms/i-i-s-finalnyjj-должности-l';
import IISFinalnyjjОрганизацииLForm from './forms/i-i-s-finalnyjj-организации-l';
import IISFinalnyjjОтделыLForm from './forms/i-i-s-finalnyjj-отделы-l';
import IISFinalnyjjРасчетныйЛистLForm from './forms/i-i-s-finalnyjj-расчетный-лист-l';
import IISFinalnyjjСотрудникиLForm from './forms/i-i-s-finalnyjj-сотрудники-l';
import IISFinalnyjjДолжностиEForm from './forms/i-i-s-finalnyjj-должности-e';
import IISFinalnyjjОрганизацииEForm from './forms/i-i-s-finalnyjj-организации-e';
import IISFinalnyjjОтделыEForm from './forms/i-i-s-finalnyjj-отделы-e';
import IISFinalnyjjРасчетныйЛистEForm from './forms/i-i-s-finalnyjj-расчетный-лист-e';
import IISFinalnyjjСотрудникиEForm from './forms/i-i-s-finalnyjj-сотрудники-e';
import IISFinalnyjjДолжностиModel from './models/i-i-s-finalnyjj-должности';
import IISFinalnyjjОрганизацииModel from './models/i-i-s-finalnyjj-организации';
import IISFinalnyjjОтделыModel from './models/i-i-s-finalnyjj-отделы';
import IISFinalnyjjРасчетныйЛистModel from './models/i-i-s-finalnyjj-расчетный-лист';
import IISFinalnyjjСоставРасчетаModel from './models/i-i-s-finalnyjj-состав-расчета';
import IISFinalnyjjСотрудникиModel from './models/i-i-s-finalnyjj-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-finalnyjj-должности': IISFinalnyjjДолжностиModel,
    'i-i-s-finalnyjj-организации': IISFinalnyjjОрганизацииModel,
    'i-i-s-finalnyjj-отделы': IISFinalnyjjОтделыModel,
    'i-i-s-finalnyjj-расчетный-лист': IISFinalnyjjРасчетныйЛистModel,
    'i-i-s-finalnyjj-состав-расчета': IISFinalnyjjСоставРасчетаModel,
    'i-i-s-finalnyjj-сотрудники': IISFinalnyjjСотрудникиModel
  },

  'application-name': 'КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'КЭДО',
          title: 'КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'кадровые-документы': {
          caption: 'Кадровые документы',
          title: 'Кадровые документы',
          'i-i-s-finalnyjj-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-finalnyjj-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-finalnyjj-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-finalnyjj-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-finalnyjj-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-finalnyjj-должности-l': IISFinalnyjjДолжностиLForm,
    'i-i-s-finalnyjj-организации-l': IISFinalnyjjОрганизацииLForm,
    'i-i-s-finalnyjj-отделы-l': IISFinalnyjjОтделыLForm,
    'i-i-s-finalnyjj-расчетный-лист-l': IISFinalnyjjРасчетныйЛистLForm,
    'i-i-s-finalnyjj-сотрудники-l': IISFinalnyjjСотрудникиLForm,
    'i-i-s-finalnyjj-должности-e': IISFinalnyjjДолжностиEForm,
    'i-i-s-finalnyjj-организации-e': IISFinalnyjjОрганизацииEForm,
    'i-i-s-finalnyjj-отделы-e': IISFinalnyjjОтделыEForm,
    'i-i-s-finalnyjj-расчетный-лист-e': IISFinalnyjjРасчетныйЛистEForm,
    'i-i-s-finalnyjj-сотрудники-e': IISFinalnyjjСотрудникиEForm
  },

});

export default translations;
