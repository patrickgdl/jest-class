// const { sum } = require('./queryString')

import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when a object is passed', () => {
    const obj = {
      name: 'Patrick',
      age: 24,
      technologies: ['React', 'Angular'],
    };

    expect(queryString(obj)).toBe(
      'name=Patrick&age=24&technologies=React,Angular'
    );
  });

  it('should create a valid query string even if an inner array is passed', () => {
    const obj = {
      name: 'Patrick',
      age: 24,
      technologies: ['React', 'Angular'],
    };

    expect(queryString(obj)).toBe(
      'name=Patrick&age=24&technologies=React,Angular'
    );
  });

  it('should throw an error when an inner object is passed', () => {
    const obj = {
      name: 'Patrick',
      age: 24,
      tecnologies: {
        1: 'React',
        2: 'Angular',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Query string to a valid object', () => {
  it('should convert from a query string to a object', () => {
    const qs = 'name=Patrick&job=Developer';

    expect(parse(qs)).toEqual({
      name: 'Patrick',
      job: 'Developer',
    });
  });
});
