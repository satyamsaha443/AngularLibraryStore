import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
// ... other imports

@Document(collection = "stockbay_client")
public class Client implements Serializable {
    // ... other fields

    @Id
    private String id; // Changed from Long to String for MongoDB ObjectId

    // ... constructors, getters and setters
}


import org.springframework.data.mongodb.repository.MongoRepository;
import dev.delta.stockbay.entities.Client;

public interface ClientRepository extends MongoRepository<Client, String> {
    // Custom query methods can be added here
}

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
// ... other imports

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public Client saveOrUpdate(Client client) {
        return clientRepository.save(client);
    }

    public Iterable<Client> findAll() {
        return clientRepository.findAll();
    }

    public Optional<Client> findById(String id) {
        return clientRepository.findById(id);
    }

    public void delete(String id) {
        clientRepository.deleteById(id);
    }
}



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// ... other imports

@RestController
@RequestMapping("/stockbay/client")
@CrossOrigin
public class ClientController {
    @Autowired
    private ClientService clientService;

    // ... other methods

    @GetMapping("/{id}")
    public ResponseEntity<?> getClientById(@PathVariable String id) {
        Optional<Client> client = clientService.findById(id);
        return client.map(response -> ResponseEntity.ok().body(response))
                     .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable String id) {
        clientService.delete(id);
        return new ResponseEntity<>("Client was deleted", HttpStatus.OK);
    }

    // ... other methods
}
