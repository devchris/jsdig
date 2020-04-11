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
});
