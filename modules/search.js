
export class Search {
    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.searchInput.addEventListener('keyup', this.debounce(this.searchRepositories.bind(this), 500));
    }

    async searchRepositories() {
        const searchValue = this.view.searchInput.value;

        if (searchValue) {
            try {
                this.clearRepositories()
                await this.api.loadRepositories(searchValue).then((res) => {
                    res.json().then(res => {
                        res.items.forEach(repo => this.view.createRepositories(repo))
                    })
                })
            } catch (e) {
                console.log('Error: ' + e)
            }
        } else {
            this.clearRepositories()
        }
    }

    clearRepositories() {
        this.view.searchAutocom.innerHTML = '';
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const leater = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(leater, wait);
            if (callNow) func.apply(context, args);
        }
    }
}