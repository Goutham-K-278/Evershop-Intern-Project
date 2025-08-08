import bodyParser from 'body-parser';
export default (request, response, next) => {
    bodyParser.json()(request, response, next);
};
//# sourceMappingURL=bodyJson.js.map