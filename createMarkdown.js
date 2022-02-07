//function that generates README.md format
function createMarkdown(data) {
    return `#${data.title}`;
};
module.exports = createMarkdown;