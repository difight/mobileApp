import ApiDatabase from "../ApiDatabase";

class Gratitude extends ApiDatabase{
  constructor() {
    super('gratitude')
  }
  async add(data) {
    try {
        const doc = this.post({...data, type: this.type})
        console.log('Document added:', doc);
        return doc
    } catch(error) {
        console.error('Error adding document:', doc);
    }
  }
}
export default new Gratitude()