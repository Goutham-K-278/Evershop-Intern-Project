import fs, { promises as fsp } from 'fs';
import path from 'path';
import { execa } from 'execa';
import { CONSTANTS } from '../../../lib/helpers.js';
import { error, warning } from '../../../lib/log/logger.js';
export async function compileSwc(srcPath, distPath) {
    // Check if the source is a file or directory
    if (!fs.existsSync(srcPath)) {
        warning(`Source path ${srcPath} does not exist.`);
        return;
        // Check if file extension is not either ts, js, tsx, or jsx
    }
    else if (fs.statSync(srcPath).isFile() &&
        !['.ts', '.js', '.tsx', '.jsx'].includes(path.extname(srcPath))) {
        // For this case, we just force copy the file to the dist directory
        try {
            const directory = path.dirname(distPath);
            await fsp.mkdir(directory, { recursive: true });
            await fsp.copyFile(srcPath, distPath);
        }
        catch (err) {
            error(`Error copying ${srcPath} to ${distPath}:`);
            throw err;
        }
    }
    else {
        let cliOptions;
        const configFile = path.resolve(CONSTANTS.LIBPATH, '../../.swcrc');
        if (fs.statSync(srcPath).isDirectory()) {
            cliOptions = [
                srcPath,
                '-d',
                distPath,
                '--config-file',
                configFile,
                '--strip-leading-paths',
                '--copy-files'
            ];
        }
        else {
            cliOptions = [
                srcPath,
                '-o',
                distPath,
                '--config-file',
                configFile,
                '--strip-leading-paths'
            ];
        }
        try {
            // Delete the dist directory if it exists using rimraf
            await fsp.rm(distPath, { recursive: true, force: true });
            await execa('swc', cliOptions, {
                cwd: path.resolve(srcPath, '..')
            });
        }
        catch (err) {
            error(`Error compiling ${srcPath}:`);
            throw err;
        }
    }
}
//# sourceMappingURL=compileSwc.js.map