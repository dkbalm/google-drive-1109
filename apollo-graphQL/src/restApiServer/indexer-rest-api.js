import {RESTDataSource} from 'apollo-datasource-rest';

class indexerRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8083';
        // dev for IDE
            // this.baseURL = 'http://8083-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://indexer:8080';
    }

    async getIndices() {
        const data = await this.get('/indices', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.indices;
    }

    // GET
    async getIndex(id) {
        const data = await this.get(`/indices/${id}`, {})
        var value = this.stringToJson(data);
        return value;
    }

    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default indexerRestApi;



