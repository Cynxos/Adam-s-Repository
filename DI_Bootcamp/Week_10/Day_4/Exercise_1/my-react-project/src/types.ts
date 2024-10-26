export interface Profile {
    name: string;
    age: number;
}

export interface UserProfile extends Profile {
    bio: string;
}
