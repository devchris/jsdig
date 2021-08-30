import { assert } from 'chai';
import '../src/index';

describe('Dig', () => {
  it('returns the wanted value from an object', () => {
    const testObject = { name: 'Christoph', label: 'C' };

    assert(testObject.dig('name') === 'Christoph');
  })

  it('returns the wanted value from a nested object', () => {
    const testObject = {
      name: 'Christoph',
      labels: {
        first: {
          value: '123'
        }
      }
    };

    assert(testObject.dig('labels', 'first', 'value') === '123');
  })

  it('returns the wanted value from a nested object inside an array', () => {
    const testObject = [{
      name: 'Christoph',
      labels: {
        first: {
          value: '123'
        }
      }
    }];

    assert(testObject.dig(0, 'labels', 'first', 'value') === '123');
  })

  it('returns the wanted value from a nested object inside an array of an object', () => {
    const testObject = {
      other: {
        more: [{
          name: 'Christoph',
          labels: {
            first: {
              value: '123'
            }
          }
        }]
      }
    };

    assert(testObject.dig('other', 'more', 0, 'labels', 'first', 'value') === '123');
  })

  it('will return null if key does not exist', () => {
    const testObject = {
      other: {
        more: [{
          name: 'Christoph',
          labels: {
            first: {
              value: '123'
            }
          }
        }]
      }
    };

    assert(testObject.dig('other', 'more', 0, 'wrong', 'first', 'value') === null);
  })

  it('will return the object if keys are not supplied', () => {
    const testObject = {
      other: {
        name: 'Christoph'
      }
    };

    assert(testObject.dig() === testObject);
  });

  it('will return the object if passed in as default value when keys are not supplied', () => {
    const testObject = {
      other: {
        name: 'Christoph'
      }
    };

    assert(testObject.dig(...[], {default: testObject}) === testObject);
  });

  it('will return an empty array if passed in as default value', () => {
    const testObject = {
      other: {
        more: {
          name: 'Christoph',
          labels: {
            first: {
              value: '123'
            }
          }
        }
      }
    };

    assert(JSON.stringify(testObject.dig('other', 'more', 'wrong', 'first', { default: []})) === JSON.stringify([]));
  })

  it('will return a string if passed in as default value', () => {
    const testObject = {
      other: {
        more: {
          name: 'Christoph',
          labels: {
            first: {
              value: '123'
            }
          }
        }
      }
    };

    assert(testObject.dig('other', 'more', 'wrong', 'first', { default: 'not found' }) === 'not found');
  })

  it('edge case, will still return null if key does not exist on last iteration', () => {
    const testObject = {
      other: {
        more: [{
          name: 'Christoph',
          labels: {
            first: {
              value: '123'
            }
          }
        }]
      }
    };

    assert(testObject.dig('other', 'more', 0, 0) === null);
  })

  it('returns null from an array if not present', () => {
    const testArray = [0, 1, 2, 3];

    assert(testArray.dig(0, 0) === null);
  });

  it('returns value from an array of integers if present', () => {
    const testArray = [0, 1, 2, 3];

    assert(testArray.dig(1) === 1);
  });

  it('returns value from an array with objects if present', () => {
    const testArray = [0, 1, { location: { europe: 'Bamberg' } }, 3];

    assert(testArray.dig(2, 'location', 'europe') === 'Bamberg');
  });

  it('returns a character from an array with objects if present', () => {
    const testArray = [0, 1, { location: { europe: 'Bamberg' } }, 3];

    assert(testArray.dig(2, 'location', 'europe', 0) === 'B');
    assert(testArray.dig(2, 'location', 'europe', 1) === 'a');
    assert(testArray.dig(2, 'location', 'europe', 2) === 'm');
  });

  it('gets a function and calls is', () => {
    const germany = () => 'germany';
    const world = [0, 1, { location: { europe: germany } }, 3];
    assert(world.dig(2, 'location', 'europe') === germany);
    assert(world.dig(2, 'location', 'europe')() === 'germany');
  });

  it('even works with strings but who would ever do this', () => {
    assert('Sesame'.dig(3) === 'a');
    assert('Sesame'.dig(3, 4) === null);
  });

  it('does not work with numbers', () => {
    const id = 92394;
    assert(id.dig(2) === null);
  });
});
