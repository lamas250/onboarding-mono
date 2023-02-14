"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.get = exports.create = void 0;
const repository_1 = __importDefault(require("./repository"));
const validation_1 = __importDefault(require("./validation"));
const create = async (event, context) => {
    try {
        const data = JSON.parse(event.body);
        const { error } = validation_1.default.handle(data);
        if (error) {
            return {
                statusCode: 400,
                body: JSON.stringify(error.details[0].message)
            };
        }
        const newItem = await repository_1.default.saveItem(data);
        return {
            statusCode: 200,
            body: JSON.stringify(newItem),
        };
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
exports.create = create;
const get = async (event, context) => {
    try {
        const items = await repository_1.default.getAll();
        return {
            statusCode: 200,
            body: JSON.stringify(items),
        };
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
exports.get = get;
const destroy = async (event, context) => {
    try {
        const { id } = event.pathParameters;
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify('Id not provided')
            };
        }
        await repository_1.default.destroy(id);
        return {
            statusCode: 200,
            body: JSON.stringify('Success destroy')
        };
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
exports.destroy = destroy;
