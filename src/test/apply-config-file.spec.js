'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const { getRootPath } = require('../generator-utilities');

const applyConfig = require('../apply-config-file');

const ROOT_PATH = getRootPath();

describe('Apply config file - Unit Test', () => {
    describe('applyConfig', () => {
        it('should apply config file parameters to passed in parameters', done => {
            const passedIn = {
                name: 'some-name'
            };
            const expected = {
                name: 'some-name',
                native: true,
                redux: true,
                omitComments: true
            };
            fs.writeFile(
                path.join(ROOT_PATH, 'grcc.json'),
                '{ "native": true, "redux": true, "omitComments": true }',
                () =>
                    applyConfig(passedIn, params => {
                        expect(params).toEqual(expected);
                        shell.rm('-rf', path.join(ROOT_PATH, 'grcc.json'));
                        done();
                    })
            );
        });

        it('should not overwrite passed in parameters when a user specifies them', done => {
            const passedIn = {
                name: 'some-name',
                native: true,
                redux: true,
                omitComments: true
            };
            fs.writeFile(
                path.join(ROOT_PATH, 'grcc.json'),
                '{ "native": false, "redux": false, "omitComments": false }',
                () =>
                    applyConfig(passedIn, params => {
                        expect(params).toEqual(passedIn);
                        shell.rm('-rf', path.join(ROOT_PATH, 'grcc.json'));
                        done();
                    })
            );
        });

        it('should return unaltered parameters when the config file does not exist', done => {
            const passedIn = {
                name: 'some-name',
                native: false,
                redux: false
            };

            applyConfig(passedIn, params => {
                expect(params).toEqual(passedIn);
                done();
            });
        });

        it('should return unaltered parameters when the config file exists but is not in the correct format', done => {
            const passedIn = {
                name: 'some-name',
                native: false
            };
            fs.writeFile(path.join(ROOT_PATH, 'grcc.json'), '{ oops it aint json }', () =>
                applyConfig(passedIn, params => {
                    expect(params).toEqual(passedIn);
                    shell.rm('-rf', path.join(ROOT_PATH, 'grcc.json'));
                    done();
                })
            );
        });
    });
});
