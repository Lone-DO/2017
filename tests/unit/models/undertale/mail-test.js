import { moduleForModel, test } from 'ember-qunit';

moduleForModel('undertale/mail', 'Unit | Model | undertale/mail', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
