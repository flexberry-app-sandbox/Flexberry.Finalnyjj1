import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  отправлен: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-finalnyjj-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-finalnyjj-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлен: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.отправлен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-finalnyjj-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-finalnyjj-расчетный-лист', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    отправлен: attr('Отправлен', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3, hidden: true }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 })
    }, { index: -1, hidden: true }),
    составРасчета: hasMany('i-i-s-finalnyjj-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('Ндфл', { index: 3 }),
      взносы: attr('Взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-finalnyjj-расчетный-лист', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    отправлен: attr('Отправлен', { index: 2 }),
    сотрудники: belongsTo('i-i-s-finalnyjj-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 }),
      должности: belongsTo('i-i-s-finalnyjj-должности', '', {
        наименование: attr('Должность', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
