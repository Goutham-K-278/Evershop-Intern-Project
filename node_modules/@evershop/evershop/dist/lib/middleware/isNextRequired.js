import { readFileSync } from 'fs';
export default function isNextRequired(path) {
    const code = readFileSync(path, 'utf8');
    return code.includes('next');
}
//# sourceMappingURL=isNextRequired.js.map