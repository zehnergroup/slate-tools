const gutil = require('gulp-util');

/**
 * Separates filename and directory from a path string. Returns an object containing both.
 *
 * @param path {String} - a string representing the path to a file
 * @returns {Object} - an object with separated `file` (the filename) and `dir` (path minus filename) properties
 * @private
 */
function separatePath(path) {
  const tmp = path.split('/');

  return {
    file: tmp.pop(),
    dir: tmp.join('/')
  };
}

const messages = {
  logFileEvent: (event, path) => {
    const pathObject = separatePath(path);

    gutil.log('change in',
      gutil.colors.magenta(pathObject.dir),
      gutil.colors.white('-'),
      gutil.colors.cyan(event),
      gutil.colors.yellow(pathObject.file)
    );
  },

  logTransferDone: () => {
    gutil.log('Transfer Complete:',
      gutil.colors.green('File changes successfully synced to store')
    );
  },

  logProcessFiles: (processName) => {
    gutil.log('running task',
      gutil.colors.white('-'),
      gutil.colors.cyan(processName)
    );
  },

  logChildProcess: (cmd) => {
    gutil.log('running task',
      gutil.colors.bold('[child process]'),
      gutil.colors.white('-'),
      gutil.colors.cyan('theme', cmd)
    );
  },

  logDeploys: (cmd, files) => {
    const timestamp = `Deploy complete @ ${new Date()}. `;
    const action = cmd === 'upload' ? 'added/changed ' : 'removed ';
    const amount = `${files.length} file(s): `;
    const fileList = `${files.join(', ')}.\n`;

    return timestamp + action + amount + fileList;
  },

  logBundleJs: () => {
    gutil.log('Updating JS Bundle...');
  },

  configChange: () => {
    return 'Changes to ThemeKit Config Detected: You may need to quit <slate watch>' +
      ' and run a full <slate deploy> as a result.';
  },

  deployTo: (environment) => {
    gutil.log('Initiating deploy to', gutil.colors.bold(environment));
  },

  allDeploysComplete: () => {
    gutil.log('Multiple environments:',
      gutil.colors.green('Deploy completed for all environments in series')
    );
  }
};

module.exports = messages;
