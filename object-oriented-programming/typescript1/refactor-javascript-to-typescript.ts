interface SocialMedia {
    instagram: string;
    linkedIn: string;
}

interface person {
    name: string;
    age: number;
    socialMedia: SocialMedia;
};

const person1: person = {
    name: 'yourName',
    age: 20,
    socialMedia: {
        instagram: "instagram URL",
        linkedIn:'linkedIn URL'
    }
};