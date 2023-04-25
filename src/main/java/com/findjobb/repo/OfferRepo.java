package com.findjobb.repo;

import com.findjobb.database.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepo extends JpaRepository<Offer,Long> {
}
