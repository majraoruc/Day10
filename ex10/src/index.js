function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true,
        },
        002: {
            artist: "ACDC",
            title: "Enter Sandman",
            release_year: 1991,
            formats: {
                1: "CD",
                2: "LP",
                3: "8T",
            },
            gold: true,
        },
        003: {
            artist: "The Beatles",
            title: "Don't Let Me Down",
            release_year: 1970,
            formats: {
                1: "CD",
                2: "LP",
                3: "8T",
            },
            gold: true,
        }
    };
}

myFunction()[2];
module.exports = myFunction;