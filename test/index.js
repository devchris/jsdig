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
});
