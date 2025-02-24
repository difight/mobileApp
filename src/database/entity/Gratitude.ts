import ApiDatabase from "../ApiDatabase";
import { getCurrentDateTime } from "../../lib/time";

class Gratitude extends ApiDatabase{
  constructor() {
    super('gratitude')
  }
  async add(data:object) {
    try {
        const doc = await this.post({...data, type: this.type, created: getCurrentDateTime()})
        console.log('Document added:', doc);
        return doc
    } catch(error) {
        console.error('Error adding document:', error);
    }
  }
  async find(id:string = '') {
    try {
      const doc = await this.get(id)
      console.log('Document get:', doc);
      return doc
    } catch(error) {
        console.error('Error getting document:', error);
    }
  }
}
export default new Gratitude()