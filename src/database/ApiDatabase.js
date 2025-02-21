import PouchDB from 'pouchdb-react-native';
import sqlitePlugin from 'pouchdb-adapter-react-native-sqlite';

class ApiDatabase {
  
  constructor(type) {
    PouchDB.plugin(sqlitePlugin);
    this.localDB = new PouchDB('app_database', { adapter: 'react-native-sqlite' });
    this.type = type
  }

  async get(id = false) {
    if (id) {
      return await this.localDB.get(id)
    }
    if (this.type) {
        await this.localDB.createIndex({ index: { fields: [this.type] } });
        return await this.localDB.find({
            selector: { type: this.type }
        })
    }
  }

  async post(data) {
    return await this.localDB.post(data)
  }

  async remove(data) {
    return await this.localDB.remove(data)
  }
}

export default ApiDatabase