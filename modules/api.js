
const URL = 'https://api.github.com/';

const USER_PER_PAGE = 5;

export class Api {

    async loadRepositories(value) {
        return await fetch(`${URL}search/repositories?q=${value}&sort=stars&per_page=${USER_PER_PAGE}`)
    }
}