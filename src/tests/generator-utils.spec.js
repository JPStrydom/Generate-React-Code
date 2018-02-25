/**
 * Created by JP Strydom (JPStrydom) and  Muzikayise Flynn Buthelezi (zuluCoda) on 2018/01/27.
 * mfbproject.co.za - muzi@mfbproject.co.za
 */

'use strict';

const path = require('path');
const fs = require('fs');

const resolvePath = require.resolve('commander');

const { getRootPath, getAllDirectories } = require('../generator-utils');

const ROOT_PATH = getRootPath();

describe('Generator Utils - Unit Test', () => {
    describe('getAllDirectories', () => {
        describe('for getReactComponentDirs', () => {
            describe('for web', () => {
                describe('NOT redux', () => {
                    it('should return all templates with directories set name and create folder name, with test', () => {
                        const name = 'some_name';
                        const directory = 'some_directory';

                        const actual = getAllDirectories(name, directory);

                        const templates = path.join(ROOT_PATH, 'templates', 'web', 'react');
                        const folderName = name;
                        const expected = {
                            view: {
                                template: path.join(templates, 'template.view.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.view.js`
                                )
                            },
                            viewTest: {
                                template: path.join(templates, 'test', 'template.view.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.view.spec.js`
                                )
                            },
                            stylesheet: {
                                template: path.join(templates, '_template.styles.scss'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `_${name}.styles.scss`
                                )
                            }
                        };

                        expect(actual).toEqual(expected);
                        expect(
                            fs.existsSync(path.join(ROOT_PATH, directory, folderName))
                        ).toBeTruthy();
                    });
                });

                describe('WITH redux', () => {
                    it('should return all templates with directories set name and create folder name, with test', () => {
                        const name = 'some_name_redux';
                        const directory = 'some_directory_redux';

                        const actual = getAllDirectories(name, directory, false, true);

                        const templates = path.join(ROOT_PATH, 'templates', 'web', 'react-redux');
                        const folderName = name;
                        const expected = {
                            view: {
                                template: path.join(templates, 'template.view.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.view.js`
                                )
                            },
                            viewTest: {
                                template: path.join(templates, 'test', 'template.view.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.view.spec.js`
                                )
                            },
                            stylesheet: {
                                template: path.join(templates, '_template.styles.scss'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `_${name}.styles.scss`
                                )
                            },
                            container: {
                                template: path.join(templates, 'template.container.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.container.js`
                                )
                            },
                            containerTest: {
                                template: path.join(
                                    templates,
                                    'test',
                                    'template.container.spec.js'
                                ),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.container.spec.js`
                                )
                            },

                            reducer: {
                                template: path.join(templates, 'template.reducer.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.reducer.js`
                                )
                            },
                            reducerTest: {
                                template: path.join(templates, 'test', 'template.reducer.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.reducer.spec.js`
                                )
                            }
                        };

                        expect(actual).toEqual(expected);
                        expect(
                            fs.existsSync(path.join(ROOT_PATH, directory, folderName))
                        ).toBeTruthy();
                    });
                });
            });

            describe('for native', () => {
                describe('NOT redux', () => {
                    it('should return all templates with directories set name and create folder name, with test', () => {
                        const name = 'some_name_native';
                        const directory = 'some_directory_native';

                        const actual = getAllDirectories(name, directory, true);

                        const templates = path.join(ROOT_PATH, 'templates', 'native', 'react');
                        const folderName = name;
                        const expected = {
                            view: {
                                template: path.join(templates, 'template.view.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.view.js`
                                )
                            },
                            viewTest: {
                                template: path.join(templates, 'test', 'template.view.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.view.spec.js`
                                )
                            }
                        };

                        expect(actual).toEqual(expected);
                        expect(
                            fs.existsSync(path.join(ROOT_PATH, directory, folderName))
                        ).toBeTruthy();
                    });
                });

                describe('WITH redux', () => {
                    it('should return all templates with directories set name and create folder name, with test', () => {
                        const name = 'some_name_redux';
                        const directory = 'some_directory_redux';

                        const actual = getAllDirectories(name, directory, true, true);

                        const templates = path.join(
                            ROOT_PATH,
                            'templates',
                            'native',
                            'react-redux'
                        );
                        const folderName = name;
                        const expected = {
                            view: {
                                template: path.join(templates, 'template.view.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.view.js`
                                )
                            },
                            viewTest: {
                                template: path.join(templates, 'test', 'template.view.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.view.spec.js`
                                )
                            },
                            container: {
                                template: path.join(templates, 'template.container.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.container.js`
                                )
                            },
                            containerTest: {
                                template: path.join(
                                    templates,
                                    'test',
                                    'template.container.spec.js'
                                ),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.container.spec.js`
                                )
                            },

                            reducer: {
                                template: path.join(templates, 'template.reducer.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    `${name}.reducer.js`
                                )
                            },
                            reducerTest: {
                                template: path.join(templates, 'test', 'template.reducer.spec.js'),
                                generated: path.join(
                                    ROOT_PATH,
                                    directory,
                                    folderName,
                                    'test',
                                    `${name}.reducer.spec.js`
                                )
                            }
                        };

                        expect(actual).toEqual(expected);
                        expect(
                            fs.existsSync(path.join(ROOT_PATH, directory, folderName))
                        ).toBeTruthy();
                    });
                });
            });
        });

        describe('for getReduxCoreDirs', () => {
            it('should return all templates with directories, set with name and create folders for redux core', () => {
                const directory = 'some_directory_redux_core';

                const actual = getAllDirectories(null, null, null, null, true, directory);

                const templates = path.join(ROOT_PATH, 'templates', 'redux-core');

                const expected = {
                    store: {
                        template: path.join(templates, 'store.js'),
                        generated: path.join(ROOT_PATH, directory, 'store.js')
                    },
                    rootReducer: {
                        template: path.join(templates, 'root-reducer.js'),
                        generated: path.join(ROOT_PATH, directory, 'root-reducer.js')
                    },
                    createAction: {
                        template: path.join(templates, 'action-creator', 'create-action.js'),
                        generated: path.join(
                            ROOT_PATH,
                            directory,
                            'action-creator',
                            'create-action.js'
                        )
                    },
                    buildActionType: {
                        template: path.join(templates, 'action-creator', 'build-action-type.js'),
                        generated: path.join(
                            ROOT_PATH,
                            directory,
                            'action-creator',
                            'build-action-type.js'
                        )
                    },
                    createActionTest: {
                        template: path.join(
                            templates,
                            'action-creator',
                            'test',
                            'create-action.spec.js'
                        ),
                        generated: path.join(
                            ROOT_PATH,
                            directory,
                            'action-creator',
                            'test',
                            'create-action.spec.js'
                        )
                    },
                    buildActionTypeTest: {
                        template: path.join(
                            templates,
                            'action-creator',
                            'test',
                            'build-action-type.spec.js'
                        ),
                        generated: path.join(
                            ROOT_PATH,
                            directory,
                            'action-creator',
                            'test',
                            'build-action-type.spec.js'
                        )
                    }
                };

                expect(actual).toEqual(expected);
                expect(fs.existsSync(path.join(ROOT_PATH, directory))).toBeTruthy();
            });
        });
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
