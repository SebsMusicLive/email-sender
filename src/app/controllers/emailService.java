import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.tu_empresa.proyecto.models.EmailRequest;

@Service
public class emailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarCorreo(EmailRequest emailRequest) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
        mensaje.setTo(emailRequest.getDestino());
        mensaje.setSubject(emailRequest.getAsunto());
        mensaje.setText(emailRequest.getMensaje());

        if (emailRequest.getCc() != null && !emailRequest.getCc().isEmpty()) {
            mensaje.setCc(emailRequest.getCc());
        }

        mailSender.send(mensaje);
    }
}
