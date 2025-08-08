import jest from 'jest-mock';
export default jest.fn(async (request, response) => {
    await new Promise((r) => setTimeout(r, 200));
    request.asyncOneCompleted = true;
});
//# sourceMappingURL=asyncOne%5BloadAttribute%5D.js.map