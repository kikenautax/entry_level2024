# Lista de usuarios
users = [{
    "username": "admin",
    "password": "123456",
    "balance": 2000,
    "attempts": 0,
    "locked": False
}]

# Constante para el número máximo de intentos fallidos permitidos
MAX_ATTEMPTS = 3

# Función para buscar un usuario por su nombre de usuario
def find_user(username):
    return next((user for user in users if user["username"] == username), None)

# Función para imprimir el menú principal
def print_main_menu():
    print("\nPlease select an option:")
    print("1. Login")
    print("2. Register")
    print("3. Exit")

# Función para imprimir el menú de operaciones después del inicio de sesión
def print_operation_menu():
    print("\nPlease select an option:")
    print("1. View Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Transfer")
    print("5. Logout")

# Función para realizar el registro de un nuevo usuario
def register(username, password):
    users.append({
        "username": username,
        "password": password,
        "balance": 2000,
        "attempts": 0,
        "locked": False
    })
    print("Registration successful!")

# Función para realizar el inicio de sesión
def login(username, password):
    user = find_user(username)
    if user is not None and not user["locked"] and user["password"] == password:
        user["attempts"] = 0  # Restablecer el contador de intentos fallidos
        return True
    elif user is not None:
        user["attempts"] += 1
        if user["attempts"] == MAX_ATTEMPTS:
            user["locked"] = True
            print("Too many failed attempts. Account locked.")
        else:
            print(f"Invalid username or password. Attempts remaining: {MAX_ATTEMPTS - user['attempts']}")
    return False

# Función para ver el saldo
def view_balance(user):
    print("Your balance is:", user["balance"])

# Función para realizar un depósito
def deposit(amount, user):
    if amount < 0:
        print("Invalid amount")
    else:
        user["balance"] += amount
        print("Amount deposited successfully. New balance:", user["balance"])

# Función para realizar un retiro
def withdraw(amount, user):
    if amount < 0 or amount > user["balance"]:
        print("Invalid amount or insufficient funds")
    else:
        user["balance"] -= amount
        print("Amount withdrawn successfully. New balance:", user["balance"])

# Función para realizar una transferencia
def transfer(amount, sender, recipient):
    if amount < 0 or amount > sender["balance"]:
        print("Invalid amount or insufficient funds")
    else:
        sender["balance"] -= amount
        recipient["balance"] += amount
        print("Transfer successful. Your balance:", sender["balance"])

# Resto del código...

if __name__ == "__main__":
    print("Welcome to the online banking system!")

    while True:
        print_main_menu()
        choice = input("Enter your choice: ")

        if choice == "1":  # Login
            username = input("Enter your username: ")
            password = input("Enter your password: ")

            user = find_user(username)
            if user is not None and user["locked"]:
                print("Account is locked. Contact support.")
            elif login(username, password):
                print("Login successful!")
                while True:
                    print_operation_menu()
                    operation_choice = input("Enter your choice: ")

                    if operation_choice == "1":
                        view_balance(user)
                    elif operation_choice == "2":
                        amount = float(input("Enter the amount to deposit: "))
                        deposit(amount, user)
                    elif operation_choice == "3":
                        amount = float(input("Enter the amount to withdraw: "))
                        withdraw(amount, user)
                    elif operation_choice == "4":
                        amount = float(input("Enter the amount to transfer: "))
                        recipient_username = input("Enter the recipient's username: ")
                        recipient = find_user(recipient_username)
                        if recipient is not None:
                            transfer(amount, user, recipient)
                        else:
                            print("Recipient not found.")
                    elif operation_choice == "5":
                        print("Logout successful.")
                        break
                    else:
                        print("Invalid choice. Please try again.")
            else:
                print("Invalid username or password. Please try again.")
        elif choice == "2":  # Register
            username = input("Enter a username: ")
            password = input("Enter a password: ")
            register(username, password)
        elif choice == "3":  # Exit
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")
