interface User {
    name: string;
    email: string;
}

interface Admin {
    adminLevel: number;
}

type AdminUser = User & Admin;

function getProperty(obj: AdminUser, propName: string): any {
    if (propName in obj) {
        return (obj as any)[propName];
    }
    return undefined;
}

const adminUser: AdminUser = { name: "John Doe", email: "john@example.com", adminLevel: 5 };

console.log(getProperty(adminUser, "name"));        // Output: John Doe
console.log(getProperty(adminUser, "email"));       // Output: john@example.com
console.log(getProperty(adminUser, "adminLevel"));  // Output: 5
console.log(getProperty(adminUser, "nonExistent")); // Output: undefined
