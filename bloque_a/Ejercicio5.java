public class Ejercicio5 {

    // TODO: Define la función estática calcularPromedio(double a, double b)
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        // TODO: Prueba la función calcularPromedio
        double promedio = calcularPromedio(8.5, 9.0);
        System.out.println("Promedio: " + promedio);

        // TODO: Instancia la clase Estudiante y llama a su método mostrarFicha()
        Estudiante estudiante = new Estudiante("Carlos", 20, "tercero");
        estudiante.mostrarFicha();
    }
}

// TODO: Crea aquí la clase Estudiante con sus atributos, constructor y métodos
class Estudiante {
    String nombre;
    int edad;
    String curso;

    public Estudiante(String nombre, int edad, String curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    public void mostrarFicha() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Curso: " + curso);
    }
}
