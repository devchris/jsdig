import { assert } from 'chai';
import Dig from '../src';

describe('Dig', () => {
  it('returns null if passed in value is not an object or array', () => {
    assert(Dig('', 'name') === null);
  });

  it('returns the wanted value from an object', () => {
    const testObject = { name: 'Christoph', label: 'C' };

    assert(Dig(testObject, 'name') === 'Christoph');
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

    assert(Dig(testObject, 'labels', 'first', 'value') === '123');
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

    assert(Dig(testObject, 0, 'labels', 'first', 'value') === '123');
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

    assert(Dig(testObject, 'other', 'more', 0, 'labels', 'first', 'value') === '123');
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

    assert(Dig(testObject, 'other', 'more', 0, 'wrong', 'first', 'value') === null);
  })
});
