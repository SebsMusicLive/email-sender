import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class emailRequest {

    @NotEmpty(message = "El campo 'destino' es obligatorio")
    @Email(message = "El correo debe tener un formato válido")
    private String destino;

    @NotEmpty(message = "El campo 'asunto' es obligatorio")
    private String asunto;

    private String cc;

    @NotEmpty(message = "El campo 'mensaje' es obligatorio")
    private String mensaje;

    // Getters y setters
    public String getDestino() { return destino; }
    public void setDestino(String destino) { this.destino = destino; }

    public String getAsunto() { return asunto; }
    public void setAsunto(String asunto) { this.asunto = asunto; }

    public String getCc() { return cc; }
    public void setCc(String cc) { this.cc = cc; }

    public String getMensaje() { return mensaje; }
    public void setMensaje(String mensaje) { this.mensaje = mensaje; }
}
