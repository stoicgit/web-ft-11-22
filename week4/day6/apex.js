const mainContainer = document.querySelector(".mainContainer")

const ListOfLegends = [
    {LegendName: "Newcastle", Weapon: "Tripe Take", Type: "Defensive", Tacticle: "Sheild", Ultimate: "CastleWall", Picture: "https://media.contentapi.ea.com/content/dam/apex-legends/common/saviors/newcastle-legends-page/apex-section-bg-legends-newcastle-xl.jpg.adapt.320w.jpg"},
    {LegendName: "Wattson", Weapon: "Volt", Type: "Defensive", Tacticle: "Fence", Ultimate: "Interception Pylon", Picture: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wattson-xl.jpg.adapt.320w.jpg"},
    {LegendName: "Mad Maggie", Weapon: "Mastiff", Type: "Offensive", Tacticle: "Drill", Ultimate: "Wrecking Ball", Picture: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/screenshots/apex-section-bg-legends-maggie-xl.jpg.adapt.320w.jpg"},
    {LegendName: "Loba", Weapon: "P2020", Type: "Support", Tacticle: "Teloport", Ultimate: "Black Market Boutique", Picture: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-loba-xl.jpg.adapt.320w.jpg"},
    {LegendName: "Mirage", Weapon: "Wingman", Type: "Offensive", Tacticle: "Bamboozle", Ultimate: "Life Of The Party", Picture: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.320w.jpg"},
];
for (const Legend of ListOfLegends) {
    const LegendsCard = document.createElement("div");
    const LegendTitle = document.createElement("h1");
    const legendWeapon = document.createElement("h2");
    const legendType = document.createElement("h2");
    const legendTacticle = document.createElement("h3");
    const legendUltimate = document.createElement("h4");
    const legendPic = document.createElement("img");

    legendPic.src = Legend.Picture;
    LegendTitle.innerText = Legend.LegendName;
    legendWeapon.innerText = Legend.Weapon;
    legendType.innerText = Legend.Type;
    legendTacticle.innerText = Legend.Tacticle;
    legendUltimate.innerText = Legend.Ultimate;



    mainContainer.append(LegendsCard, legendPic, LegendTitle, legendType, legendTacticle, legendUltimate, legendWeapon);
}