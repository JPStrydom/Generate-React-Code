'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const { getRootPath } = require('../generator-utilities');

const applyConfig = require('../apply-config-file');

const ROOT_PATH = getRootPath();

describe('Apply config file - Unit Test', () => {
    describe('applyConfig - Success Case', () => {
        beforeEach(done =>
            fs.writeFile(
                path.join(ROOT_PATH, 'grcc.json'),
                '{ "native": true, "redux": true, "omitComments": true }',
                done
            )
        );
        afterEach(() => shell.rm('-rf', path.join(ROOT_PATH, 'grcc.json')));

        it('should apply config file parameters to passed in parameters', done => {
            // TODO: Needs some tests
            const passedIn = {
                name: 'some-name',
                native: false,
                redux: false,
                omitComments: false
            };
            const expected = {
                name: 'some-name',
                native: true,
                redux: true,
                omitComments: true
            };

            setTimeout(
                () =>
                    applyConfig(passedIn, params => {
                        expect(params).toEqual(expected);
                        done();
                    }),
                1000
            );
        });
    });

    describe('applyConfig - Fail Case', () => {
        beforeEach(done =>
            fs.writeFile(
                path.join(ROOT_PATH, 'grcc.json'),
                '{ "native": true, "redux": true, "omitComments": true }',
                done
            )
        );
        afterEach(() => shell.rm('-rf', path.join(ROOT_PATH, 'grcc.json')));

        it('should apply config file parameters to passed in parameters', done => {
            // TODO: Needs some tests
            const passedIn = {
                name: 'some-name',
                native: false,
                redux: false,
                omitComments: false
            };
            const expected = {
                name: 'some-name',
                native: true,
                redux: true,
                omitComments: true
            };

            applyConfig(passedIn, params => {
                expect(params).toEqual(expected);
                done();
            });
        });
    });
});
