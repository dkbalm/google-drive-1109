const resolvers = {
    File: {
        // set Query
    }
    Index: {
        // set Query
    }
    Video: {
        // set Query
    }
    NotificationHistory: {
        // set Query
    }

    Query: {
        file : async (_, { id }, { dataSources }) => {
            return dataSources.driveRestApi.getFile(id);
        },
        files : async (_, __, { dataSources }) => {
            return dataSources.driveRestApi.getFiles();
        },
        index : async (_, { id }, { dataSources }) => {
            return dataSources.indexerRestApi.getIndex(id);
        },
        indices : async (_, __, { dataSources }) => {
            return dataSources.indexerRestApi.getIndices();
        },
        video : async (_, { id }, { dataSources }) => {
            return dataSources.videoProcessingRestApi.getVideo(id);
        },
        videos : async (_, __, { dataSources }) => {
            return dataSources.videoProcessingRestApi.getVideos();
        },
        notificationHistory : async (_, { id }, { dataSources }) => {
            return dataSources.notificationRestApi.getNotificationHistory(id);
        },
        notificationHistories : async (_, __, { dataSources }) => {
            return dataSources.notificationRestApi.getNotificationHistories();
        },
    }
};

export default resolvers;
