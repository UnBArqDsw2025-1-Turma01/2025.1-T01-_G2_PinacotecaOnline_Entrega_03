"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, description, address, type = 'common', createdAt = new Date(), comments = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.description = description;
        this.address = address;
        this.type = type;
        this.createdAt = createdAt;
        this.comments = comments;
    }
    validatePassword(input) {
        return this.password === input;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map