import axios from 'axios';
export default async (request, response) => {
    const content = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
};
//# sourceMappingURL=async%5Bcollection%5D.js.map