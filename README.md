import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buys")
public class BuyController {

    @Autowired
    private BuyService buyService;

    @GetMapping
    public List<Buy> getAllBuys() {
        return buyService.getAllBuys();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Buy> getBuyById(@PathVariable String id) {
        Buy buy = buyService.getBuyById(id);
        if (buy != null) {
            return ResponseEntity.ok(buy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Buy createBuy(@RequestBody Buy buy) {
        return buyService.createBuy(buy);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Buy> updateBuy(@PathVariable String id, @RequestBody Buy buy) {
        if (buyService.getBuyById(id) != null) {
            return ResponseEntity.ok(buyService.updateBuy(id, buy));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBuy(@PathVariable String id) {
        if (buyService.getBuyById(id) != null) {
            buyService.deleteBuy(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}