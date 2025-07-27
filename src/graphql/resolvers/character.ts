export const characterResolvers = {
    Query: {
        characters: async () => {
            return [
                {
                    id: "1",
                    name: "Peter Parker",
                    alias: "Spider-Man",
                    alignment: "HERO",
                    powers: ["Wall-Crawling", "Spider Sense", "Web Shooting", "Enhanced Strength"],
                    publisher: "Marvel",
                    createdBy: "Stan Lee",
                    debutYear: 1962,
                    imageUrl: "https://example.com/spiderman.jpg",
                },
                {
                    id: "2",
                    name: "Tony Stark",
                    alias: "Iron Man",
                    alignment: "HERO",
                    powers: ["Powered Armor", "Genius Intellect", "Engineering", "Wealth"],
                    publisher: "Marvel",
                    createdBy: "Stan Lee",
                    debutYear: 1963,
                    imageUrl: "https://example.com/ironman.jpg",
                },
            ];
        },
        character: async (_: any, { id }: { id: string }) => {
            // Mock single character lookup
            const characters = [
                {
                    id: "1",
                    name: "Peter Parker",
                    alias: "Spider-Man",
                    alignment: "HERO",
                    powers: ["Wall-Crawling", "Spider Sense", "Web Shooting", "Enhanced Strength"],
                    publisher: "Marvel",
                    createdBy: "Stan Lee",
                    debutYear: 1962,
                    imageUrl: "https://example.com/spiderman.jpg",
                },
            ];

            return characters.find(char => char.id === id) || null;
        },
    },
};
