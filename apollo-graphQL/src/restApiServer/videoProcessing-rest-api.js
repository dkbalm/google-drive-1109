import {RESTDataSource} from 'apollo-datasource-rest';

class videoProcessingRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8084';
        // dev for IDE
            // this.baseURL = 'http://8084-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://video processing:8080';
    }

    async getVideos() {
        const data = await this.get('/videos', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.videos;
    }

    // GET
    async getVideo(id) {
        const data = await this.get(`/videos/${id}`, {})
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

export default videoProcessingRestApi;



