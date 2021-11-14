// function that returns license section of README
function createLicense(license) { }
//function that returns license badge
function createBadge(license) { }
//function that returns license link
function createLink(license) { }

//function that generates README.md format
function createMarkdown(data) {
    return `#${data.title}`;
};
module.exports = createMarkdown;