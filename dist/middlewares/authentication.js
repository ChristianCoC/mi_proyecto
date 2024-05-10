"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    if (token === "authenticated") {
        next();
    }
    else {
        res.status(401).json({ message: "Not authorized" });
    }
};
exports.default = auth;
