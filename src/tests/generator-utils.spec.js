/**
 * Created by JP Strydom (JPStrydom) and  Muzikayise Flynn Buthelezi (zuluCoda) on 2018/01/27.
 * mfbproject.co.za - muzi@mfbproject.co.za
 */

const path = require('path');

const resolvePath = require.resolve('commander');

const { getRootPath } = require('../generator-utils');


describe('Generator Utils - Unit Test', () => {
  describe('getAllDirectories', () => {
    // it('should return all templates with directries set name', () => {
    //   const name = 'some_name';
    //   const directory = 'some_directory';
    //   const templates = 'templates';
    //
    //   const actual = getAllDirectories(name, directory);
    //
    //   const expected = {
    //     view: {
    //       template: path.join(templates, 'template.view.js'),
    //       generated: path.join(directory, `${name}.view.js`)
    //     },
    //     viewTest: {
    //       template: path.join(templates, 'test', 'template.view.spec.js'),
    //       generated: path.join(directory, 'test', `${name}.view.spec.js`)
    //     },
    //
    //     container: {
    //       template: path.join(templates, 'template.container.js'),
    //       generated: path.join(directory, `${name}.container.js`)
    //     },
    //     containerTest: {
    //       template: path.join(templates, 'test', 'template.container.spec.js'),
    //       generated: path.join(directory, 'test', `${name}.container.spec.js`)
    //     },
    //
    //     reducer: {
    //       template: path.join(templates, 'template.reducer.js'),
    //       generated: path.join(directory, `${name}.reducer.js`)
    //     },
    //     reducerTest: {
    //       template: path.join(templates, 'test', 'template.reducer.spec.js'),
    //       generated: path.join(directory, 'test', `${name}.reducer.spec.js`)
    //     }
    //   };
    //
    //   expect(actual).toEqual(expected);
    // });
  });

  describe('getRootPath', () => {
    it('should return root path', () => {
      console.log(
        'resolvePath:',
        resolvePath
          .split('/')
          .slice(0, 9)
          .join('/')
      );

      const actual = getRootPath();

      const expected = `${resolvePath
        .split('/')
        .slice(0, 9)
        .join('/')}/`;

      expect(actual).toEqual(expected);
    });
  });
});