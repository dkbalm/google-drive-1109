import {ApolloServer} from 'apollo-server';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';
import dashboardRestApi from './restApiServer/dashboard-rest-api.js'
import driveRestApi from './restApiServer/drive-rest-api.js'
import indexerRestApi from './restApiServer/indexer-rest-api.js'
import videoProcessingRestApi from './restApiServer/videoProcessing-rest-api.js'
import notificationRestApi from './restApiServer/notification-rest-api.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        dashboardRestApi: new dashboardRestApi(),
        driveRestApi: new driveRestApi(),
        indexerRestApi: new indexerRestApi(),
        videoProcessingRestApi: new videoProcessingRestApi(),
        notificationRestApi: new notificationRestApi(),
    }),
});

server.listen({
    port: 8089,
}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
