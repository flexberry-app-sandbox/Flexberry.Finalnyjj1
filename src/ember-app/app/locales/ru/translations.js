import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'КЭДО',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'КЭДО',
          title: 'Finalnyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
