package com.findjobb.controller;


import com.findjobb.database.Offer;
import com.findjobb.dto.OfferDto;
import com.findjobb.service.OfferService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Slf4j
@RestController
@RequestMapping("api/offer")
@RequiredArgsConstructor
public class OfferController {

    private final OfferService offerService;

    @PostMapping()
    public final ResponseEntity<String> addOffer(@RequestBody  final OfferDto body) {

        return offerService.addOffer(body);

    }

    @GetMapping
    public final  ResponseEntity<List<Offer>> getOffers() {
        List<Offer> offers = offerService.getOffers();

        return ResponseEntity.ok(offers);

    }

}
