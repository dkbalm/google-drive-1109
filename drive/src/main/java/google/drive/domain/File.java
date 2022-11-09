package google.drive.domain;

import google.drive.domain.FileUploaded;
import google.drive.domain.FileDeleted;
import google.drive.DriveApplication;
import javax.persistence.*;
import java.util.List;
import lombok.Data;
import java.util.Date;

@Entity
@Table(name="File_table")
@Data

public class File  {

    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    
    
    
    
    
    private Long id;
    
    
    
    
    
    private String name;
    
    
    
    
    
    private String type;
    
    
    
    
    
    private Long size;
    
    
    
    
    
    private String test;

    @PostPersist
    public void onPostPersist(){


        FileUploaded fileUploaded = new FileUploaded(this);
        fileUploaded.publishAfterCommit();



        FileDeleted fileDeleted = new FileDeleted(this);
        fileDeleted.publishAfterCommit();

    }
    @PreRemove
    public void onPreRemove(){
    }

    @PreRemove
    public void onPreRemove(){


        FileDeleted fileDeleted = new FileDeleted(this);
        fileDeleted.publishAfterCommit();

    }


    public static FileRepository repository(){
        FileRepository fileRepository = DriveApplication.applicationContext.getBean(FileRepository.class);
        return fileRepository;
    }






}
