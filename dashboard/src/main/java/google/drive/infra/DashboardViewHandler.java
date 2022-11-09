package google.drive.infra;

import google.drive.domain.*;
import google.drive.config.kafka.KafkaProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class DashboardViewHandler {


    @Autowired
    private DashboardRepository dashboardRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void whenFileUploaded_then_CREATE_1 (@Payload FileUploaded fileUploaded) {
        try {

            if (!fileUploaded.validate()) return;

            // view 객체 생성
            Dashboard dashboard = new Dashboard();
            // view 객체에 이벤트의 Value 를 set 함
            dashboard.setName(fileUploaded.getName());
            dashboard.setType(fileUploaded.getType());
            dashboard.setSize(String.valueOf(fileUploaded.getSize()));
            dashboard.setIsUploaded(true);
            dashboard.setId(fileUploaded.getId());
            // view 레파지 토리에 save
            dashboardRepository.save(dashboard);

        }catch (Exception e){
            e.printStackTrace();
        }
    }


    @StreamListener(KafkaProcessor.INPUT)
    public void whenFileIndexed_then_UPDATE_1(@Payload FileIndexed fileIndexed) {
        try {
            if (!fileIndexed.validate()) return;
                // view 객체 조회
            Optional<Dashboard> dashboardOptional = dashboardRepository.findById(fileIndexed.getFileId());

            if( dashboardOptional.isPresent()) {
                 Dashboard dashboard = dashboardOptional.get();
            // view 객체에 이벤트의 eventDirectValue 를 set 함
                dashboard.setIsIndexed(true);    
                // view 레파지 토리에 save
                 dashboardRepository.save(dashboard);
                }


        }catch (Exception e){
            e.printStackTrace();
        }
    }
    @StreamListener(KafkaProcessor.INPUT)
    public void whenVideoProcessed_then_UPDATE_2(@Payload VideoProcessed videoProcessed) {
        try {
            if (!videoProcessed.validate()) return;
                // view 객체 조회
            Optional<Dashboard> dashboardOptional = dashboardRepository.findById(videoProcessed.getFileId());

            if( dashboardOptional.isPresent()) {
                 Dashboard dashboard = dashboardOptional.get();
            // view 객체에 이벤트의 eventDirectValue 를 set 함
                dashboard.setVideoUrl(videoProcessed.getUrl());    
                // view 레파지 토리에 save
                 dashboardRepository.save(dashboard);
                }


        }catch (Exception e){
            e.printStackTrace();
        }
    }
    @StreamListener(KafkaProcessor.INPUT)
    public void whenFileDeleted_then_UPDATE_3(@Payload FileDeleted fileDeleted) {
        try {
            if (!fileDeleted.validate()) return;
                // view 객체 조회
            Optional<Dashboard> dashboardOptional = dashboardRepository.findById(fileDeleted.getId());

            if( dashboardOptional.isPresent()) {
                 Dashboard dashboard = dashboardOptional.get();
            // view 객체에 이벤트의 eventDirectValue 를 set 함
                dashboard.setIsUploaded(false);    
                // view 레파지 토리에 save
                 dashboardRepository.save(dashboard);
                }


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @StreamListener(KafkaProcessor.INPUT)
    public void whenFileDeleted_then_UPDATE_3(@Payload FileDeleted fileDeleted) {
        try {
            if (!fileDeleted.validate()) return;
                // view 객체 조회
            Optional<Dashboard> dashboardOptional = dashboardRepository.findById(fileDeleted.getId());

            if( dashboardOptional.isPresent()) {
                 Dashboard dashboard = dashboardOptional.get();
            // view 객체에 이벤트의 eventDirectValue 를 set 함
                dashboard.setIsUploaded(false);    
                // view 레파지 토리에 save
                 dashboardRepository.save(dashboard);
            }


        }catch (Exception e){
            e.printStackTrace();
        }
    }

}

