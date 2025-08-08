import jest from 'jest-mock';
export default jest.fn((request, response) => {
    throw new Error('Error in sync');
});
//# sourceMappingURL=errorInSync.js.map