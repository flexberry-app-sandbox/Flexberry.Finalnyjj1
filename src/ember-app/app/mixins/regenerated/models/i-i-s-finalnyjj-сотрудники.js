import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  ин: DS.attr('number'),
  номерПас: DS.attr('string'),
  отчество: DS.attr('string'),
  серияПас: DS.attr('string'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-finalnyjj-должности', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-finalnyjj-организации', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-finalnyjj-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ин: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.ин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПас: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.номерПас.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-finalnyjj-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-finalnyjj-сотрудники', {
    ин: attr('Ин', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияПас: attr('Серия паспорта', { index: 4 }),
    номерПас: attr('Номер паспорта', { index: 5 }),
    организации: belongsTo('i-i-s-finalnyjj-организации', 'Организация', {
      наименование: attr('Организация', { index: 6, hidden: true })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-finalnyjj-должности', 'Должность', {
      наименование: attr('Должность', { index: 7, hidden: true })
    }, { index: -1, hidden: true }),
    отделы: belongsTo('i-i-s-finalnyjj-отделы', 'Отдел', {
      наименование: attr('Отдел', { index: 8, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-finalnyjj-сотрудники', {
    ин: attr('Ин', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияПас: attr('Серия паспорта', { index: 4 }),
    номерПас: attr('Номер паспорта', { index: 5 }),
    организации: belongsTo('i-i-s-finalnyjj-организации', 'Организация', {
      наименование: attr('Организация', { index: 6 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-finalnyjj-должности', 'Должность', {
      наименование: attr('Должность', { index: 7 })
    }, { index: -1, hidden: true }),
    отделы: belongsTo('i-i-s-finalnyjj-отделы', 'Отдел', {
      наименование: attr('Отдел', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
