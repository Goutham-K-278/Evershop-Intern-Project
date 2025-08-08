import jest from 'jest-mock';
export default jest.fn((request, response) => {
    request.syncOneCompleted = true;
});
//# sourceMappingURL=syncOne%5BloadAttribute%5D.js.map