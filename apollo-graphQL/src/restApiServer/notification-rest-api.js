import {RESTDataSource} from 'apollo-datasource-rest';

class notificationRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8085';
        // dev for IDE
            // this.baseURL = 'http://8085-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://notification:8080';
    }

    async getNotificationHistories() {
        const data = await this.get('/notificationHistories', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.notificationHistories;
    }

    // GET
    async getNotificationHistory(id) {
        const data = await this.get(`/notificationHistories/${id}`, {})
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

export default notificationRestApi;



