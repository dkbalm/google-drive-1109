import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar Date
    scalar Long
    scalar Double
    scalar Integer

    type File {
    	id: Long! 
			name: String 
			type: String 
			size: Long
    }
    type Index {
    	id: Long! 
			fileId: Long 
			keywords: List<String>
    }
    type Video {
    	id: Long! 
			fileId: Long 
			url: String
    }
    type NotificationHistory {
    	id: Long! 
			message: String 
			userId: String
    }

    type Query {
      files: [File]
      file(id: Long!): File
      indices: [Index]
      index(id: Long!): Index
      videos: [Video]
      video(id: Long!): Video
      notificationHistories: [NotificationHistory]
      notificationHistory(id: Long!): NotificationHistory
    }
`;

export default typeDefs;

