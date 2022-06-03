# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Sami Ferchiou | 296767 |
| Nicolas Pierre Raulin | 301966 |
| Maocheng Xu | 338251 |

[Milestone 1](#milestone-1-friday-8rd-april-5pm) • [Milestone 2](#milestone-2-friday-1st-may-5pm) • [Milestone 3](#milestone-3-thursday-28th-may-5pm)

## Milestone 1 (Friday 8rd April, 5pm)

**10% of the final grade**

Please refer to [milestone 1](Milestone1/milestone1.md).


## Milestone 2 (Friday 6st May, 5pm)

**10% of the final grade**

Please refer to [milestone 2](Milestone2/Milestone2.md).

You may find our visualization on the repository's [github page](https://com-480-data-visualization.github.io/datavis-project-2022-msn/)


## Milestone 3 (Friday 3th June, 5pm)

**80% of the final grade**

Our final visualization can be found on our [github page](https://com-480-data-visualization.github.io/datavis-project-2022-msn/)

### Intended usage

The intended usage of our website is for people to inspect the different viz and make up their own opinion on whether a particular dimension is affecting people's happiness.

### Technical setup

The github page source code may be found on the [`gh-pages` branch](https://github.com/com-480-data-visualization/datavis-project-2022-msn/tree/gh-pages) and may be viewed online or locally:
- online: there is no additional setup, simply view the page at the above address
- locally: running the website simply by clicking on the `.html` file is not an option as your browser does not like loading local files (`.csv` and `.css` files). A simple solution is to perform the following steps:
	1. `cd` into the repository root folder
	2. `git checkout gh-pages`
	3. run `python3 -m http.server 8888` (or any other free port) to open a local web server hosting the website
	4. navigate to `localhost:8888` on your browser
	5. click on `index.html` (if your browser doees not load `index.html` by default)


