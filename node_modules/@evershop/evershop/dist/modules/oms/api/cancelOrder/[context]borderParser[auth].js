import bodyParser from 'body-parser';
export default (request, response, next) => {
    bodyParser.json({ inflate: false })(request, response, next);
};
//# sourceMappingURL=%5Bcontext%5DborderParser%5Bauth%5D.js.map