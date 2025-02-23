import PouchDB from 'pouchdb-react-native';
import PouchDBWeb from 'pouchdb-browser'
import findPlugin from 'pouchdb-find'

class ApiDatabase {
  #localDB
  type:string

  constructor(type:string) {
    if (typeof window !== 'undefined') {
      this.#localDB = new PouchDBWeb('app_database');      
      PouchDBWeb.plugin(findPlugin);
    } else {
      this.#localDB = new PouchDB('app_database');
    }
    this.type = type
  }

  async get(id:string = '') {
    if (id) {
      return await this.#localDB.get(id)
    }
    if (this.type) {
        await this.#localDB.createIndex({ index: { fields: ['type'] } });
        return await this.#localDB.find({
            selector: { type: this.type }
        })
    }
  }

  async post(data:object) {
    return await this.#localDB.post(data)
  }

  async remove(id:string) {
    return await this.#localDB.remove(id)
  }
}

export default ApiDatabase