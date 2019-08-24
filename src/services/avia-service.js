class AviaService {
  _apiBase = 'https://front-test.beta.aviasales.ru/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      console.error(`Could not fetch ${url}, received ${res.status}`);
      throw new Error();
    }

    return await res.json();
  }

  getSearchId() {
    this.searchId = this.getResource('search').searchId;
  }

  getTickets() {
    return this.getResource(`tickets?searchId=${this.searchId}`);
  }
}

export default new AviaService();