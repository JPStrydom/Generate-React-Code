'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { getRootPath } = require('./generator-utilities');

const GRCC = 'grcc.json';

function applyConfig(params, callback) {
    const configDirectory = path.join(getRootPath(), GRCC);

    if (fs.existsSync(configDirectory)) {
        fs.readFile(configDirectory, 'utf8', (err, data) => {
            if (err) throw err;

            let configData;
            try {
                configData = JSON.parse(data);
            } catch (error) {
                console.log(
                    chalk.red('Error reading config file at'),
                    chalk.gray(configDirectory),
                    '\nMake sure your file has the correct format'
                );
                return callback(params);
            }

            params.native = params.native || configData.native;
            params.redux = params.redux || configData.redux;
            params.omitComments = params.omitComments || configData.omitComments;

            console.log(
                chalk.bold.underline.cyan('Config Loaded:'),
                chalk.bold.magenta('\nnative:\t\t'),
                chalk.yellow(params.native || false),
                chalk.bold.magenta('\nredux:\t\t'),
                chalk.yellow(params.redux || false),
                chalk.bold.magenta('\nomitComments:\t'),
                chalk.yellow(params.omitComments || false),
                '\n'
            );

            return callback(params);
        });
    } else {
        return callback(params);
    }
}

module.exports = applyConfig;
