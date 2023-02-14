"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const crypto_1 = __importDefault(require("crypto"));
const ONBOARDING_TABLE = process.env.ONBOARDING_TABLE ? process.env.ONBOARDING_TABLE : 'onboarding-table';
const documentClient = new aws_sdk_1.default.DynamoDB.DocumentClient({ region: 'us-east-1' });
const saveItem = async ({ tag, value, type }) => {
    const newItem = {
        id: crypto_1.default.randomUUID(),
        tag,
        value,
        type,
        timestamp: Date.now(),
    };
    await documentClient
        .put({
        TableName: ONBOARDING_TABLE,
        Item: newItem,
    })
        .promise();
    return newItem;
};
const getAll = async () => {
    const res = await documentClient.scan({
        TableName: ONBOARDING_TABLE
    })
        .promise();
    const items = res.Items;
    return items;
};
const destroy = async (id) => {
    const params = {
        TableName: ONBOARDING_TABLE,
        Key: {
            id: id
        }
    };
    await documentClient.delete(params).promise();
};
exports.default = {
    saveItem,
    getAll,
    destroy
};
