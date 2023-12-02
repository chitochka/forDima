
const HABIT_KEY = 'HABIT_KEY';
const ls = localStorage
if (!ls.getItem(HABIT_KEY)) {
    ls.setItem(HABIT_KEY, JSON.stringify(

        [
            {
                id: 1,
                active: true,
                icon: "sport",
                name: "kliky",
                target: 10,
                image: "dumbbell.svg",
                days: [
                    { comment: "Nějaký popis" },
                    { comment: "Něco navíc" }
                ]
            },
            {
                id: 2,
                icon: "water",
                name: "volný čas",
                target: 10,
                image: "water.svg",
                days: [
                    { comment: "Výborně" }
                ]
            },
            {
                id: 3,
                icon: "food",
                name: "zdravá výživa",
                target: 10,
                image: "food.svg",
                days: [
                    { comment: "Výborně" }
                ]
            },
            {
                id: 4,
                icon: "add",
                name: "přidat koniček",
                target: 10,
                image: "add.svg",
                days: [
                    { comment: "Výborně" }
                ]
            }
        ]
            
    ));
}



