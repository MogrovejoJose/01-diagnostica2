import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // TODO: Instancia la clase Scanner
        Scanner scanner = new Scanner(System.in);

        // TODO: Lee dos números por teclado
        System.out.print("Introduce el primer número: ");
        double numero1 = scanner.nextDouble();

        System.out.print("Introduce el segundo número: ");
        double numero2 = scanner.nextDouble();

        // TODO: Calcula y muestra suma, resta, multiplicación y división
        System.out.println("Suma: " + (numero1 + numero2));
        System.out.println("Resta: " + (numero1 - numero2));
        System.out.println("Multiplicación: " + (numero1 * numero2));
        System.out.println("División: " + (numero1 / numero2));
    }
}

