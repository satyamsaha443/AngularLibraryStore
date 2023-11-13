import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Inv.models.Revenue;
import com.Inv.repository.RevenueRepository; // Assuming you have this repository

@Service
public class RevenueService {

    @Autowired
    private RevenueRepository revenueRepository;

    public List<Revenue> getAllRevenues() {
        return revenueRepository.findAll();
    }

    public Optional<Revenue> getRevenueById(String id) {
        return revenueRepository.findById(id);
    }

    public Revenue createRevenue(Revenue revenue) {
        return revenueRepository.save(revenue);
    }

    public Revenue updateRevenue(String id, Revenue revenue) {
        revenue.setId(id);
        return revenueRepository.save(revenue);
    }

    public void deleteRevenue(String id) {
        revenueRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/revenues")
public class RevenueController {

    @Autowired
    private RevenueService revenueService;

    @GetMapping
    public List<Revenue> getAllRevenues() {
        return revenueService.getAllRevenues();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Revenue> getRevenueById(@PathVariable String id) {
        return revenueService.getRevenueById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Revenue createRevenue(@RequestBody Revenue revenue) {
        return revenueService.createRevenue(revenue);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Revenue> updateRevenue(@PathVariable String id, @RequestBody Revenue revenue) {
        return revenueService.getRevenueById(id)
                .map(storedRevenue -> ResponseEntity.ok(revenueService.updateRevenue(id, revenue)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRevenue(@PathVariable String id) {
        if (revenueService.getRevenueById(id).isPresent()) {
            revenueService.deleteRevenue(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Inv.models.Sell;
import com.Inv.repository.SellRepository; // Assuming you have this repository

@Service
public class SellService {

    @Autowired
    private SellRepository sellRepository;

    public List<Sell> getAllSells() {
        return sellRepository.findAll();
    }

    public Optional<Sell> getSellById(String id) {
        return sellRepository.findById(id);
    }

    public Sell createSell(Sell sell) {
        return sellRepository.save(sell);
    }

    public Sell updateSell(String id, Sell sell) {
        sell.setId(id);
        return sellRepository.save(sell);
    }

    public void deleteSell(String id) {
        sellRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/sells")
public class SellController {

    @Autowired
    private SellService sellService;

    @GetMapping
    public List<Sell> getAllSells() {
        return sellService.getAllSells();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sell> getSellById(@PathVariable String id) {
        return sellService.getSellById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Sell createSell(@RequestBody Sell sell) {
        return sellService.createSell(sell);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sell> updateSell(@PathVariable String id, @RequestBody Sell sell) {
        return sellService.getSellById(id)
                .map(storedSell -> ResponseEntity.ok(sellService.updateSell(id, sell)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSell(@PathVariable String id) {
        if (sellService.getSellById(id).isPresent()) {
            sellService.deleteSell(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Inv.models.Supplier;
import com.Inv.repository.SupplierRepository; // Assuming you have this repository

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Optional<Supplier> getSupplierById(String id) {
        return supplierRepository.findById(id);
    }

    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(String id, Supplier supplier) {
        supplier.setId(id);
        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(String id) {
        supplierRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping
    public List<Supplier> getAllSuppliers() {
        return supplierService.getAllSuppliers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable String id) {
        return supplierService.getSupplierById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierService.createSupplier(supplier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable String id, @RequestBody Supplier supplier) {
        return supplierService.getSupplierById(id)
                .map(storedSupplier -> ResponseEntity.ok(supplierService.updateSupplier(id, supplier)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSupplier(@PathVariable String id) {
        if (supplierService.getSupplierById(id).isPresent()) {
            supplierService.deleteSupplier(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.Inv.models.WareHouse;
import com.Inv.repository.WareHouseRepository; // Assuming you have this repository

@Service
public class WareHouseService {

    @Autowired
    private WareHouseRepository wareHouseRepository;

    public List<WareHouse> getAllWareHouses() {
        return wareHouseRepository.findAll();
    }

    public Optional<WareHouse> getWareHouseById(String id) {
        return wareHouseRepository.findById(id);
    }

    public WareHouse createWareHouse(WareHouse wareHouse) {
        return wareHouseRepository.save(wareHouse);
    }

    public WareHouse updateWareHouse(String id, WareHouse wareHouse) {
        wareHouse.setId(id);
        return wareHouseRepository.save(wareHouse);
    }

    public void deleteWareHouse(String id) {
        wareHouseRepository.deleteById(id);
    }

    // Additional business logic and methods can be added here
}


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/warehouses")
public class WareHouseController {

    @Autowired
    private WareHouseService wareHouseService;

    @GetMapping
    public List<WareHouse> getAllWareHouses() {
        return wareHouseService.getAllWareHouses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<WareHouse> getWareHouseById(@PathVariable String id) {
        return wareHouseService.getWareHouseById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public WareHouse createWareHouse(@RequestBody WareHouse wareHouse) {
        return wareHouseService.createWareHouse(wareHouse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WareHouse> updateWareHouse(@PathVariable String id, @RequestBody WareHouse wareHouse) {
        return wareHouseService.getWareHouseById(id)
                .map(storedWareHouse -> ResponseEntity.ok(wareHouseService.updateWareHouse(id, wareHouse)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWareHouse(@PathVariable String id) {
        if (wareHouseService.getWareHouseById(id).isPresent()) {
            wareHouseService.deleteWareHouse(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional endpoints can be added here
}







