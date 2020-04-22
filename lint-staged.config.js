const prettier = 'prettier --list-different';
const eslint = 'eslint --max-warnings 0';

/**
 * Return array of passed commands
 *
 * @param  {...string} commands commands to run
 * @returns {string[]} array of commands
 */
const run = (...commands) => commands;

module.exports = {
  '*.{js,json,md}': run(prettier),
  '*.ts': run(prettier, eslint),
};
