export class View {
    constructor(api) {
        this.app = document.getElementById('app');
        this.api = api;

        this.search = this.createElement('div', 'search');
        this.searchInput = this.createElement('input', 'search__input');
        this.searchInput.setAttribute('placeholder', 'Type to search...');
        this.searchAutocom = this.createElement('ul', 'search__autocom');

        this.app.append(this.search);
        this.search.append(this.searchInput);
        this.search.append(this.searchAutocom);
    }

    createElement(elementTag, elementClass) {
        const element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createImg(elementTag, elementSrc, elementAlt, elementClass) {
        const element = document.createElement(elementTag);
        element.setAttribute('src', elementSrc);
        element.setAttribute('alt', elementAlt);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createRepositories(repoData) {
        const repoElement = this.createElement('li', 'search__autocom-item');
        repoElement.addEventListener('click', () => {
            this.showRepoData(repoData)
            this.searchAutocom.innerHTML = '';
        })
        repoElement.innerHTML = `${repoData.name}`;
        this.searchAutocom.append(repoElement)
    }



    showRepoData(nameData) {

        this.container = this.createElement('div', 'container');
        this.container.setAttribute('id', `cont-${nameData.name}`);
        this.repositories = this.createElement('div', 'repositories');
        this.repositoriesList = this.createElement('div', 'repositories__list');
        this.repositoriesName = this.createElement('div', 'repositories__name');
        this.repositoriesName.textContent = `Name: ${nameData.name}`;
        this.repositoriesOwner = this.createElement('div', 'repositories__owner');
        this.repositoriesOwner.textContent = `Owner: ${nameData.owner.login}`;
        this.repositoriesStars = this.createElement('div', 'repositories__stars');
        this.repositoriesStars.textContent = `Stars: ${nameData.stargazers_count}`;
        this.closeImg = this.createImg('img', './img/211652_close_icon.svg', 'close', 'repositories__icon-close');
        this.closeImg.addEventListener('click', () => {

            const el = document.getElementById(`cont-${nameData.name}`);
            el.remove()
        })

        this.app.append(this.container);
        this.container.append(this.repositories);
        this.repositories.append(this.repositoriesList);
        this.repositories.append(this.closeImg);
        this.repositoriesList.append(this.repositoriesName);
        this.repositoriesList.append(this.repositoriesOwner);
        this.repositoriesList.append(this.repositoriesStars);
    }
}