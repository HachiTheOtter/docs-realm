import Realm from 'realm';

// :snippet-start: js-car-schema
class Car extends Realm.Object {
  static schema = {
    name: 'Car',
    properties: {
      make: 'string',
      model: 'string',
      miles: {type: 'int', default: 0},
    },
  };
}
// :snippet-end:
export default Car;
