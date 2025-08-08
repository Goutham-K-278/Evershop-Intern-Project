import axios from 'axios';
export default async (request, response, next) => {
    const content = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    next();
};
//# sourceMappingURL=asyncWithNext%5Bcollection%5D.js.map