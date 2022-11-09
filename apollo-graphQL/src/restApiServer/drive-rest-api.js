import {RESTDataSource} from 'apollo-datasource-rest';

class driveRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8082';
        // dev for IDE
            // this.baseURL = 'http://8082-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://drive:8080';
    }

    async getFiles() {
        const data = await this.get('/files', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.files;
    }

    // GET
    async getFile(id) {
        const data = await this.get(`/files/${id}`, {})
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

export default driveRestApi;



