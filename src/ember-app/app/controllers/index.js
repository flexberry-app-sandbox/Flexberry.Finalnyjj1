import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадровые-документы.caption'),
          title: i18n.t('forms.application.sitemap.кадровые-документы.title'),
          children: [{
            link: 'i-i-s-finalnyjj-должности-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-должности-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-организации-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-организации-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-расчетный-лист-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-finalnyjj-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадровые-документы.i-i-s-finalnyjj-отделы-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})