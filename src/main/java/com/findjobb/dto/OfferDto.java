package com.findjobb.dto;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.findjobb.database.offerenum.Industry;
import lombok.*;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@Setter
public class OfferDto {

    private Long id;
    private String position;
    private String industry;
    private String experience;
    private String jobType;
    private String formOfEmployment;
    private String company;
    private String location;
    private String salaryMin;
    private String salaryMax;
    private String startOfferTime;
    private String endOfferTime;
    private String description;
}
