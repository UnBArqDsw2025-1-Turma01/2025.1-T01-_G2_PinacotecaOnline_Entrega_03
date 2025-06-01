"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUser = void 0;
const User_1 = require("./User");
class CommonUser extends User_1.User {
    constructor(id, name, email, password, description, address, createdAt = new Date()) {
        super(id, name, email, password, description, address, 'common', createdAt);
    }
}
exports.CommonUser = CommonUser;
//# sourceMappingURL=common.js.map