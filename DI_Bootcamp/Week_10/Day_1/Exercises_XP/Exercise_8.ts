function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage all users and settings.";
        case "editor":
            return "Edit and publish content.";
        case "viewer":
            return "View content.";
        case "guest":
            return "Sign up to access more features.";
        default:
            return "Role not recognized. Please contact support.";
    }
}

console.log(getAction("admin"));   // Output: Manage all users and settings.
console.log(getAction("editor"));  // Output: Edit and publish content.
console.log(getAction("viewer"));  // Output: View content.
console.log(getAction("guest"));   // Output: Sign up to access more features.
console.log(getAction("unknown")); // Output: Role not recognized. Please contact support.
