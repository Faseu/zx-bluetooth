module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    globals: {
        uni: 'writable'
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        // 要求组件名称以驼峰格式命名，自定义组件名称应该由多单纯组成，防止和html标签冲突
        'vue/multi-word-component-names': 'off',
        // 使用单引号
        quotes: ['error', 'single'],
        // 禁用未声明的变量
        'no-undef': 'error',
        // 禁用未使用的变量
        'no-unused-vars': 'error',
        // 关闭ts中形参未申明的警告
        '@typescript-eslint/no-undef': 'off'
    }
};

