import PouchDB from 'pouchdb-react-native';
import sqlitePlugin from 'pouchdb-adapter-react-native-sqlite';

PouchDB.plugin(sqlitePlugin);

const localDB = new PouchDB('app_database', { adapter: 'react-native-sqlite' });

export async function addGratitude(data) {
    try {
        const doc = post({...data, type: 'gratitude'})
        console.log('Document added:', doc);
    } catch(error) {
        console.error('Error adding document:', doc);
    }
}

async function post(data) {
    return await localDB.post(data)
}

async function get(type, id = false) {
    if (id) {
        return await localDB.get(id)
    }
    if (type) {
        await localDB.createIndex({ index: { fields: [type] } });
        return await localDB.find({
            selector: { type }
        })
    }
}

async function remove(data) {
    return await localDB.remove(data)
}
