import {RESTDataSource} from 'apollo-datasource-rest';

class dashboardRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8081';
        // dev for IDE
            // this.baseURL = 'http://8081-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://dashboard:8080';
    }


    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default dashboardRestApi;



