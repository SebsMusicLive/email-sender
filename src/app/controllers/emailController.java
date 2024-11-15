import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.tu_empresa.proyecto.models.EmailRequest;
import com.tu_empresa.proyecto.services.EmailService;

@RestController
@RequestMapping("/api/emails")
public class emailController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> enviarCorreo(@RequestBody EmailRequest emailRequest) {
        emailService.enviarCorreo(emailRequest);
        return ResponseEntity.ok("Correo enviado exitosamente");
    }
}
