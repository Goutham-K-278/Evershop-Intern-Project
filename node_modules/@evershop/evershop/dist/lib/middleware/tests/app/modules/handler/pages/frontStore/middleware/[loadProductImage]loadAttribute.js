import jest from 'jest-mock';
export default jest.fn((request, response) => {
    throw new Error('this is an error');
});
//# sourceMappingURL=%5BloadProductImage%5DloadAttribute.js.map