import ApiDatabase from "../ApiDatabase";
import { getCurrentDateTime, getCurrenStartEndDateTime} from "../../lib/datetime"

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
  async checkForPost() {
    try {
      const startEndData = getCurrenStartEndDateTime()
      const doc = await this.findByDB({
        selector: {
          created: { $gte: startEndData.dateFrom, $lte: startEndData.dateTo }          
        }
      })
      if (doc) {
        return false
      }
      return true
    } catch(error) {
        console.error('Error getting document:', error);
    }
  }
}
export default new Gratitude()