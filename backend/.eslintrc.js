module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": "warn",
        "quotes": [
            "warn",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "spaced-comment": ["error", "always"]
    }
};
