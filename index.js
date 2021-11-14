//Packages I need for the program to run
const inquirer = require('inquirer');
const fs = require('fs');

//Prompt Questions for criteria
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a concise description of your project',
    },
    {
      type: 'input',
      name: 'contents',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};
// Select Copyright License
const copyRightAutocomplete = (copyright) => {
  if (copyright === "IBM Public License Version 1.0") {
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.
    For more information, visit: https://opensource.org/licenses/IPL-1.0`
  } if (copyright === "The Apache License") {
    return `Copyright 2020 The Apache Software Foundation
This product includes software developed at The Apache Software Foundation (http://www.apache.org/). The Initial Developer of some parts of the framework, which are copied from, derived from, or inspired by Adobe Flex (via Apache Flex), is Adobe Systems Incorporated (http://www.adobe.com/). Copyright 2003 - 2012 Adobe Systems Incorporated. All Rights Reserved. The Initial Developer of the examples/mxroyale/tourdeflexmodules, is Adobe Systems Incorporated (http://www.adobe.com/). Copyright 2009 - 2013 Adobe Systems Incorporated. All Rights Reserved.`}
  if (copyright === "MIT License") {
    return `Copyright <2021>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
};
//Badge for license
const badge = (copyright) => {
  if (copyright === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } if (copyright === "The Apache License") {
    return `[![License:](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } if (copyright === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
};

const generateReadMe = ({ title, description, contents, installation, usage, license, contributing, tests, GitHub, email }) =>

  `# ${title}
<a name="description"></a>
## Description
${description}  
${licenseBadge(license)}

// Bonus using writeFileSync as a promise
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();