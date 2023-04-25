package com.findjobb.database;

import com.findjobb.database.offerenum.Experience;
import com.findjobb.database.offerenum.FormOfEmployment;
import com.findjobb.database.offerenum.Industry;
import com.findjobb.database.offerenum.JobType;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Offer {

    @Id
    @GeneratedValue
    private Long id;

    private String position;

    @Enumerated(EnumType.STRING)
    private Industry industry;

    @Enumerated(EnumType.STRING)
    private Experience experience;

    @Enumerated(EnumType.STRING)
    private JobType jobType;

    @Enumerated(EnumType.STRING)
    private FormOfEmployment formOfEmployment;

    private String company;

    private String location;

    private BigDecimal salaryMin;

    private BigDecimal salaryMax;

    private LocalDate startOfferTime;

    private LocalDate endOfferTime;

    private String description;

    public Offer(String position, Industry industry, Experience experience, JobType jobType, com.findjobb.database.offerenum.FormOfEmployment formOfEmployment, String company, String location, BigDecimal salaryMin, BigDecimal salaryMax, LocalDate startOfferTime, LocalDate endOfferTime, String description) {
        this.position = position;
        this.industry = industry;
        this.experience = experience;
        this.jobType = jobType;
        this.formOfEmployment = formOfEmployment;
        this.company = company;
        this.location = location;
        this.salaryMin = salaryMin;
        this.salaryMax = salaryMax;
        this.startOfferTime = startOfferTime;
        this.endOfferTime = endOfferTime;
        this.description = description;
    }
}
