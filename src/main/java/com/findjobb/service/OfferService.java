package com.findjobb.service;

import com.findjobb.database.Offer;
import com.findjobb.database.offerenum.Experience;
import com.findjobb.database.offerenum.FormOfEmployment;
import com.findjobb.database.offerenum.Industry;
import com.findjobb.database.offerenum.JobType;
import com.findjobb.dto.OfferDto;
import com.findjobb.repo.OfferRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OfferService {

    private final OfferRepo offerRepo;

    public final ResponseEntity<String> addOffer(final OfferDto offerDto) {
        Offer offer = offerRepo.save(offerBuilder(offerDto));
        return ResponseEntity.status(400).body(offer.toString());
    }

    public List<Offer> getOffers() {
        List<Offer> offers = offerRepo.findAll();
        System.out.println(offers);
        return offers;
    }




    private OfferDto offerDtoBuilder(final Offer body){
        return OfferDto.builder()
                .position(body.getPosition())
                .industry(body.getIndustry().toString())
                .experience(body.getExperience().toString())
                .jobType(body.getJobType().toString())
                .formOfEmployment(body.getFormOfEmployment().toString())
                .company(body.getCompany())
                .location(body.getLocation())
                .salaryMax(body.getSalaryMax().toString())
                .salaryMin(body.getSalaryMin().toString())
                .startOfferTime(body.getStartOfferTime().toString())
                .endOfferTime(body.getEndOfferTime().toString())
                .description(body.getDescription())
                .build();

    }

    private Offer offerBuilder(final OfferDto body) {

        return Offer.builder()
                .position(body.getPosition())
                .industry(Industry.valueOf(body.getIndustry()))
                .experience(Experience.valueOf(body.getExperience()))
                .jobType(JobType.valueOf(body.getJobType()))
                .formOfEmployment(FormOfEmployment.valueOf(body.getFormOfEmployment()))
                .company(body.getCompany())
                .location(body.getLocation())
                .salaryMax(new BigDecimal(body.getSalaryMax()))
                .salaryMin(new BigDecimal(body.getSalaryMin()))
                .startOfferTime(LocalDate.now())
                .endOfferTime(LocalDate.now().minusDays(31))
                .description(body.getDescription())
                .build();

    }
}
