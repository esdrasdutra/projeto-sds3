package com.devsuperior.dsvendas.services;

import java.util.List;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repo;

    @Autowired
    private SellerRepository sellerRepo;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable  pageable){
        sellerRepo.findAll();
        Page<Sale> result =  repo.findAll(pageable);

        return result.map(x -> new SaleDTO(x));
    }
    
    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller(){
        return repo.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller(){
        return repo.successGroupedBySeller();
    }
}