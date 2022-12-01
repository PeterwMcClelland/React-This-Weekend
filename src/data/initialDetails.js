

const initialDetails = [
    {
       id: 1,
       imgPath: "./assets/img/beavertonpark.jpeg",
       name: "Beaverton - Skate Park",
       info: "Ramps/Ledges",
       address: "NW Schlottman Pl, Beaverton, OR 97006",
    },
    {
        id: 2,
        imgPath: "./assets/img/ParkBlocks.jpeg",
        name: "Park Blocks - Stairs",
        info: "Long 9 Stair.",
        address: "1000 SW Park Ave, Portland, Oregon.",
    },
    {
        id: 3,
        imgPath: "./assets/img/Burnside.png",
        name: "Burnside - Skate Park",
        info: "Iconic DIY Skatepark",
        address: "SE 2nd Ave, Portland, OR 97232",
    },
    {
        id: 4,
        imgPath: "./assets/img/calspharmacy.png",
        name: "Cal's Pharmacy - Skate Shop",
        // info: "https://calspharmacy.com/",
        address: "1400 E Burnside St, Portland, OR 97214",
    },
    {
        id: 5,
        imgPath: "./assets/img/capitalhill9.png",
        name: "Capital Hill 9 - Rails",
        info: "Capitol Hill 9 Stair rail.",
        address: "8401 SW 17th Ave, Portland, OR 97219, USA",
    },
    {
        id: 6,
        imgPath: "./assets/img/catspaw-004.jpeg",
        name: "Cats Paw Saloon - Bar",
        info: "Owned by Mickey Reyes, it's a great dive bar.",
        address: "3565 SE Division St, Portland, OR 97202",
    },
    {
        id: 7,
        imgPath: "./assets/img/church9stair.png",
        name: "Church 9 - Stairs",
        info: "9 stair at a church.",
        address: "NW Everett & 19th, Portland, OR 97209, USA",
    },
    {
        id: 8,
        imgPath: "./assets/img/Crestonledge.png",
        name: "Creston Ledge - Ledges",
        info: "Shoot out ledge at Creston Elementary School.",
        address: "4701 SE Bush St, Portland, OR 97206, USA",
    },
    {
        id: 9,
        imgPath: "./assets/img/dwnledge.png",
        name: "Goose Hollow - Ledges",
        info: "Goose Hollow long downhill ledge.",
        address: "1643 SW Montgomery St, Portland, OR 97201, USA",
    },
    {
        id: 10,
        imgPath: "./assets/img/flatbarrail.png",
        name: "Flat Bar - Rails",
        info: "Down hill flat bars in North West Portland.",
        address: "2230 W Burnside St, Portland, OR 97210, USA",
    },
    {
        id: 11,
        imgPath: "./assets/img/HalfCircle.png",
        name: "Half Circle - Ledges",
        info: "Fun ledge/ manual in downtown Portland.",
        address: "198 SW 6th Ave, Portland, Oregon",
    },
    {
        id: 12,
        imgPath: "./assets/img/harriettubman.png",
        name: "Harriet Tubman - Rails",
        info: "7 Stair Rail",
        address: "2231 N Flint Ave, Portland, OR 97227, USA",
    },
    {
        id: 13,
        imgPath: "./assets/img/lafitness-rail.png",
        name: "LA Fitness - Rails",
        info: "8 stair rail in the parking garage of LA Fitness.",
        address: "1420 Lloyd Center, Portland, OR 97232, USA",
    },
    {
        id: 14,
        imgPath: "./assets/img/lafitness13.png",
        name: "LA Fitness 13 - Stair / Rail.",
        info: "Go after hours to avoid secerity.",
        address: "1420 Lloyd Center, Portland, OR 97232, USA",
    },
    {
        id: 15,
        imgPath: "./assets/img/RckJjHV.jpeg",
        name: "Common Wealth - Skate Park / Skate Shop",
        info: "$10 for 2 Hours, $13 All Day",
        address: "1425 SE 20th Ave., Portland, OR",
    },
   {
        id: 16,
        imgPath: "./assets/img/rockmanny.png",
        name: "Rock Manny - Manuals",
        info: "Manual pad in the park blocks.",
        address: "Location: 827 SW Columbia St, Portland, OR 97201, USA",
    },
    {
        id: 17,
        imgPath: "./assets/img/savier-bump.jpeg",
        name: "Savier Bump - Bumps",
        info: "Big drop ruff landing.",
        address: "331 SE Madison St #120, Portland, OR 97214, USA",
    },
     
    {
        id: 18,
        imgPath: "./assets/img/Shrunken-Head.png",
        name: "Shrunken Head - Skate Shop",
        info: "Skate Shop in SouthEast Portland",
        address: "531 SE Morrison St, Portland, OR 97214",
    },
    {
        id: 19,
        imgPath: "./assets/img/tactics.png",
        name: "Tactics - Skate Shop",
        info: "Open 10AM-8PM",
        address: "901 NW Davis St, Portland, OR 97209",
    },
    {
        id: 20,
        imgPath: "./assets/img/waterfronhubba.png",
        name: "WaterFront Hubba - Hubba Ledge",
        info: "Long 4 stair hubba.",
        address: "Bill Naito Legacy Fountain, 2 SW Naito Pkwy, Portland, OR 97204, USA",
    },
    {
        id: 21,
        imgPath: "./assets/img/zoobombgap.png",
        name: "Zoo Bomb Gap - Flat Gap",
        info: "Down hill flat gap.",
        address: "2670 SW Tichner Dr, Portland, OR 97205, USA",
    },
    {
        id: 22,
        imgPath: "./assets/img/lentledge.png",
        name: "Lent Planters - Ledges",
        info: "Multiple small planter ledges.",
        address: "5105 SE 97th Ave, Portland, OR 97266, USA",
    },
    {
        id: 23,
        imgPath: "./assets/img/HumpLedges.jpg",
        name: "Hump Ledges - Ledges",
        info: "Long wavy ledges.",
        address: "810 SE Belmont St #100, Portland, OR 97214, USA",
    },
    {
        id: 24,
        imgPath: "./assets/img/banktoledge.png",
        name: "Bank Rail - Banks / Rails",
        info: "Bank to Rail",
        address: "4341 SW View Point Terrace, Portland, OR 97239, USA",
    },
    {
        id: 25,
        imgPath: "./assets/img/EdBennidict.png",
        name: "Ed Benedict - Skate Park",
        info: "Ledges rails and stairs.",
        address: "10125 SE Powell Blvd, Portland, OR 97266",
    },
    {
        id: 26,
        imgPath: "./assets/img/bankgap.png",
        name: "Bank to Bank Gap - DIY Bank",
        info: "Two DIY Banks with a gap in the middle.",
        address: "706 OR-99E, Portland, OR 97214, USA",
    },
    {
        id: 27,
        imgPath: "./assets/img/DIYbarrier.png",
        name: "Larrabee Barrier - Banks / Barriers",
        info: "Larrabee DIY Barrier.",
        address: "2399 N Harding Ave, Portland, OR 97227, USA",
    },
    {
        id: 28,
        imgPath: "./assets/img/Block17.png",
        name: "Block 17 - 10/12 stair",
        info: "10 to 12 stair with a slanted landing.",
        address: "1315 NW 11th Ave, Portland, OR 97209, USA",
    },
    {
        id: 29,
        imgPath: "./assets/img/catholicchurch6.png",
        name: "Catholic Church 6 - Stairs / Rails",
        info: "6 Stair Rail",
        address: "3400 SE 43rd Ave, Portland, OR 97206, USA",
    },
    {
        id: 30,
        imgPath: "./assets/img/21StairRail.png",
        name: "Madison Rail - Rails",
        info: "21 Stair Rail",
        address: "226 SE Madison St, Portland, OR 97214, USA",
    },
    {
        id: 31,
        imgPath: "./assets/img/ChristChurch.png",
        name: "Christ Church 9 - Rails",
        info: "Long 9 stair rail.",
        address: "1060 Chandler Rd, Lake Oswego, OR 97034, USA",
    },
    {
        id: 32,
        imgPath: "./assets/img/woodlandflatbar.png",
        name: "Woodland Rail - Flat Bar / Rails",
        info: "Pop out flat bar.",
        address: "1914 NE 102nd Ave, Portland, OR 97220, USA",
    },
    {
        id: 33,
        imgPath: "./assets/img/curveledge.png",
        name: "Curb Curve Ledge - Ledges",
        info: "Curb ledge over dirt.",
        address: "1964 SE 30th Ave, Portland, OR 97214, USA",
    },
    {
        id: 34,
        imgPath: "./assets/img/overrail.png",
        name: "Comfort Suites 8 - Stairs / Rails",
        info: "8 stair rail perfact for skating over.",
        address: "11340 SW 60th Ave, Portland, OR 97219, USA",
    },
    {
        id: 35,
        imgPath: "./assets/img/cascadeledges.png",
        name: "Cascade ledges - Ledges",
        info: "Cascade College Ledges",
        address: "705 N Killingsworth St, Portland, OR 97217, USA",
    },
    {
        id: 36,
        imgPath: "./assets/img/newburge.png",
        name: "Newberg - Skate Park",
        info: "Great transition park",
        address: "1201 S Blaine St, Newberg, OR 97132",
    },
     {
        id: 37,
        imgPath: "./assets/img/8Stairrail.png",
        name: "8 Stair - Rail / Stairs",
        info: "8 Stair rail.",
        address: "13 SE 2nd Ave, Portland, OR 97214, USA",
    },
     // {
    //     id: ,
    //     imgPath: "./assets/img/",
    //     name: "",
    //     info: "",
    //     address: "",
    // },
     // {
    //     id: ,
    //     imgPath: "./assets/img/",
    //     name: "",
    //     info: "",
    //     address: "",
    // },
];

export default initialDetails;