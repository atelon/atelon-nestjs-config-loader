// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [ 2, "always", 120 ],
    'type-enum': [
      2,
      "always",
      [
        "breaking",
        "ci",
        "chore",
        "feat",
        "fix",
        "refactor",
        "config",
        "test",
        "docs",
        "no-release"
      ]
    ]
  }
}
