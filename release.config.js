// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md",
    }],
    "@semantic-release/npm",
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "package.json", "npm-shrinkwrap.json"],
    }],
    "@semantic-release/github",
  ]
}
