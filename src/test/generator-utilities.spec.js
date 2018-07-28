'use strict';

const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const prettier = require('prettier');

const resolvePath = require.resolve('commander');

const {
    getRootPath,
    getAllDirectories,
    getAllPlaceholderNames,
    createTemplate
} = require('../generator-utilities');

const ROOT_PATH = getRootPath();

describe('Generator Utilities - Unit Test', () => {
    describe('createTemplate', () => {
        it('should create template with comments', done => {
            const name = 'some-directory-create-template';
            const templatePath = path.join(ROOT_PATH, 'templates', 'web', 'react');
            const directory = path.join(ROOT_PATH, name);

            if (!fs.existsSync(directory)) {
                shell.mkdir('-p', path.join(directory));
            }

            const testTemplate = {
                template: path.join(templatePath, 'template.view.js'),
                generated: path.join(directory, `${name}.view.js`)
            };

            const testPlaceHolder = getAllPlaceholderNames(name);

            function assert() {
                expect(fs.existsSync(directory)).toBeTruthy();
                expect(fs.existsSync(testTemplate.generated)).toBeTruthy();
                expect(fs.readFileSync(testTemplate.generated, 'utf8')).toContain(
                    'Import all external modules here.'
                );
                done();
            }

            createTemplate(testTemplate, testPlaceHolder, false, assert);
        });

        it('should create template without comments', done => {
            const name = 'some-directory-create-template-without-comments';
            const templatePath = path.join(ROOT_PATH, 'templates', 'web', 'react');
            const directory = path.join(ROOT_PATH, name);

            if (!fs.existsSync(directory)) {
                shell.mkdir('-p', path.join(directory));
            }

            const testTemplate = {
                template: path.join(templatePath, 'template.view.js'),
                generated: path.join(directory, `${name}.view.js`)
            };

            const testPlaceHolder = getAllPlaceholderNames(name);

            function assert() {
                expect(fs.existsSync(directory)).toBeTruthy();
                expect(fs.existsSync(testTemplate.generated)).toBeTruthy();
                expect(fs.readFileSync(testTemplate.generated, 'utf8')).not.toContain(
                    'Import all external modules here.'
                );
                done();
            }

            createTemplate(testTemplate, testPlaceHolder, true, assert);
        });

        it('should format javascript code using prettier after it has been generated', done => {
            const name = 'some-directory-create-template';
            const templatePath = path.join(ROOT_PATH, 'templates', 'web', 'react');
            const directory = path.join(ROOT_PATH, name);

            if (!fs.existsSync(directory)) {
                shell.mkdir('-p', path.join(directory));
            }

            const testTemplate = {
                template: path.join(templatePath, 'template.view.js'),
                generated: path.join(directory, `${name}.view.js`)
            };

            const testPlaceHolder = getAllPlaceholderNames(name);

            const prettierSpy = jest.spyOn(prettier, 'format');

            function assert() {
                expect(prettierSpy).toHaveBeenCalled();
                prettierSpy.mockRestore();
                done();
            }

            createTemplate(testTemplate, testPlaceHolder, false, assert);
        });

        it('should format sass code using prettier after it has been generated', done => {
            const name = 'some-directory-create-template';
            const templatePath = path.join(ROOT_PATH, 'templates', 'web', 'react');
            const directory = path.join(ROOT_PATH, name);

            if (!fs.existsSync(directory)) {
                shell.mkdir('-p', path.join(directory));
            }

            const testTemplate = {
                template: path.join(templatePath, '_template.styles.scss'),
                generated: path.join(directory, `${name}.styles.scss`)
            };

            const testPlaceHolder = getAllPlaceholderNames(name);

            const prettierSpy = jest.spyOn(prettier, 'format');

            function assert() {
                expect(prettierSpy).toHaveBeenCalled();
                prettierSpy.mockRestore();
                done();
            }

            createTemplate(testTemplate, testPlaceHolder, false, assert);
        });
    });

    describe('getAllDirectories', () => {
        describe('getReactComponentDirs', () => {
            describe('for web', () => {
                describe('NOT redux', () => {
                    it('should return all templates with directories set name and create folder name, with test', () => {
                        const name = 'some-name';
                        const directory = 'some-directory';

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
                        const name = 'some-name-redux';
                        const directory = 'some-directory-redux';

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
                        const name = 'some-name-native';
                        const directory = 'some-directory-native';

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
                        const name = 'some-name-redux';
                        const directory = 'some-directory-redux';

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

        describe('getReduxCoreDirs', () => {
            it('should return all templates with directories, set with name and create folders for redux core', () => {
                const directory = 'some-directory-redux-core';

                let actual = getAllDirectories(null, null, null, null, true, directory);

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

            it('should return all templates with directories, set with name and create folders for redux core even if the directory already exists', () => {
                const directory = 'some-directory-redux-core';

                let actual = getAllDirectories(null, null, null, null, true, directory);
                actual = getAllDirectories(null, null, null, null, true, directory);

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

    describe('getAllPlaceholderNames', () => {
        it('should return kebab case name', () => {
            const name = 'some-kebab-case-name';

            const actual = getAllPlaceholderNames(name);

            const expected = {
                kebab: name,
                lowerCamel: 'someKebabCaseName',
                upperCamel: 'SomeKebabCaseName'
            };

            expect(actual).toEqual(expected);
        });
    });

    describe('getRootPath', () => {
        it('should return root path', () => {
            console.log('resolvePath:', resolvePath.slice(0, resolvePath.indexOf('node_modules')));

            const actual = getRootPath();

            const expected = resolvePath.slice(0, resolvePath.indexOf('node_modules'));

            expect(actual).toEqual(expected);
        });
    });

    afterAll(() => {
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory'));
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory-native'));
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory-redux'));
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory-redux-core'));
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory-create-template'));
        shell.rm('-rf', path.join(ROOT_PATH, 'some-directory-create-template-without-comments'));
    });
});
