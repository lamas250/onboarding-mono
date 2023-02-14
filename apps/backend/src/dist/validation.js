"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.requiredFields = void 0;
const joi_1 = __importDefault(require("joi"));
const requiredFields = (data) => {
    const requiredFields = [
        "tag",
        "value",
        "type"
    ];
    for (const field of requiredFields) {
        if (!data[field]) {
            return `Missing param: ${field}`;
        }
    }
    return;
};
exports.requiredFields = requiredFields;
const handle = (data) => {
    const schema = joi_1.default.object().keys({
        tag: joi_1.default.string().required(),
        value: joi_1.default.number().required(),
        type: joi_1.default.string().required()
    });
    const result = schema.validate(data);
    return result;
};
exports.handle = handle;
exports.default = {
    handle: exports.handle,
    requiredFields: exports.requiredFields
};
