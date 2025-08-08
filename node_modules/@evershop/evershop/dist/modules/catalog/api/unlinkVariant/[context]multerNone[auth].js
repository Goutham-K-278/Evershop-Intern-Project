import multer from 'multer';
const upload = multer();
export default (request, response, next) => {
    upload.none()(request, response, next);
};
//# sourceMappingURL=%5Bcontext%5DmulterNone%5Bauth%5D.js.map