import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnyjj-отделы', 'Unit | Serializer | i-i-s-finalnyjj-отделы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-finalnyjj-отделы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-finalnyjj-тип',

    'model:i-i-s-finalnyjj-должности',
    'model:i-i-s-finalnyjj-организации',
    'model:i-i-s-finalnyjj-отделы',
    'model:i-i-s-finalnyjj-расчетный-лист',
    'model:i-i-s-finalnyjj-состав-расчета',
    'model:i-i-s-finalnyjj-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
