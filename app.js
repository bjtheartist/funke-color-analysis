const SEASONS = {
"Light Spring": {
  family:"warm",depth:"light",contrast:"low",
  description:"Your coloring is warm, light, and delicate. Light Spring's palette is characterized by warm, fresh, and luminous tones that echo the first blossoms of spring. Your skin has a warm, peachy glow, and your overall appearance is bright yet soft.",
  hue:0.65,value:0.8,chroma:0.5,
  bestColors:[
    {name:"Peach Fuzz",pantone:"13-1023 TCX",hex:"#FFBE98"},
    {name:"Warm Apricot",pantone:"14-1230 TCX",hex:"#E8A87C"},
    {name:"Buttercup",pantone:"12-0752 TCX",hex:"#F9E547"},
    {name:"Coral Pink",pantone:"16-1546 TCX",hex:"#F47983"},
    {name:"Aquamarine",pantone:"13-5412 TCX",hex:"#7FFFD4"},
    {name:"Light Turquoise",pantone:"14-4816 TCX",hex:"#72E1D3"},
    {name:"Periwinkle",pantone:"15-3920 TCX",hex:"#B0C4DE"},
    {name:"Warm Ivory",pantone:"11-0107 TCX",hex:"#FFF8DC"},
    {name:"Camel",pantone:"15-1225 TCX",hex:"#C19A6B"},
    {name:"Light Moss",pantone:"14-0121 TCX",hex:"#ADDFAD"},
    {name:"Salmon",pantone:"16-1546 TCX",hex:"#FA8072"},
    {name:"Golden Tan",pantone:"15-1234 TCX",hex:"#D2B48C"},
    {name:"Soft Lavender",pantone:"14-3812 TCX",hex:"#C5B4E3"},
    {name:"Leaf Green",pantone:"15-6340 TCX",hex:"#71BC78"},
    {name:"Sky Blue",pantone:"14-4318 TCX",hex:"#87CEEB"},
    {name:"Cream",pantone:"11-0110 TCX",hex:"#FFFDD0"},
    {name:"Melon",pantone:"14-1228 TCX",hex:"#FEBAAD"},
    {name:"Wheat",pantone:"13-0922 TCX",hex:"#F5DEB3"},
    {name:"Light Gold",pantone:"13-0940 TCX",hex:"#FFD700"},
    {name:"Warm Pink",pantone:"15-1624 TCX",hex:"#FF85A2"},
    {name:"Spring Green",pantone:"14-0156 TCX",hex:"#90EE90"}
  ],
  worstColors:[
    {name:"Black",hex:"#000000"},{name:"Charcoal",hex:"#36454F"},{name:"Dark Navy",hex:"#0A0A2A"},
    {name:"Burgundy",hex:"#800020"},{name:"Dark Brown",hex:"#3C1414"},{name:"Olive Drab",hex:"#556B2F"},
    {name:"Deep Purple",hex:"#301934"},{name:"Dark Teal",hex:"#004D40"},{name:"Oxblood",hex:"#4A0000"},
    {name:"Slate Grey",hex:"#708090"}
  ],
  neutralColors:[
    {name:"Warm White",pantone:"11-0601 TCX",hex:"#FAF0E6"},
    {name:"Champagne",pantone:"12-0812 TCX",hex:"#F7E7CE"},
    {name:"Light Taupe",pantone:"14-1110 TCX",hex:"#C4B097"},
    {name:"Soft Beige",pantone:"13-1008 TCX",hex:"#D9C9B6"},
    {name:"Warm Grey",pantone:"14-4002 TCX",hex:"#B8B0A8"},
    {name:"Cocoa Cream",pantone:"14-1012 TCX",hex:"#C5A88C"}
  ],
  neutralDescription:"Light Spring looks best in soft, warm neutrals. Avoid stark white and jet black — instead opt for warm ivory, champagne, and light taupes that complement your delicate warmth.",
  sisterPalette:{name:"Light Summer",colors:[{name:"Powder Blue",hex:"#B0E0E6"},{name:"Soft Rose",hex:"#E8ADAA"},{name:"Wisteria",hex:"#C9A0DC"}],description:"Light Summer shares your lightness but with a cooler undertone, offering gentle alternatives."},
  worstColorsDescription:"Dark, heavy, and cool colors are the least flattering for Light Spring. Deep shades overwhelm your delicate coloring, while cool tones clash with your warm undertones.",
  warmCoolText:"Warm colors clearly bring out your natural beauty. In warm shades, your skin gains a healthy, glowing warmth, your eyes appear brighter and more defined, and your entire coloring looks naturally balanced and radiant.",
  makeup:{
    foundation:{
      drugstore:[{brand:"Maybelline Fit Me Matte + Poreless",shades:"110 Porcelain, 120 Classic Ivory",note:"Light with warm yellow undertones"},{brand:"L'Oreal True Match",shades:"W2 Light Ivory, W3 Nude Beige",note:"Warm-toned natural finish"}],
      highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NC15, NC20",note:"Light-warm golden undertones"},{brand:"NARS Natural Radiant Longwear",shades:"Deauville, Barcelona",note:"Light-medium warm peach undertones"}]
    },
    lipstick:[
      {category:"Peach",products:[{brand:"MAC",product:"Ravishing",note:"Warm peachy-coral"},{brand:"Clinique",product:"Melon Pop",note:"Sheer peachy pink"}]},
      {category:"Coral",products:[{brand:"Charlotte Tilbury",product:"Coachella Coral",note:"Bright warm coral"},{brand:"Revlon",product:"Coral Berry",note:"Classic warm coral"}]},
      {category:"Warm Pink",products:[{brand:"Too Faced",product:"Peach Kiss",note:"Warm rosy pink"},{brand:"Glossier",product:"Crush",note:"Warm berry pink"}]}
    ],
    blusher:"Opt for warm, peachy-coral tones. Light Spring glows in shades like soft peach, warm apricot, and light coral. Try NARS Orgasm or Milani Luminoso.",
    eyeshadow:"Choose soft, warm shades like champagne, warm taupe, peach, and soft gold. The Charlotte Tilbury Pillow Talk palette is perfect for Light Spring's delicate warmth.",
    eyeshadowColors:["#F7E7CE","#C5A88C","#FEBAAD","#FFD700","#E8A87C","#D2B48C","#C19A6B","#FA8072"],
    blusherColors:["#FEBAAD","#FFCBA4","#FA8072","#E8A87C","#FF85A2","#F47983","#FFB6C1","#FFC0CB"]
  },
  wardrobe:{
    tip1:"Pair light warm tones together for a fresh, harmonious look — soft peaches with warm greens, or coral with sky blue.",
    tip2:"For more contrast, pair your lightest colors with your medium tones — cream with camel, or light gold with coral.",
    tip3:"Avoid high contrast combinations. Your coloring is naturally light, so dramatic dark-light pairings will overpower you.",
    combos:[[{hex:"#FFCBA4"},{hex:"#71BC78"}],[{hex:"#FA8072"},{hex:"#87CEEB"}],[{hex:"#FFF8DC"},{hex:"#C19A6B"}],[{hex:"#F9E547"},{hex:"#C5B4E3"}]],
    accentColors:[{name:"Coral",pantone:"16-1546 TCX",hex:"#F47983"},{name:"Turquoise",pantone:"14-4816 TCX",hex:"#72E1D3"},{name:"Golden Yellow",pantone:"12-0752 TCX",hex:"#F9E547"},{name:"Warm Pink",pantone:"15-1624 TCX",hex:"#FF85A2"},{name:"Leaf Green",pantone:"15-6340 TCX",hex:"#71BC78"},{name:"Periwinkle",pantone:"15-3920 TCX",hex:"#B0C4DE"}]
  }
},
"True Spring": {
  family:"warm",depth:"medium",contrast:"medium",
  description:"True Spring is the quintessential warm season. Your coloring radiates golden warmth — your skin has a healthy, sun-kissed quality, your hair has golden or strawberry highlights, and your eyes are warm and clear. You look best in vibrant, warm, clear colors.",
  hue:0.8,value:0.55,chroma:0.7,
  bestColors:[
    {name:"Marigold",pantone:"14-1064 TCX",hex:"#EDA740"},
    {name:"Tangerine",pantone:"15-1247 TCX",hex:"#F28500"},
    {name:"Poppy Red",pantone:"17-1664 TCX",hex:"#E35335"},
    {name:"Coral",pantone:"16-1546 TCX",hex:"#FF6F61"},
    {name:"Mango",pantone:"15-1243 TCX",hex:"#FF8243"},
    {name:"Grass Green",pantone:"15-6442 TCX",hex:"#7CFC00"},
    {name:"Lime",pantone:"14-0452 TCX",hex:"#BFFF00"},
    {name:"Bright Aqua",pantone:"14-4812 TCX",hex:"#00CED1"},
    {name:"Warm Teal",pantone:"16-5127 TCX",hex:"#008B8B"},
    {name:"Golden Yellow",pantone:"13-0859 TCX",hex:"#FFD700"},
    {name:"Tomato Red",pantone:"18-1660 TCX",hex:"#FF6347"},
    {name:"Honey",pantone:"14-1036 TCX",hex:"#EB9605"},
    {name:"Peach",pantone:"14-1228 TCX",hex:"#FFDAB9"},
    {name:"Warm Violet",pantone:"16-3520 TCX",hex:"#9B59B6"},
    {name:"Salmon",pantone:"16-1546 TCX",hex:"#FA8072"},
    {name:"Chartreuse",pantone:"13-0650 TCX",hex:"#DFFF00"},
    {name:"Turquoise",pantone:"15-5519 TCX",hex:"#40E0D0"},
    {name:"Amber",pantone:"15-1050 TCX",hex:"#FFBF00"},
    {name:"Papaya",pantone:"15-1247 TCX",hex:"#FF9966"},
    {name:"Kelly Green",pantone:"17-6153 TCX",hex:"#4CBB17"},
    {name:"Bronze Gold",pantone:"16-1133 TCX",hex:"#CD9B1D"}
  ],
  worstColors:[
    {name:"Black",hex:"#000000"},{name:"Cool Grey",hex:"#8C92AC"},{name:"Icy Pink",hex:"#F8C8DC"},
    {name:"Fuchsia",hex:"#FF00FF"},{name:"Powder Blue",hex:"#B0E0E6"},{name:"Mauve",hex:"#E0B0FF"},
    {name:"Dark Navy",hex:"#000080"},{name:"Burgundy",hex:"#800020"},{name:"Silver",hex:"#C0C0C0"},
    {name:"Charcoal",hex:"#36454F"}
  ],
  neutralColors:[
    {name:"Ivory",pantone:"11-0507 TCX",hex:"#FFFFF0"},
    {name:"Warm Camel",pantone:"16-1334 TCX",hex:"#C19A6B"},
    {name:"Golden Beige",pantone:"14-1118 TCX",hex:"#D4A76A"},
    {name:"Bronze",pantone:"17-1340 TCX",hex:"#CD7F32"},
    {name:"Warm Khaki",pantone:"15-1116 TCX",hex:"#C3B091"},
    {name:"Cognac",pantone:"18-1142 TCX",hex:"#9A463D"}
  ],
  neutralDescription:"True Spring's neutrals should always lean warm. Rich camel, golden beige, bronze, and cognac anchor your wardrobe beautifully. Avoid cool greys and blue-based neutrals.",
  sisterPalette:{name:"True Autumn",colors:[{name:"Rust",hex:"#B7410E"},{name:"Olive",hex:"#808000"},{name:"Burnt Orange",hex:"#CC5500"}],description:"True Autumn shares your warmth but with deeper, earthier tones — a natural sister for autumn transitions."},
  worstColorsDescription:"Cool, muted, and icy colors drain the life from True Spring's vibrant warmth. Avoid anything blue-based, grey-toned, or overly pastel and washed out.",
  warmCoolText:"Your warm undertones are unmistakable. Warm shades make your complexion glow with vitality, while cool tones cause your skin to appear sallow and your features to lose their natural vibrancy.",
  makeup:{
    foundation:{
      drugstore:[{brand:"Maybelline Fit Me Dewy + Smooth",shades:"220 Natural Beige, 230 Natural Buff",note:"Warm golden tones with dewy finish"},{brand:"NYX Born To Glow",shades:"Golden, Golden Honey",note:"Radiant warm finish"}],
      highEnd:[{brand:"Charlotte Tilbury Airbrush Flawless",shades:"5 Warm, 6 Warm",note:"Medium warm coverage"},{brand:"Armani Luminous Silk",shades:"5.5, 6",note:"Golden-warm radiant finish"}]
    },
    lipstick:[
      {category:"Orange-Red",products:[{brand:"MAC",product:"Lady Danger",note:"Vivid warm orange-red"},{brand:"NARS",product:"Heat Wave",note:"Bold warm tangerine red"}]},
      {category:"Coral",products:[{brand:"Tom Ford",product:"True Coral",note:"Luxurious warm coral"},{brand:"Maybelline",product:"Coral Crush",note:"Vibrant warm coral"}]},
      {category:"Warm Nude",products:[{brand:"Charlotte Tilbury",product:"Super Cindy",note:"Warm peachy nude"},{brand:"L'Oreal",product:"Fairest Nude",note:"Warm golden nude"}]}
    ],
    blusher:"Go for warm, clear blush shades. Peach, warm coral, and golden apricot are your best friends. Try MAC Peaches or Benefit GALifornia for that sun-kissed glow.",
    eyeshadow:"Rich warm tones — bronze, copper, golden brown, warm olive, and terracotta. Urban Decay Naked Heat or Too Faced Sweet Peach palettes are ideal.",
    eyeshadowColors:["#CD7F32","#B87333","#D4A76A","#808000","#E35335","#EB9605","#FFD700","#C19A6B"],
    blusherColors:["#FF9966","#FF6F61","#FFDAB9","#F28500","#FA8072","#EDA740","#FF8243","#FFD700"]
  },
  wardrobe:{
    tip1:"Combine rich warm colors for maximum impact — pair marigold with warm teal, or tangerine with grass green for a vibrant, energetic look.",
    tip2:"Use golden neutrals like camel and cognac to ground your brighter colors and create polished outfits.",
    tip3:"Monochromatic warm looks work beautifully — try tonal dressing in shades of coral, amber, or green.",
    combos:[[{hex:"#EDA740"},{hex:"#008B8B"}],[{hex:"#FF6F61"},{hex:"#4CBB17"}],[{hex:"#FFD700"},{hex:"#9B59B6"}],[{hex:"#F28500"},{hex:"#40E0D0"}]],
    accentColors:[{name:"Tangerine",pantone:"15-1247 TCX",hex:"#F28500"},{name:"Grass Green",pantone:"15-6442 TCX",hex:"#7CFC00"},{name:"Coral",pantone:"16-1546 TCX",hex:"#FF6F61"},{name:"Marigold",pantone:"14-1064 TCX",hex:"#EDA740"},{name:"Bright Aqua",pantone:"14-4812 TCX",hex:"#00CED1"},{name:"Poppy Red",pantone:"17-1664 TCX",hex:"#E35335"}]
  }
},
"Bright Spring": {
  family:"warm",depth:"medium",contrast:"high",
  description:"Bright Spring is the most vivid of the warm seasons. Your coloring is clear, bright, and high-contrast — your eyes are striking and jewel-like, your skin is clear, and you come alive in saturated, bold colors with warm undertones.",
  hue:0.6,value:0.55,chroma:0.9,
  bestColors:[
    {name:"Hot Pink",pantone:"17-2036 TCX",hex:"#FF69B4"},{name:"Electric Blue",pantone:"18-4244 TCX",hex:"#007FFF"},{name:"Bright Coral",pantone:"16-1546 TCX",hex:"#FF4040"},{name:"Vivid Yellow",pantone:"13-0859 TCX",hex:"#FFE135"},{name:"Turquoise",pantone:"15-5519 TCX",hex:"#00CED1"},{name:"Bright Orange",pantone:"16-1362 TCX",hex:"#FF6600"},{name:"Kelly Green",pantone:"17-6153 TCX",hex:"#4CBB17"},{name:"Violet",pantone:"18-3838 TCX",hex:"#8B00FF"},{name:"Fuchsia",pantone:"17-2031 TCX",hex:"#FF00FF"},{name:"Lime",pantone:"14-0452 TCX",hex:"#32CD32"},{name:"Bright Red",pantone:"18-1664 TCX",hex:"#FF2400"},{name:"Cobalt",pantone:"19-4150 TCX",hex:"#0047AB"},{name:"Tangerine",pantone:"15-1247 TCX",hex:"#FF9966"},{name:"Bright Teal",pantone:"17-5024 TCX",hex:"#00827F"},{name:"Warm White",pantone:"11-0601 TCX",hex:"#FAF0E6"},{name:"Golden Yellow",pantone:"14-0846 TCX",hex:"#FFD700"},{name:"Bright Periwinkle",pantone:"16-3925 TCX",hex:"#6C5B7B"},{name:"Mango",pantone:"15-1247 TCX",hex:"#FF8243"},{name:"Aqua",pantone:"14-4816 TCX",hex:"#00FFFF"},{name:"Poppy",pantone:"17-1664 TCX",hex:"#E35335"},{name:"Bright Lavender",pantone:"15-3817 TCX",hex:"#BF94E4"}
  ],
  worstColors:[{name:"Dusty Rose",hex:"#DCAE96"},{name:"Olive",hex:"#808000"},{name:"Mauve",hex:"#E0B0FF"},{name:"Rust",hex:"#B7410E"},{name:"Khaki",hex:"#C3B091"},{name:"Brown",hex:"#8B4513"},{name:"Dusty Blue",hex:"#6699CC"},{name:"Sage",hex:"#BCB88A"},{name:"Mushroom",hex:"#C9B29B"},{name:"Dark Brown",hex:"#3C1414"}],
  neutralColors:[{name:"Bright White",pantone:"11-0601 TCX",hex:"#FFFFFF"},{name:"Light Navy",pantone:"19-4028 TCX",hex:"#003153"},{name:"Warm Charcoal",pantone:"19-0814 TCX",hex:"#4A4A4A"},{name:"Camel",pantone:"15-1225 TCX",hex:"#C19A6B"},{name:"Stone",pantone:"14-1110 TCX",hex:"#BDB5A1"},{name:"Clear Navy",pantone:"19-3940 TCX",hex:"#1C2951"}],
  neutralDescription:"Bright Spring can wear clear, crisp neutrals including bright white and clear navy. Avoid murky or dusty neutrals that dull your natural brightness.",
  sisterPalette:{name:"Bright Winter",colors:[{name:"Fuchsia",hex:"#FF00FF"},{name:"Royal Blue",hex:"#4169E1"},{name:"Emerald",hex:"#50C878"}],description:"Bright Winter shares your clarity and contrast, but with a cooler base. You can borrow its jewel tones."},
  worstColorsDescription:"Muted, dusty, and earthy tones are Bright Spring's worst enemies. These colours will make you look tired and washed out, dampening your natural sparkle.",
  warmCoolText:"While you have warm undertones, your defining characteristic is brightness and clarity. Warm, vivid colours are most flattering, giving your complexion energy and your eyes a brilliant sparkle.",
  makeup:{
    foundation:{drugstore:[{brand:"Maybelline SuperStay",shades:"220 Natural Beige, 230 Natural Buff",note:"Long-wearing warm finish"},{brand:"Revlon Colorstay",shades:"240 Medium Beige, 250 Fresh Beige",note:"Warm toned full coverage"}],highEnd:[{brand:"Estee Lauder Double Wear",shades:"3W1 Tawny, 2W2 Rattan",note:"Warm-toned long wear"},{brand:"Dior Forever Skin Glow",shades:"3WO Warm Olive, 3W Warm",note:"Luminous warm finish"}]},
    lipstick:[{category:"Bright Red",products:[{brand:"MAC",product:"Ruby Woo",note:"Vivid blue-red that pops"},{brand:"NARS",product:"Dragon Girl",note:"Bright satin red"}]},{category:"Hot Pink",products:[{brand:"Dior",product:"Dolce Vita Pink",note:"Electric warm pink"},{brand:"NYX",product:"Electro Night",note:"Bold bright fuchsia"}]},{category:"Bright Coral",products:[{brand:"Tom Ford",product:"Flamingo",note:"Vivid warm coral"},{brand:"Clinique",product:"Poppy Pop",note:"Bright cheerful coral"}]}],
    blusher:"Bright, clear blush shades work best. Go for vivid coral, bright peach, or hot pink — nothing muted. Try NARS Exhibit A (applied lightly) or Tarte Dollface.",
    eyeshadow:"Bright, pigmented shades are your friend — electric blue, bright teal, vivid bronze, golden shimmer. The Natasha Denona Sunrise palette is perfect for your vibrant look.",
    eyeshadowColors:["#FFD700","#FF6600","#00CED1","#007FFF","#FF69B4","#4CBB17","#FF4040","#8B00FF"],
    blusherColors:["#FF4040","#FF69B4","#FF6F61","#FF6600","#FF85A2","#FF00FF","#FF8243","#E35335"]
  },
  wardrobe:{
    tip1:"Don't be afraid of bold color combinations. Pair electric blue with bright coral, or hot pink with turquoise for head-turning outfits.",
    tip2:"Anchor bright colors with clear neutrals — bright white, clear navy, or camel keep the focus on your vivid accent pieces.",
    tip3:"Avoid mixing bright colours with muted ones. Keep all elements in your outfit at the same saturation level for cohesion.",
    combos:[[{hex:"#007FFF"},{hex:"#FF4040"}],[{hex:"#FF69B4"},{hex:"#00CED1"}],[{hex:"#FFE135"},{hex:"#8B00FF"}],[{hex:"#4CBB17"},{hex:"#FF6600"}]],
    accentColors:[{name:"Hot Pink",pantone:"17-2036 TCX",hex:"#FF69B4"},{name:"Electric Blue",pantone:"18-4244 TCX",hex:"#007FFF"},{name:"Bright Coral",pantone:"16-1546 TCX",hex:"#FF4040"},{name:"Turquoise",pantone:"15-5519 TCX",hex:"#00CED1"},{name:"Vivid Yellow",pantone:"13-0859 TCX",hex:"#FFE135"},{name:"Kelly Green",pantone:"17-6153 TCX",hex:"#4CBB17"}]
  }
},
"Light Summer": {
  family:"cool",depth:"light",contrast:"low",
  description:"Light Summer is a cool, light, and delicate season. Your coloring has a soft, cool elegance — think misty morning tones. Your skin has rose or pink undertones, your hair is likely ash blonde or light brown, and your eyes are soft blue, green, or grey.",
  hue:0.3,value:0.8,chroma:0.4,
  bestColors:[{name:"Powder Blue",pantone:"14-4112 TCX",hex:"#B0E0E6"},{name:"Soft Rose",pantone:"14-1907 TCX",hex:"#E8ADAA"},{name:"Wisteria",pantone:"15-3507 TCX",hex:"#C9A0DC"},{name:"Lavender",pantone:"14-3812 TCX",hex:"#B57EDC"},{name:"Soft Aqua",pantone:"13-4909 TCX",hex:"#7EC8E3"},{name:"Dusty Pink",pantone:"14-1909 TCX",hex:"#D4A5A5"},{name:"Cornflower",pantone:"16-4031 TCX",hex:"#6495ED"},{name:"Mint",pantone:"13-5414 TCX",hex:"#98FB98"},{name:"Soft White",pantone:"11-0602 TCX",hex:"#F5F0EB"},{name:"Rose Quartz",pantone:"13-1520 TCX",hex:"#F7CAC9"},{name:"Periwinkle",pantone:"15-3920 TCX",hex:"#CCCCFF"},{name:"Sky Blue",pantone:"14-4318 TCX",hex:"#87CEEB"},{name:"Mauve",pantone:"15-2705 TCX",hex:"#D8BFD8"},{name:"Soft Teal",pantone:"15-5210 TCX",hex:"#5F9EA0"},{name:"Pearl Pink",pantone:"12-1212 TCX",hex:"#F0D5CE"},{name:"Seafoam",pantone:"13-5409 TCX",hex:"#93E9BE"},{name:"Iris",pantone:"16-3810 TCX",hex:"#9370DB"},{name:"Bluebell",pantone:"16-3929 TCX",hex:"#A2A2D0"},{name:"Cool Pink",pantone:"14-1911 TCX",hex:"#FFB6C1"},{name:"Soft Sage",pantone:"14-6312 TCX",hex:"#9DC183"},{name:"Opal Blue",pantone:"14-4210 TCX",hex:"#A8C3D1"}],
  worstColors:[{name:"Black",hex:"#000000"},{name:"Bright Orange",hex:"#FF6600"},{name:"Rust",hex:"#B7410E"},{name:"Mustard",hex:"#FFDB58"},{name:"Tomato Red",hex:"#FF6347"},{name:"Olive",hex:"#808000"},{name:"Bright Yellow",hex:"#FFFF00"},{name:"Dark Brown",hex:"#3C1414"},{name:"Burnt Sienna",hex:"#E97451"},{name:"Gold",hex:"#FFD700"}],
  neutralColors:[{name:"Soft White",pantone:"11-0602 TCX",hex:"#F5F0EB"},{name:"Rose Beige",pantone:"13-1504 TCX",hex:"#D9C4B8"},{name:"Cool Taupe",pantone:"15-1305 TCX",hex:"#B4A7A0"},{name:"Dove Grey",pantone:"14-4002 TCX",hex:"#B0A8A0"},{name:"Cocoa",pantone:"16-1412 TCX",hex:"#A08070"},{name:"Light Charcoal",pantone:"17-3907 TCX",hex:"#808080"}],
  neutralDescription:"Light Summer's neutrals should be soft and cool. Rose beige, dove grey, and cool taupe create a refined backdrop. Avoid warm yellowy beiges and harsh black.",
  sisterPalette:{name:"Light Spring",colors:[{name:"Peach",hex:"#FFBE98"},{name:"Coral Pink",hex:"#F47983"},{name:"Spring Green",hex:"#90EE90"}],description:"Light Spring shares your lightness with warmer undertones — gentle crossover colours for variety."},
  worstColorsDescription:"Warm, saturated, and heavy colours overwhelm Light Summer's cool delicacy. Bright oranges, yellows, and deep browns clash with your cool, soft undertones.",
  warmCoolText:"Cool colours harmonize beautifully with your natural colouring. In cool tones, your skin looks clear and fresh, and your eyes gain depth. Warm colours create a noticeable discord with your cool undertones.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Fit Me Dewy + Smooth",shades:"110 Porcelain, 115 Ivory",note:"Light cool pink undertones"},{brand:"L'Oreal True Match",shades:"C1 Alabaster, C2 Rose Ivory",note:"Cool-toned with rose undertones"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NW15, NW20",note:"Cool pink undertones"},{brand:"Bobbi Brown Skin Long-Wear",shades:"Porcelain, Ivory",note:"Cool neutral finish"}]},lipstick:[{category:"Rose",products:[{brand:"MAC",product:"Mehr",note:"Cool dusty rose"},{brand:"Clinique",product:"Plum Pop",note:"Soft cool plum rose"}]},{category:"Soft Berry",products:[{brand:"Charlotte Tilbury",product:"Pillow Talk",note:"Cool mauve-pink"},{brand:"Revlon",product:"Pink in the Afternoon",note:"Soft cool pink"}]},{category:"Mauve",products:[{brand:"NARS",product:"Dolce Vita",note:"Dusty rose-mauve"},{brand:"Maybelline",product:"Almond Rose",note:"Cool neutral mauve"}]}],blusher:"Cool, soft pinks and mauves are ideal. Try a soft rose, cool pink, or light plum. MAC Blushbaby or Clinique Pink Pop are perfect Light Summer shades.",eyeshadow:"Soft cool tones — mauve, soft grey, rose, lavender, and cool taupe. The Too Faced Natural Love palette offers beautiful soft cool shades.",eyeshadowColors:["#D8BFD8","#B0A8A0","#D4A5A5","#B57EDC","#9370DB","#6495ED","#C9A0DC","#A2A2D0"],blusherColors:["#FFB6C1","#D4A5A5","#E8ADAA","#F7CAC9","#D8BFD8","#C9A0DC","#F0D5CE","#B57EDC"]},
  wardrobe:{tip1:"Pair cool pastels together for an ethereal, sophisticated look — powder blue with soft rose, or lavender with mint.",tip2:"Add gentle contrast by pairing your lighter shades with medium cool tones like cornflower blue or soft teal.",tip3:"Stay within your soft colour intensity — avoid mixing pastels with anything too vivid or saturated.",combos:[[{hex:"#B0E0E6"},{hex:"#E8ADAA"}],[{hex:"#C9A0DC"},{hex:"#98FB98"}],[{hex:"#6495ED"},{hex:"#F7CAC9"}],[{hex:"#87CEEB"},{hex:"#D8BFD8"}]],accentColors:[{name:"Cornflower",pantone:"16-4031 TCX",hex:"#6495ED"},{name:"Soft Rose",pantone:"14-1907 TCX",hex:"#E8ADAA"},{name:"Wisteria",pantone:"15-3507 TCX",hex:"#C9A0DC"},{name:"Mint",pantone:"13-5414 TCX",hex:"#98FB98"},{name:"Rose Quartz",pantone:"13-1520 TCX",hex:"#F7CAC9"},{name:"Soft Teal",pantone:"15-5210 TCX",hex:"#5F9EA0"}]}
},
"True Summer": {
  family:"cool",depth:"medium",contrast:"medium",
  description:"True Summer is the epitome of cool, muted elegance. Your colouring is soft, cool, and has a gentle quality — like a summer sky on a slightly overcast day. You look best in cool, medium-intensity colours with a touch of grey.",
  hue:0.2,value:0.5,chroma:0.45,
  bestColors:[{name:"Slate Blue",pantone:"17-4015 TCX",hex:"#6A5ACD"},{name:"Dusty Rose",pantone:"16-1610 TCX",hex:"#C08081"},{name:"Soft Navy",pantone:"19-4024 TCX",hex:"#3B4D61"},{name:"Raspberry",pantone:"18-2120 TCX",hex:"#E30B5C"},{name:"Hyacinth",pantone:"16-3823 TCX",hex:"#7B68EE"},{name:"Jade",pantone:"17-5638 TCX",hex:"#00A86B"},{name:"Cool Rose",pantone:"15-1614 TCX",hex:"#B76E79"},{name:"Blue Spruce",pantone:"18-5112 TCX",hex:"#2E8B57"},{name:"Orchid",pantone:"16-3320 TCX",hex:"#DA70D6"},{name:"Celadon",pantone:"15-5812 TCX",hex:"#ACE1AF"},{name:"Steel Blue",pantone:"17-4123 TCX",hex:"#4682B4"},{name:"Plum",pantone:"18-3015 TCX",hex:"#8E4585"},{name:"Smoky Blue",pantone:"17-3918 TCX",hex:"#708090"},{name:"Amethyst",pantone:"17-3628 TCX",hex:"#9966CC"},{name:"Watermelon",pantone:"17-1929 TCX",hex:"#FC6C85"},{name:"Denim Blue",pantone:"18-4027 TCX",hex:"#1560BD"},{name:"Sea Green",pantone:"16-5938 TCX",hex:"#2E8B57"},{name:"Cocoa Pink",pantone:"15-1512 TCX",hex:"#C4A484"},{name:"Soft Burgundy",pantone:"19-1725 TCX",hex:"#722F37"},{name:"Teal",pantone:"17-5024 TCX",hex:"#008080"},{name:"Lilac",pantone:"14-3812 TCX",hex:"#C8A2C8"}],
  worstColors:[{name:"Bright Orange",hex:"#FF6600"},{name:"Mustard",hex:"#FFDB58"},{name:"Rust",hex:"#B7410E"},{name:"Lime Green",hex:"#32CD32"},{name:"Gold",hex:"#FFD700"},{name:"Tomato",hex:"#FF6347"},{name:"Caramel",hex:"#FFD59A"},{name:"Olive",hex:"#808000"},{name:"Peach",hex:"#FFDAB9"},{name:"Warm Brown",hex:"#8B4513"}],
  neutralColors:[{name:"Soft White",pantone:"11-0602 TCX",hex:"#F0EDE8"},{name:"Cool Grey",pantone:"16-3802 TCX",hex:"#A9A9A9"},{name:"Charcoal Blue",pantone:"19-4010 TCX",hex:"#4A5568"},{name:"Rose Taupe",pantone:"16-1510 TCX",hex:"#905D5D"},{name:"Medium Grey",pantone:"16-4402 TCX",hex:"#808080"},{name:"Navy",pantone:"19-4024 TCX",hex:"#2C3E50"}],
  neutralDescription:"True Summer thrives in cool, blue-based neutrals. Soft navy, charcoal blue, cool grey, and rose taupe provide the perfect cool foundation for your wardrobe.",
  sisterPalette:{name:"True Winter",colors:[{name:"Royal Blue",hex:"#4169E1"},{name:"True Red",hex:"#DC143C"},{name:"Emerald",hex:"#50C878"}],description:"True Winter shares your cool base with higher contrast and clarity — perfect for borrowing bold cool accents."},
  worstColorsDescription:"Warm, golden, and orange-based colours clash with True Summer's cool undertones. These shades make your skin appear yellow or sallow, and your features lose definition.",
  warmCoolText:"Cool colours are unmistakably your best palette. Your skin appears clear, smooth, and healthy in cool tones, while warm colours create a visible disconnection with your natural colouring.",
  makeup:{foundation:{drugstore:[{brand:"L'Oreal True Match",shades:"C3 Creamy Natural, C4 Shell Beige",note:"Cool-toned medium coverage"},{brand:"Maybelline Fit Me",shades:"120 Classic Ivory, 130 Buff Beige",note:"Cool undertone options"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NW20, NW25",note:"Cool pink undertones"},{brand:"NARS Sheer Glow",shades:"Mont Blanc, Fiji",note:"Cool-neutral luminous finish"}]},lipstick:[{category:"Berry",products:[{brand:"MAC",product:"D for Danger",note:"Deep cool berry"},{brand:"NARS",product:"Audacious Anna",note:"Rich berry-plum"}]},{category:"Cool Rose",products:[{brand:"Charlotte Tilbury",product:"Very Victoria",note:"Cool mauve rose"},{brand:"Clinique",product:"Plum Pop",note:"Cool toned rose"}]},{category:"Raspberry",products:[{brand:"Dior",product:"Raspberry",note:"Vivid cool raspberry"},{brand:"Revlon",product:"Berry Rich",note:"Deep cool berry"}]}],blusher:"Cool pink, mauve, and soft berry shades are ideal. Try Tarte Paaarty or Milani Romantic Rose for a natural cool flush.",eyeshadow:"Smoky cool tones — grey, mauve, cool brown, plum, and steel blue. The Urban Decay Naked Smoky palette is a natural fit for True Summer eyes.",eyeshadowColors:["#708090","#8E4585","#B76E79","#4682B4","#9966CC","#905D5D","#6A5ACD","#C08081"],blusherColors:["#C08081","#B76E79","#DA70D6","#E30B5C","#FC6C85","#8E4585","#C8A2C8","#905D5D"]},
  wardrobe:{tip1:"Pair cool medium tones for sophisticated looks — slate blue with dusty rose, or teal with soft burgundy.",tip2:"Navy and charcoal blue are your power neutrals. Use them as the base for outfits with pops of raspberry or amethyst.",tip3:"Tonal dressing in cool blues, purples, or cool pinks creates elegant, cohesive outfits.",combos:[[{hex:"#6A5ACD"},{hex:"#C08081"}],[{hex:"#008080"},{hex:"#DA70D6"}],[{hex:"#3B4D61"},{hex:"#E30B5C"}],[{hex:"#4682B4"},{hex:"#722F37"}]],accentColors:[{name:"Raspberry",pantone:"18-2120 TCX",hex:"#E30B5C"},{name:"Teal",pantone:"17-5024 TCX",hex:"#008080"},{name:"Orchid",pantone:"16-3320 TCX",hex:"#DA70D6"},{name:"Slate Blue",pantone:"17-4015 TCX",hex:"#6A5ACD"},{name:"Cool Rose",pantone:"15-1614 TCX",hex:"#B76E79"},{name:"Jade",pantone:"17-5638 TCX",hex:"#00A86B"}]}
},
"Soft Summer": {
  family:"cool",depth:"medium",contrast:"low",
  description:"Soft Summer is the most muted of the cool seasons. Your colouring is gentle, understated, and harmonious — like a watercolour painting. Your skin has cool grey or rose undertones, your hair is ashy, and your eyes are soft and muted.",
  hue:0.35,value:0.5,chroma:0.25,
  bestColors:[{name:"Dusty Rose",pantone:"15-1614 TCX",hex:"#DCAE96"},{name:"Sage",pantone:"16-0110 TCX",hex:"#BCB88A"},{name:"Slate",pantone:"17-3907 TCX",hex:"#708090"},{name:"Mauve",pantone:"16-1707 TCX",hex:"#C4A4A4"},{name:"Smoky Blue",pantone:"17-4015 TCX",hex:"#6E7B8B"},{name:"Old Rose",pantone:"17-1718 TCX",hex:"#C08081"},{name:"Dusty Teal",pantone:"16-5112 TCX",hex:"#5F9EA0"},{name:"Cocoa",pantone:"17-1321 TCX",hex:"#8B6F5C"},{name:"Pewter",pantone:"17-4402 TCX",hex:"#899499"},{name:"Soft Plum",pantone:"17-3612 TCX",hex:"#8B668B"},{name:"Grey Green",pantone:"16-6116 TCX",hex:"#8FBC8F"},{name:"Dusty Lavender",pantone:"16-3810 TCX",hex:"#B39EB5"},{name:"Soft Denim",pantone:"17-3918 TCX",hex:"#5B7FA5"},{name:"Mushroom",pantone:"16-1210 TCX",hex:"#C9B29B"},{name:"Dusty Mint",pantone:"14-5707 TCX",hex:"#98D1B1"},{name:"Muted Berry",pantone:"17-1818 TCX",hex:"#A0526C"},{name:"Stone Blue",pantone:"16-4114 TCX",hex:"#7696A8"},{name:"Ash Rose",pantone:"15-1512 TCX",hex:"#C4A4A4"},{name:"Soft Olive",pantone:"16-0518 TCX",hex:"#9B9467"},{name:"Greyish Lilac",pantone:"15-3507 TCX",hex:"#B0A0B5"},{name:"Misty Blue",pantone:"15-4008 TCX",hex:"#A4B8C4"}],
  worstColors:[{name:"Bright Orange",hex:"#FF6600"},{name:"Electric Blue",hex:"#007FFF"},{name:"Hot Pink",hex:"#FF69B4"},{name:"Bright Yellow",hex:"#FFFF00"},{name:"Black",hex:"#000000"},{name:"Pure White",hex:"#FFFFFF"},{name:"Lime Green",hex:"#32CD32"},{name:"Bright Red",hex:"#FF0000"},{name:"Neon Purple",hex:"#9B30FF"},{name:"Gold",hex:"#FFD700"}],
  neutralColors:[{name:"Soft White",pantone:"12-0601 TCX",hex:"#ECE5DA"},{name:"Medium Taupe",pantone:"16-1210 TCX",hex:"#B8A99A"},{name:"Cool Grey",pantone:"16-3802 TCX",hex:"#A0A0A0"},{name:"Charcoal",pantone:"18-4005 TCX",hex:"#5A5A5A"},{name:"Rose Grey",pantone:"15-1305 TCX",hex:"#B0A0A0"},{name:"Cocoa Grey",pantone:"17-1410 TCX",hex:"#8B7D72"}],
  neutralDescription:"Soft Summer's neutrals should be muted and cool-toned. Soft taupe, cool grey, and charcoal work beautifully. Avoid stark contrasts — no pure black or white.",
  sisterPalette:{name:"Soft Autumn",colors:[{name:"Camel",hex:"#C19A6B"},{name:"Dusty Coral",hex:"#CD8B76"},{name:"Olive",hex:"#808000"}],description:"Soft Autumn shares your mutedness with warmer undertones — ideal for transitional looks and soft contrasts."},
  worstColorsDescription:"Bright, vivid, and high-contrast colours overwhelm Soft Summer's muted, delicate colouring. Neon shades and primary colours are especially jarring against your soft tones.",
  warmCoolText:"Cool, muted tones bring out the best in your gentle colouring. Your skin looks smooth and even in cool shades, while warm tones tend to create an unflattering warmth that clashes with your ashy undertones.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Dream Urban Cover",shades:"110 Porcelain, 120 Ivory",note:"Light cool with natural finish"},{brand:"L'Oreal True Match",shades:"C2 Rose Ivory, C3 Creamy Natural",note:"Cool-toned medium coverage"}],highEnd:[{brand:"Laura Mercier Flawless Lumiere",shades:"Shell, Cameo",note:"Cool-neutral luminous"},{brand:"Bobbi Brown Skin Long-Wear",shades:"Warm Ivory, Sand",note:"Soft cool finish"}]},lipstick:[{category:"Dusty Rose",products:[{brand:"MAC",product:"Twig",note:"The perfect muted dusty rose"},{brand:"Charlotte Tilbury",product:"Pillow Talk",note:"Universally flattering soft nude-pink"}]},{category:"Mauve",products:[{brand:"Clinique",product:"Almost Lipstick in Black Honey",note:"Sheer muted berry"},{brand:"Glossier",product:"Crush",note:"Muted cool berry"}]},{category:"Soft Berry",products:[{brand:"NARS",product:"Dolce Vita",note:"Dusty rose-mauve"},{brand:"Revlon",product:"Pink in the Afternoon",note:"Soft cool pink"}]}],blusher:"Muted, cool-toned blush is key. Soft mauve, dusty rose, and muted pink suit you best. Try MAC Blushbaby or Clinique Mocha Pink.",eyeshadow:"Soft, smoky, muted shades — grey, mauve, dusty plum, soft brown-grey. The Bobbi Brown Smoky Nudes palette is ideal for Soft Summer's gentle aesthetic.",eyeshadowColors:["#B39EB5","#708090","#C4A4A4","#8B668B","#6E7B8B","#B0A0B5","#8B6F5C","#5B7FA5"],blusherColors:["#DCAE96","#C4A4A4","#C08081","#A0526C","#B39EB5","#8B668B","#D4A5A5","#B0A0A0"]},
  wardrobe:{tip1:"Pair muted, tonal colours for a sophisticated, blended look — dusty rose with sage, or smoky blue with soft plum.",tip2:"Create gentle contrast by combining your lightest muted tones with medium ones — misty blue with slate, or soft mint with cocoa.",tip3:"Avoid pairing any bright colours with your muted palette. Everything should feel soft and harmonious.",combos:[[{hex:"#DCAE96"},{hex:"#BCB88A"}],[{hex:"#6E7B8B"},{hex:"#C08081"}],[{hex:"#5F9EA0"},{hex:"#B39EB5"}],[{hex:"#8FBC8F"},{hex:"#8B668B"}]],accentColors:[{name:"Dusty Teal",pantone:"16-5112 TCX",hex:"#5F9EA0"},{name:"Old Rose",pantone:"17-1718 TCX",hex:"#C08081"},{name:"Soft Plum",pantone:"17-3612 TCX",hex:"#8B668B"},{name:"Smoky Blue",pantone:"17-4015 TCX",hex:"#6E7B8B"},{name:"Sage",pantone:"16-0110 TCX",hex:"#BCB88A"},{name:"Muted Berry",pantone:"17-1818 TCX",hex:"#A0526C"}]}
},
"Soft Autumn": {
  family:"warm",depth:"medium",contrast:"low",
  description:"Soft Autumn is the most muted of the warm seasons. Your colouring is warm, gentle, and earthy — think of the soft light filtering through autumn leaves on an overcast day. Your skin has warm undertones with a subtle golden quality, and your overall appearance is harmonious and understated.",
  hue:0.6,value:0.45,chroma:0.3,
  bestColors:[{name:"Camel",pantone:"15-1225 TCX",hex:"#C19A6B"},{name:"Dusty Coral",pantone:"16-1329 TCX",hex:"#CD8B76"},{name:"Olive",pantone:"17-0535 TCX",hex:"#808000"},{name:"Terracotta",pantone:"16-1526 TCX",hex:"#CC6A52"},{name:"Warm Taupe",pantone:"16-1210 TCX",hex:"#B8A088"},{name:"Sage Green",pantone:"16-0110 TCX",hex:"#9CAF88"},{name:"Dusty Gold",pantone:"15-1132 TCX",hex:"#C5A56A"},{name:"Muted Teal",pantone:"17-5111 TCX",hex:"#5A8A80"},{name:"Warm Mauve",pantone:"16-1806 TCX",hex:"#B08A8A"},{name:"Bronze",pantone:"18-0830 TCX",hex:"#A07855"},{name:"Soft Brick",pantone:"17-1340 TCX",hex:"#B86048"},{name:"Moss",pantone:"17-0627 TCX",hex:"#8A9A5B"},{name:"Biscuit",pantone:"14-1118 TCX",hex:"#D4B896"},{name:"Salmon Pink",pantone:"15-1334 TCX",hex:"#E0937E"},{name:"Fern Green",pantone:"17-6333 TCX",hex:"#548B54"},{name:"Warm Plum",pantone:"18-1412 TCX",hex:"#8B5F65"},{name:"Pumpkin Spice",pantone:"16-1448 TCX",hex:"#C17844"},{name:"Ivory",pantone:"11-0507 TCX",hex:"#F5F0DD"},{name:"Desert Sand",pantone:"14-1217 TCX",hex:"#EDC9AF"},{name:"Copper Rose",pantone:"17-1522 TCX",hex:"#B4706E"},{name:"Wheat Gold",pantone:"14-1031 TCX",hex:"#D4A950"}],
  worstColors:[{name:"Bright White",hex:"#FFFFFF"},{name:"Black",hex:"#000000"},{name:"Fuchsia",hex:"#FF00FF"},{name:"Electric Blue",hex:"#007FFF"},{name:"Bright Red",hex:"#FF0000"},{name:"Neon Green",hex:"#39FF14"},{name:"Hot Pink",hex:"#FF69B4"},{name:"Royal Blue",hex:"#4169E1"},{name:"Bright Purple",hex:"#8B00FF"},{name:"Bright Yellow",hex:"#FFFF00"}],
  neutralColors:[{name:"Warm Ivory",pantone:"11-0507 TCX",hex:"#F5F0DD"},{name:"Camel",pantone:"15-1225 TCX",hex:"#C19A6B"},{name:"Warm Taupe",pantone:"16-1210 TCX",hex:"#B8A088"},{name:"Bronze Brown",pantone:"18-0830 TCX",hex:"#8B6F47"},{name:"Mushroom",pantone:"16-1210 TCX",hex:"#C9B29B"},{name:"Dark Taupe",pantone:"18-1017 TCX",hex:"#7A6655"}],
  neutralDescription:"Soft Autumn's neutrals should be warm and earthy. Camel, warm taupe, mushroom, and soft brown create the perfect muted backdrop. Avoid cool greys and stark black/white.",
  sisterPalette:{name:"Soft Summer",colors:[{name:"Dusty Rose",hex:"#DCAE96"},{name:"Slate",hex:"#708090"},{name:"Mauve",hex:"#C4A4A4"}],description:"Soft Summer shares your muted quality with cooler tones — great for softer cool-warm crossover colours."},
  worstColorsDescription:"Bright, vivid, and cool colours are the least flattering. Neon shades and primary colours overwhelm your muted warmth, and cool blues clash with your warm undertones.",
  warmCoolText:"Your warm undertones are gently apparent. Warm, earthy shades enhance your skin's natural golden quality, while cool colours can make you look slightly washed out or grey.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Fit Me Matte",shades:"220 Natural Beige, 230 Natural Buff",note:"Warm toned with matte finish"},{brand:"NYX Can't Stop Won't Stop",shades:"Golden, Golden Honey",note:"Warm full coverage"}],highEnd:[{brand:"Charlotte Tilbury Beautiful Skin",shades:"4 Warm, 5 Warm",note:"Warm radiant finish"},{brand:"Too Faced Born This Way",shades:"Natural Beige, Warm Beige",note:"Warm-toned natural"}]},lipstick:[{category:"Dusty Rose",products:[{brand:"MAC",product:"Mocha",note:"Warm muted brown-rose"},{brand:"Charlotte Tilbury",product:"Pillow Talk Medium",note:"Warm dusty nude-pink"}]},{category:"Terracotta",products:[{brand:"NARS",product:"Tolede",note:"Warm terracotta nude"},{brand:"NYX",product:"Cannes",note:"Warm muted mauve-brown"}]},{category:"Warm Berry",products:[{brand:"Clinique",product:"Fig Pop",note:"Muted warm berry"},{brand:"Revlon",product:"Rum Raisin",note:"Warm brown-berry"}]}],blusher:"Muted warm shades — soft terracotta, dusty peach, warm rose. Try Benefit Dallas or MAC Harmony for that perfect soft warmth.",eyeshadow:"Earthy, warm muted tones — soft brown, olive, warm taupe, dusty gold, muted copper. The Charlotte Tilbury Pillow Talk palette is ideal.",eyeshadowColors:["#C19A6B","#808000","#B8A088","#A07855","#CD8B76","#9CAF88","#B08A8A","#D4B896"],blusherColors:["#CD8B76","#E0937E","#B08A8A","#CC6A52","#C17844","#B4706E","#D4A950","#B86048"]},
  wardrobe:{tip1:"Pair earthy warm tones together for an effortlessly sophisticated look — camel with olive, or dusty coral with sage green.",tip2:"Create subtle depth by layering tonal muted shades — warm taupe with bronze, or mushroom with fern green.",tip3:"Stay in the muted zone. Avoid pairing your soft colours with anything too bright — keep everything gently warm and earthy.",combos:[[{hex:"#C19A6B"},{hex:"#808000"}],[{hex:"#CD8B76"},{hex:"#9CAF88"}],[{hex:"#B8A088"},{hex:"#548B54"}],[{hex:"#CC6A52"},{hex:"#5A8A80"}]],accentColors:[{name:"Dusty Coral",pantone:"16-1329 TCX",hex:"#CD8B76"},{name:"Olive",pantone:"17-0535 TCX",hex:"#808000"},{name:"Terracotta",pantone:"16-1526 TCX",hex:"#CC6A52"},{name:"Muted Teal",pantone:"17-5111 TCX",hex:"#5A8A80"},{name:"Sage",pantone:"16-0110 TCX",hex:"#9CAF88"},{name:"Warm Plum",pantone:"18-1412 TCX",hex:"#8B5F65"}]}
},
"True Autumn": {
  family:"warm",depth:"medium-deep",contrast:"medium",
  description:"True Autumn is the heart of the warm earth tones. Your colouring is rich, warm, and earthy — reminiscent of the peak of autumn with its golden light and rich harvest hues. You have warm, golden skin, and your overall appearance exudes natural warmth and richness.",
  hue:0.85,value:0.4,chroma:0.6,
  bestColors:[{name:"Burnt Orange",pantone:"16-1448 TCX",hex:"#CC5500"},{name:"Rust",pantone:"18-1248 TCX",hex:"#B7410E"},{name:"Olive Green",pantone:"18-0629 TCX",hex:"#6B8E23"},{name:"Pumpkin",pantone:"16-1350 TCX",hex:"#FF7518"},{name:"Teal",pantone:"18-4726 TCX",hex:"#008080"},{name:"Warm Red",pantone:"18-1550 TCX",hex:"#CD5C5C"},{name:"Mustard",pantone:"15-1054 TCX",hex:"#FFDB58"},{name:"Forest Green",pantone:"19-5511 TCX",hex:"#228B22"},{name:"Terracotta",pantone:"17-1340 TCX",hex:"#E27D60"},{name:"Bronze",pantone:"18-0830 TCX",hex:"#CD7F32"},{name:"Copper",pantone:"18-1248 TCX",hex:"#B87333"},{name:"Saffron",pantone:"14-1064 TCX",hex:"#F4C430"},{name:"Brick Red",pantone:"18-1440 TCX",hex:"#CB4154"},{name:"Warm Brown",pantone:"19-1118 TCX",hex:"#8B4513"},{name:"Moss Green",pantone:"17-0627 TCX",hex:"#8A9A5B"},{name:"Cinnamon",pantone:"17-1340 TCX",hex:"#D2691E"},{name:"Dark Coral",pantone:"17-1544 TCX",hex:"#CD5B45"},{name:"Golden Oak",pantone:"16-1133 TCX",hex:"#C49B3F"},{name:"Amber",pantone:"15-1050 TCX",hex:"#FFBF00"},{name:"Spice Brown",pantone:"18-1140 TCX",hex:"#8B5A2B"},{name:"Deep Teal",pantone:"19-4726 TCX",hex:"#006D6F"}],
  worstColors:[{name:"Fuchsia",hex:"#FF00FF"},{name:"Icy Blue",hex:"#D6ECEF"},{name:"Cool Grey",hex:"#8C92AC"},{name:"Black",hex:"#000000"},{name:"Pastel Pink",hex:"#FFD1DC"},{name:"Royal Blue",hex:"#4169E1"},{name:"Powder Blue",hex:"#B0E0E6"},{name:"Lavender",hex:"#E6E6FA"},{name:"Silver",hex:"#C0C0C0"},{name:"Cool White",hex:"#F0F0FF"}],
  neutralColors:[{name:"Cream",pantone:"11-0507 TCX",hex:"#FFFDD0"},{name:"Warm Camel",pantone:"15-1225 TCX",hex:"#C19A6B"},{name:"Cognac",pantone:"18-1142 TCX",hex:"#9A463D"},{name:"Chocolate",pantone:"19-1118 TCX",hex:"#5C3317"},{name:"Golden Beige",pantone:"14-1118 TCX",hex:"#D4A76A"},{name:"Dark Olive",pantone:"19-0515 TCX",hex:"#556B2F"}],
  neutralDescription:"True Autumn's neutrals are warm, rich, and earthy. Cream, camel, cognac, and chocolate brown provide the perfect warm foundation. Gold jewelry always looks better than silver.",
  sisterPalette:{name:"True Spring",colors:[{name:"Marigold",hex:"#EDA740"},{name:"Coral",hex:"#FF6F61"},{name:"Grass Green",hex:"#7CFC00"}],description:"True Spring shares your warmth with lighter, clearer tones — great for brightening up your autumn palette."},
  worstColorsDescription:"Cool, icy, and blue-based colours are the least flattering. Pastels wash you out, while cool blues and greys clash with your rich warm undertones.",
  warmCoolText:"Warm colours are undeniably your element. Rich warm tones make your skin glow with health and your eyes sparkle. Cool colours, by contrast, make you appear tired and dull.",
  makeup:{foundation:{drugstore:[{brand:"L'Oreal True Match",shades:"W5 Sand Beige, W6 Sun Beige",note:"Warm golden undertones"},{brand:"Maybelline Fit Me",shades:"310 Sun Beige, 320 Natural Tan",note:"Warm deep coverage"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NC35, NC40",note:"Warm golden medium"},{brand:"Fenty Beauty Pro Filt'r",shades:"230, 240",note:"Warm neutral coverage"}]},lipstick:[{category:"Warm Red",products:[{brand:"MAC",product:"Chili",note:"Iconic warm brick red"},{brand:"NARS",product:"Heat Wave",note:"Rich warm orange-red"}]},{category:"Terracotta",products:[{brand:"Charlotte Tilbury",product:"Super Nineties",note:"Warm brown-terracotta"},{brand:"NYX",product:"London",note:"Warm brown nude"}]},{category:"Warm Berry",products:[{brand:"Bobbi Brown",product:"Cranberry",note:"Warm deep berry"},{brand:"Clinique",product:"Plum Pop",note:"Warm-toned plum"}]}],blusher:"Rich warm blush shades — terracotta, warm peach, bronze, and spiced coral. Try NARS Taj Mahal or Benefit Box o' Powder in Dallas.",eyeshadow:"Earthy warm shades — bronze, copper, warm brown, olive, terracotta, and gold. The Urban Decay Naked Heat palette is your perfect match.",eyeshadowColors:["#CD7F32","#B87333","#8B4513","#6B8E23","#D2691E","#E27D60","#C49B3F","#8A9A5B"],blusherColors:["#E27D60","#CD5B45","#CD7F32","#CC5500","#B87333","#CB4154","#CD5C5C","#D2691E"]},
  wardrobe:{tip1:"Pair rich earth tones for a luxurious look — burnt orange with forest green, or rust with teal.",tip2:"Use cream and camel as warm neutrals to ground your deep, rich accent colours.",tip3:"Try unexpected warm combinations — mustard with bronze, or cinnamon with deep teal for sophisticated depth.",combos:[[{hex:"#CC5500"},{hex:"#228B22"}],[{hex:"#B7410E"},{hex:"#008080"}],[{hex:"#FFDB58"},{hex:"#CD7F32"}],[{hex:"#D2691E"},{hex:"#006D6F"}]],accentColors:[{name:"Burnt Orange",pantone:"16-1448 TCX",hex:"#CC5500"},{name:"Teal",pantone:"18-4726 TCX",hex:"#008080"},{name:"Rust",pantone:"18-1248 TCX",hex:"#B7410E"},{name:"Forest Green",pantone:"19-5511 TCX",hex:"#228B22"},{name:"Mustard",pantone:"15-1054 TCX",hex:"#FFDB58"},{name:"Warm Red",pantone:"18-1550 TCX",hex:"#CD5C5C"}]}
},
"Dark Autumn": {
  family:"warm",depth:"deep",contrast:"medium-high",
  description:"Dark Autumn is the deepest and richest of the warm seasons. Your colouring is warm, deep, and intense — like the last days of autumn with its deep golden light and rich, dark harvest tones. You have a striking depth to your appearance with warm undertones.",
  hue:0.7,value:0.25,chroma:0.55,
  bestColors:[{name:"Ochre",pantone:"14-1036 TCX",hex:"#CC7722"},{name:"Mustard Gold",pantone:"16-1133 TCX",hex:"#C49B3F"},{name:"Cathay Spice",pantone:"18-0950 TCX",hex:"#99652C"},{name:"Burnt Sienna",pantone:"17-1544 TCX",hex:"#C65D3E"},{name:"Cranberry",pantone:"17-1545 TCX",hex:"#9F1D35"},{name:"Chili",pantone:"18-1448 TCX",hex:"#C14B30"},{name:"Burnt Russet",pantone:"19-1530 TCX",hex:"#7A3B2E"},{name:"Pomegranate",pantone:"19-1930 TCX",hex:"#7B2D3F"},{name:"Raspberry Radiance",pantone:"19-2432 TCX",hex:"#8A2449"},{name:"Titan",pantone:"19-4128 TCX",hex:"#2E4A62"},{name:"Blue Iolite",pantone:"19-4056 TCX",hex:"#2D3A6D"},{name:"Blithe",pantone:"17-4336 TCX",hex:"#2589BD"},{name:"Bermuda",pantone:"14-5416 TCX",hex:"#6DBFA7"},{name:"Lagoon",pantone:"16-5418 TCX",hex:"#448B7A"},{name:"Frosty Spruce",pantone:"18-5622 TCX",hex:"#2E6B56"},{name:"Evergreen",pantone:"19-5420 TCX",hex:"#1E4D3B"},{name:"Green Gables",pantone:"19-4906 TCX",hex:"#1F3D2D"},{name:"Willow",pantone:"16-0632 TCX",hex:"#8E854B"},{name:"Plantation",pantone:"18-0832 TCX",hex:"#5E6838"},{name:"Wren",pantone:"19-0814 TCX",hex:"#4A4030"},{name:"Glamour Gold",pantone:"20-0033 TPM",hex:"#B8860B"}],
  worstColors:[{name:"White Smoke",hex:"#F5F5F5"},{name:"Pastel Pink",hex:"#F7D5E1"},{name:"Rose Pink",hex:"#F48BAB"},{name:"Silver Chalice",hex:"#BCA6B0"},{name:"Bazaar",hex:"#9F6B7E"},{name:"Gull Grey",hex:"#9DB0B6"},{name:"Light Blue",hex:"#B9DBF3"},{name:"Acid Green",hex:"#7BF900"},{name:"Medium Grey",hex:"#7F8281"},{name:"Black",hex:"#000000"}],
  neutralColors:[{name:"Warm Cream",pantone:"11-0507 TCX",hex:"#F5ECD7"},{name:"Dark Camel",pantone:"17-1128 TCX",hex:"#A67B52"},{name:"Coffee",pantone:"19-1118 TCX",hex:"#6F4E37"},{name:"Espresso",pantone:"19-1012 TCX",hex:"#3C2415"},{name:"Dark Bronze",pantone:"18-0830 TCX",hex:"#7A5C3E"},{name:"Warm Charcoal",pantone:"19-0814 TCX",hex:"#4A4030"}],
  neutralDescription:"Dark Autumn's neutrals are deep, warm, and grounding. Rich espresso, coffee, dark bronze, and warm charcoal anchor your palette. Use warm cream for contrast rather than white.",
  sisterPalette:{name:"Dark Winter",colors:[{name:"Burgundy",hex:"#800020"},{name:"Deep Teal",hex:"#004D40"},{name:"Dark Plum",hex:"#3D0C2B"}],description:"Dark Winter shares your depth with cooler undertones — offering deep, dramatic crossover colours."},
  worstColorsDescription:"Light, pastel, and cool colours are the least flattering for Dark Autumn. Soft pastels wash out your rich depth, while cool tones clash with your warm undertones. Pure black can be too cool and harsh.",
  warmCoolText:"Warm, deep colours bring out the richness and intensity of your natural colouring. Your skin gains a luminous, healthy quality in warm earth tones, while cool colours can make your complexion appear ashy or flat.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Fit Me Matte + Poreless",shades:"330 Toffee, 338 Spicy Brown",note:"Deep warm golden undertones"},{brand:"L'Oreal Infallible Fresh Wear",shades:"515 Copper, 520 Sienna",note:"Deep warm long-wearing"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NC44, NC45",note:"Deep warm golden"},{brand:"Fenty Beauty Pro Filt'r",shades:"370, 385",note:"Deep warm rich coverage"}]},lipstick:[{category:"Deep Red",products:[{brand:"MAC",product:"Diva",note:"Deep warm burgundy-red"},{brand:"NARS",product:"Mysterious Red",note:"Rich deep warm red"}]},{category:"Warm Brown",products:[{brand:"Charlotte Tilbury",product:"Pillow Talk Intense",note:"Deep warm brown-pink"},{brand:"NYX",product:"Exotic",note:"Warm spiced brown"}]},{category:"Cranberry",products:[{brand:"Bobbi Brown",product:"Cranberry",note:"Deep warm cranberry"},{brand:"Revlon",product:"Black Cherry",note:"Dark warm berry"}]}],blusher:"Deep warm blush shades — rich terracotta, warm bronze, spiced rose, and deep peach. Try Fenty Beauty Summertime Wine or NARS Taj Mahal for rich warmth.",eyeshadow:"Rich, warm, deep shades — bronze, copper, warm chocolate, deep olive, russet, and gold. The Urban Decay Naked Honey or ABH Soft Glam palettes are perfect.",eyeshadowColors:["#B8860B","#99652C","#6F4E37","#5E6838","#C65D3E","#A67B52","#7A5C3E","#4A4030"],blusherColors:["#C65D3E","#C14B30","#CC7722","#9F1D35","#7B2D3F","#A67B52","#99652C","#8A2449"]},
  wardrobe:{tip1:"Pair deep warm tones for a rich, luxurious look — cranberry with evergreen, or burnt sienna with titan blue.",tip2:"Use warm cream and dark camel as your light neutrals, anchored by espresso and coffee brown.",tip3:"Combine warm metallics like gold and bronze with your deep earth tones for evening elegance.",combos:[[{hex:"#9F1D35"},{hex:"#1E4D3B"}],[{hex:"#C65D3E"},{hex:"#2E4A62"}],[{hex:"#CC7722"},{hex:"#2E6B56"}],[{hex:"#C14B30"},{hex:"#2D3A6D"}]],accentColors:[{name:"Cranberry",pantone:"17-1545 TCX",hex:"#9F1D35"},{name:"Lagoon",pantone:"16-5418 TCX",hex:"#448B7A"},{name:"Ochre",pantone:"14-1036 TCX",hex:"#CC7722"},{name:"Burnt Sienna",pantone:"17-1544 TCX",hex:"#C65D3E"},{name:"Titan",pantone:"19-4128 TCX",hex:"#2E4A62"},{name:"Glamour Gold",pantone:"20-0033 TPM",hex:"#B8860B"}]}
},
"Bright Winter": {
  family:"cool",depth:"medium",contrast:"high",
  description:"Bright Winter is the most vivid and striking of the cool seasons. Your colouring is high-contrast, cool, and clear — your eyes are jewel-like and intense, your skin is clear with cool undertones, and you come alive in bold, saturated, icy-clear colours.",
  hue:0.25,value:0.5,chroma:0.9,
  bestColors:[{name:"Fuchsia",pantone:"18-2436 TCX",hex:"#FF00FF"},{name:"Royal Blue",pantone:"19-3955 TCX",hex:"#4169E1"},{name:"Emerald",pantone:"17-5641 TCX",hex:"#50C878"},{name:"True Red",pantone:"19-1664 TCX",hex:"#DC143C"},{name:"Bright Purple",pantone:"18-3838 TCX",hex:"#8B00FF"},{name:"Hot Pink",pantone:"17-2036 TCX",hex:"#FF1493"},{name:"Cobalt",pantone:"19-4150 TCX",hex:"#0047AB"},{name:"Icy Blue",pantone:"13-4404 TCX",hex:"#E0FFFF"},{name:"Bright Teal",pantone:"17-5029 TCX",hex:"#008B8B"},{name:"Shocking Pink",pantone:"17-2127 TCX",hex:"#FC0FC0"},{name:"Sapphire",pantone:"19-4150 TCX",hex:"#0F52BA"},{name:"Bright Turquoise",pantone:"15-5519 TCX",hex:"#00CED1"},{name:"Vivid Green",pantone:"17-6153 TCX",hex:"#00FF00"},{name:"Cherry Red",pantone:"19-1757 TCX",hex:"#DE3163"},{name:"Violet Blue",pantone:"18-3944 TCX",hex:"#324AB2"},{name:"Icy Pink",pantone:"12-2906 TCX",hex:"#FFE4E1"},{name:"Bright Coral",pantone:"16-1546 TCX",hex:"#FF4040"},{name:"Electric Violet",pantone:"18-3737 TCX",hex:"#8F00FF"},{name:"Pure White",pantone:"11-0601 TCX",hex:"#FFFFFF"},{name:"Bright Yellow",pantone:"14-0756 TCX",hex:"#FFFF00"},{name:"Deep Magenta",pantone:"19-2434 TCX",hex:"#CC0066"}],
  worstColors:[{name:"Camel",hex:"#C19A6B"},{name:"Olive",hex:"#808000"},{name:"Rust",hex:"#B7410E"},{name:"Mustard",hex:"#FFDB58"},{name:"Dusty Rose",hex:"#DCAE96"},{name:"Warm Brown",hex:"#8B4513"},{name:"Sage",hex:"#BCB88A"},{name:"Terracotta",hex:"#E27D60"},{name:"Khaki",hex:"#C3B091"},{name:"Burnt Orange",hex:"#CC5500"}],
  neutralColors:[{name:"Pure White",pantone:"11-0601 TCX",hex:"#FFFFFF"},{name:"Black",pantone:"19-4006 TCX",hex:"#000000"},{name:"Navy",pantone:"19-3940 TCX",hex:"#1C2951"},{name:"Cool Charcoal",pantone:"19-4007 TCX",hex:"#3D3D3D"},{name:"Icy Grey",pantone:"13-4108 TCX",hex:"#D0D0D0"},{name:"Dark Grey",pantone:"18-4005 TCX",hex:"#5A5A5A"}],
  neutralDescription:"Bright Winter thrives in high-contrast neutrals. Pure black, bright white, and crisp navy are your power neutrals. Avoid murky mid-tones — keep your neutrals clean and clear.",
  sisterPalette:{name:"Bright Spring",colors:[{name:"Hot Pink",hex:"#FF69B4"},{name:"Electric Blue",hex:"#007FFF"},{name:"Bright Coral",hex:"#FF4040"}],description:"Bright Spring shares your clarity and vibrancy with warmer undertones — perfect for borrowing warm bright accents."},
  worstColorsDescription:"Warm, muted, and earthy colours are the least flattering. Dusty, muddy tones deaden your vivid natural contrast, and warm earth tones clash with your cool undertones.",
  warmCoolText:"Cool colours make your complexion absolutely radiant. Your skin appears luminous and your eyes gain incredible intensity in cool, vivid shades. Warm colours dull this striking effect noticeably.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline SuperStay Full Coverage",shades:"110 Porcelain, 120 Classic Ivory",note:"Cool full-coverage"},{brand:"Revlon ColorStay",shades:"150 Buff, 200 Nude",note:"Cool-neutral long-wear"}],highEnd:[{brand:"Estee Lauder Double Wear",shades:"1N1 Ivory Nude, 1C1 Cool Bone",note:"Cool precise match"},{brand:"NARS Natural Radiant",shades:"Mont Blanc, Gobi",note:"Cool luminous finish"}]},lipstick:[{category:"True Red",products:[{brand:"MAC",product:"Ruby Woo",note:"Iconic blue-red matte"},{brand:"NARS",product:"Dragon Girl",note:"Bright satin red"}]},{category:"Fuchsia",products:[{brand:"Dior",product:"Poison Girl",note:"Vivid cool fuchsia"},{brand:"Too Faced",product:"Mean Girls",note:"Hot bright pink"}]},{category:"Berry",products:[{brand:"Charlotte Tilbury",product:"Love Liberty",note:"Deep vivid berry"},{brand:"Clinique",product:"Raspberry Pop",note:"Bright cool berry"}]}],blusher:"Bold, clear blush shades — bright pink, vivid berry, and cool fuchsia. Try NARS Exhibit A (used sparingly) or MAC Full Fuchsia for maximum impact.",eyeshadow:"Bold, pigmented cool shades — sapphire, emerald, silver, deep plum, and bright purple. The Pat McGrath Mothership palettes offer the intensity Bright Winter needs.",eyeshadowColors:["#0047AB","#50C878","#C0C0C0","#8B00FF","#DC143C","#4169E1","#0F52BA","#FF00FF"],blusherColors:["#FF1493","#FC0FC0","#DC143C","#FF00FF","#FF4040","#CC0066","#DE3163","#8F00FF"]},
  wardrobe:{tip1:"Embrace bold contrasts — pair fuchsia with cobalt, or emerald with true red for show-stopping combinations.",tip2:"Black and white are your power base. Add one or two vivid colour pops for maximum impact.",tip3:"Keep all colours at the same vivid intensity. Never dilute your bright colours with muted or dusty companions.",combos:[[{hex:"#FF00FF"},{hex:"#0047AB"}],[{hex:"#50C878"},{hex:"#DC143C"}],[{hex:"#000000"},{hex:"#FFFF00"}],[{hex:"#FF1493"},{hex:"#00CED1"}]],accentColors:[{name:"Fuchsia",pantone:"18-2436 TCX",hex:"#FF00FF"},{name:"Emerald",pantone:"17-5641 TCX",hex:"#50C878"},{name:"True Red",pantone:"19-1664 TCX",hex:"#DC143C"},{name:"Royal Blue",pantone:"19-3955 TCX",hex:"#4169E1"},{name:"Hot Pink",pantone:"17-2036 TCX",hex:"#FF1493"},{name:"Cobalt",pantone:"19-4150 TCX",hex:"#0047AB"}]}
},
"True Winter": {
  family:"cool",depth:"deep",contrast:"high",
  description:"True Winter is the quintessential cool season with dramatic contrast. Your colouring is high-contrast, cool, and striking — think snow against dark branches. You have clear, cool skin, deep dark hair, and eyes that are bright and clear. You look best in bold, cool, saturated colours.",
  hue:0.15,value:0.3,chroma:0.75,
  bestColors:[{name:"True Red",pantone:"19-1664 TCX",hex:"#CC0000"},{name:"Royal Blue",pantone:"19-3955 TCX",hex:"#4169E1"},{name:"Emerald",pantone:"17-5641 TCX",hex:"#008000"},{name:"Deep Magenta",pantone:"19-2434 TCX",hex:"#8B008B"},{name:"Icy Blue",pantone:"13-4404 TCX",hex:"#D6ECEF"},{name:"Pure White",pantone:"11-0601 TCX",hex:"#FFFFFF"},{name:"Black",pantone:"19-4006 TCX",hex:"#000000"},{name:"Burgundy",pantone:"19-1724 TCX",hex:"#800020"},{name:"Navy",pantone:"19-3940 TCX",hex:"#000080"},{name:"Pine Green",pantone:"19-5511 TCX",hex:"#014421"},{name:"Deep Purple",pantone:"19-3748 TCX",hex:"#4B0082"},{name:"Cherry",pantone:"19-1757 TCX",hex:"#DE3163"},{name:"Cobalt",pantone:"19-4150 TCX",hex:"#0047AB"},{name:"Icy Pink",pantone:"12-1706 TCX",hex:"#FFE4E1"},{name:"Bright Teal",pantone:"17-5029 TCX",hex:"#008B8B"},{name:"Silver",pantone:"14-5002 TCX",hex:"#C0C0C0"},{name:"Deep Wine",pantone:"19-1934 TCX",hex:"#722F37"},{name:"Sapphire",pantone:"19-4150 TCX",hex:"#0F52BA"},{name:"Cranberry",pantone:"18-1643 TCX",hex:"#9F1D35"},{name:"Cool Violet",pantone:"18-3737 TCX",hex:"#7F00FF"},{name:"Deep Teal",pantone:"19-4726 TCX",hex:"#004D40"}],
  worstColors:[{name:"Orange",hex:"#FF8C00"},{name:"Mustard",hex:"#FFDB58"},{name:"Rust",hex:"#B7410E"},{name:"Camel",hex:"#C19A6B"},{name:"Peach",hex:"#FFDAB9"},{name:"Warm Brown",hex:"#8B4513"},{name:"Olive",hex:"#808000"},{name:"Salmon",hex:"#FA8072"},{name:"Coral",hex:"#FF6F61"},{name:"Gold",hex:"#FFD700"}],
  neutralColors:[{name:"Pure White",pantone:"11-0601 TCX",hex:"#FFFFFF"},{name:"Black",pantone:"19-4006 TCX",hex:"#000000"},{name:"Dark Navy",pantone:"19-3940 TCX",hex:"#0A0A2A"},{name:"Charcoal",pantone:"19-4007 TCX",hex:"#36454F"},{name:"Silver Grey",pantone:"14-4102 TCX",hex:"#BEBEBE"},{name:"Cool Grey",pantone:"16-3802 TCX",hex:"#808080"}],
  neutralDescription:"True Winter commands the most dramatic neutrals. Pure black, stark white, charcoal, and dark navy create powerful contrast. Silver jewellery is always more flattering than gold.",
  sisterPalette:{name:"True Summer",colors:[{name:"Slate Blue",hex:"#6A5ACD"},{name:"Dusty Rose",hex:"#C08081"},{name:"Teal",hex:"#008080"}],description:"True Summer shares your cool base with softer intensity — useful for softer, more understated looks."},
  worstColorsDescription:"Warm, golden, and earthy colours are completely at odds with True Winter's cool, high-contrast colouring. Orange, warm brown, and gold make you look washed out.",
  warmCoolText:"Cool colours bring your striking features to life dramatically. Your high contrast colouring is amplified in cool, saturated shades, creating a powerful, polished appearance. Warm tones soften this impact unfavourably.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Fit Me",shades:"110 Porcelain, 120 Classic Ivory",note:"Cool light coverage"},{brand:"Revlon ColorStay",shades:"110 Ivory, 150 Buff",note:"Cool long-wearing"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NW13, NW15",note:"Cool pink undertones"},{brand:"Dior Forever Skin Glow",shades:"0N Neutral, 1CR Cool Rosy",note:"Cool luminous finish"}]},lipstick:[{category:"True Red",products:[{brand:"MAC",product:"Russian Red",note:"The ultimate cool red"},{brand:"Dior",product:"999",note:"Iconic true red"}]},{category:"Deep Berry",products:[{brand:"NARS",product:"Train Bleu",note:"Deep cool plum"},{brand:"MAC",product:"Rebel",note:"Deep cool berry"}]},{category:"Cool Pink",products:[{brand:"Charlotte Tilbury",product:"Electric Poppy",note:"Vivid cool pink"},{brand:"Clinique",product:"Punch Pop",note:"Bright cool pink"}]}],blusher:"Cool, vivid blush — bright cool pink, berry, plum, and wine. Try MAC Frankly Scarlet or NARS Sin for bold cool colour on cheeks.",eyeshadow:"Cool, dramatic shades — charcoal, navy, deep plum, silver, cool taupe, and sapphire. The Charlotte Tilbury Rock n Kohl palette works beautifully.",eyeshadowColors:["#36454F","#000080","#4B0082","#C0C0C0","#808080","#0047AB","#0F52BA","#800020"],blusherColors:["#DC143C","#DE3163","#9F1D35","#8B008B","#722F37","#CC0000","#4B0082","#800020"]},
  wardrobe:{tip1:"Embrace high contrast — pair pure white with black, then add a bold colour pop like true red or royal blue.",tip2:"Monochromatic cool dressing is powerful — all navy, all burgundy, or all charcoal with silver accessories.",tip3:"Don't shy away from the darkest colours in your palette. Deep wine, dark navy, and pine green are your sophistication staples.",combos:[[{hex:"#000000"},{hex:"#FFFFFF"}],[{hex:"#CC0000"},{hex:"#014421"}],[{hex:"#4169E1"},{hex:"#800020"}],[{hex:"#000080"},{hex:"#DE3163"}]],accentColors:[{name:"True Red",pantone:"19-1664 TCX",hex:"#CC0000"},{name:"Royal Blue",pantone:"19-3955 TCX",hex:"#4169E1"},{name:"Emerald",pantone:"17-5641 TCX",hex:"#008000"},{name:"Deep Magenta",pantone:"19-2434 TCX",hex:"#8B008B"},{name:"Cherry",pantone:"19-1757 TCX",hex:"#DE3163"},{name:"Cobalt",pantone:"19-4150 TCX",hex:"#0047AB"}]}
},
"Dark Winter": {
  family:"cool",depth:"deep",contrast:"high",
  description:"Dark Winter is the deepest and most intense of the cool seasons. Your colouring is dark, cool, and dramatic — rich and mysterious like a winter night. You have deep skin with cool undertones, dark hair, and intense, deep-set eyes. You wear deep, saturated, cool-based colours with authority.",
  hue:0.3,value:0.2,chroma:0.65,
  bestColors:[{name:"Burgundy",pantone:"19-1724 TCX",hex:"#800020"},{name:"Deep Teal",pantone:"19-4726 TCX",hex:"#004D40"},{name:"Dark Plum",pantone:"19-2524 TCX",hex:"#3D0C2B"},{name:"Oxblood",pantone:"19-1327 TCX",hex:"#4A0000"},{name:"Dark Navy",pantone:"19-3940 TCX",hex:"#0A0A2A"},{name:"Forest Green",pantone:"19-5511 TCX",hex:"#014421"},{name:"Deep Red",pantone:"19-1764 TCX",hex:"#8B0000"},{name:"Dark Sapphire",pantone:"19-4150 TCX",hex:"#082567"},{name:"Aubergine",pantone:"19-2814 TCX",hex:"#3B0D27"},{name:"Icy White",pantone:"11-0601 TCX",hex:"#F0F8FF"},{name:"Black",pantone:"19-4006 TCX",hex:"#000000"},{name:"Dark Olive",pantone:"19-0515 TCX",hex:"#3B4A2B"},{name:"Ruby",pantone:"19-1663 TCX",hex:"#9B111E"},{name:"Deep Chocolate",pantone:"19-1118 TCX",hex:"#3C1414"},{name:"Dark Magenta",pantone:"19-2434 TCX",hex:"#5C005C"},{name:"Midnight Blue",pantone:"19-4028 TCX",hex:"#003366"},{name:"Dark Pine",pantone:"19-5513 TCX",hex:"#1A3A2A"},{name:"Deep Wine",pantone:"19-1934 TCX",hex:"#4E0707"},{name:"Prussian Blue",pantone:"19-4056 TCX",hex:"#003153"},{name:"Dark Bronze",pantone:"19-0840 TCX",hex:"#5C4033"},{name:"Icy Lavender",pantone:"13-3920 TCX",hex:"#E6E0F3"}],
  worstColors:[{name:"Bright Orange",hex:"#FF6600"},{name:"Peach",hex:"#FFDAB9"},{name:"Light Yellow",hex:"#FFFFE0"},{name:"Coral",hex:"#FF6F61"},{name:"Warm Beige",hex:"#D4A76A"},{name:"Light Aqua",hex:"#7FFFD4"},{name:"Salmon",hex:"#FA8072"},{name:"Warm Pink",hex:"#FF85A2"},{name:"Gold",hex:"#FFD700"},{name:"Pastel Green",hex:"#98FB98"}],
  neutralColors:[{name:"Black",pantone:"19-4006 TCX",hex:"#000000"},{name:"Icy White",pantone:"11-0601 TCX",hex:"#F0F8FF"},{name:"Dark Charcoal",pantone:"19-4007 TCX",hex:"#2C2C2C"},{name:"Dark Navy",pantone:"19-3940 TCX",hex:"#0A0A2A"},{name:"Deep Brown",pantone:"19-1118 TCX",hex:"#3C1414"},{name:"Cool Charcoal",pantone:"18-4005 TCX",hex:"#484848"}],
  neutralDescription:"Dark Winter's neutrals are the deepest and most dramatic. Black, icy white, dark charcoal, and deep navy form a powerful foundation. Use icy tones for contrast against your deep colours.",
  sisterPalette:{name:"Dark Autumn",colors:[{name:"Ochre",hex:"#CC7722"},{name:"Cranberry",hex:"#9F1D35"},{name:"Evergreen",hex:"#1E4D3B"}],description:"Dark Autumn shares your depth with warmer undertones — useful for borrowing rich warm-deep colours."},
  worstColorsDescription:"Light, warm, and pastel colours are the least flattering. Soft peaches, warm pinks, and light warm tones are too delicate for your deep, dramatic colouring.",
  warmCoolText:"Cool, deep colours are your strongest allies. Rich, dark cool tones make your features look powerful and refined. Warm colours soften your dramatic contrast and reduce the intensity of your striking appearance.",
  makeup:{foundation:{drugstore:[{brand:"Maybelline Fit Me Matte",shades:"355 Coconut, 360 Mocha",note:"Deep cool-neutral"},{brand:"L'Oreal Infallible Fresh Wear",shades:"525 Deep Golden, 530 Deep Amber",note:"Deep cool long-wear"}],highEnd:[{brand:"MAC Studio Fix Fluid",shades:"NW45, NW47",note:"Deep cool undertones"},{brand:"Fenty Beauty Pro Filt'r",shades:"420, 430",note:"Deep cool-neutral coverage"}]},lipstick:[{category:"Deep Red",products:[{brand:"MAC",product:"Diva",note:"Deep dramatic wine-red"},{brand:"NARS",product:"Bette",note:"Deep cool red"}]},{category:"Dark Berry",products:[{brand:"Charlotte Tilbury",product:"Glastonberry",note:"Deep cool berry"},{brand:"Revlon",product:"Black Cherry",note:"Dark dramatic berry"}]},{category:"Dark Plum",products:[{brand:"MAC",product:"Media",note:"Deep cool plum"},{brand:"Urban Decay",product:"Shame",note:"Rich dark burgundy"}]}],blusher:"Deep, dramatic blush shades — wine, deep berry, dark rose, and cool plum. Try NARS Sin or MAC Blush in Fever for rich, sophisticated colour.",eyeshadow:"Dark, cool, dramatic shades — charcoal, deep navy, aubergine, dark teal, and silver. Pat McGrath Midnight Sun offers the depth Dark Winter demands.",eyeshadowColors:["#2C2C2C","#0A0A2A","#3D0C2B","#004D40","#C0C0C0","#082567","#3B0D27","#003153"],blusherColors:["#800020","#4A0000","#9B111E","#5C005C","#3D0C2B","#8B0000","#4E0707","#722F37"]},
  wardrobe:{tip1:"Pair deep cool colours together for maximum sophistication — burgundy with dark navy, or aubergine with deep teal.",tip2:"Use icy pastels (icy white, icy lavender) as a striking contrast against your deep dark colours.",tip3:"Black is your ultimate neutral. Build outfits around black with rich jewel-tone accents for effortless elegance.",combos:[[{hex:"#800020"},{hex:"#0A0A2A"}],[{hex:"#3D0C2B"},{hex:"#004D40"}],[{hex:"#000000"},{hex:"#F0F8FF"}],[{hex:"#9B111E"},{hex:"#014421"}]],accentColors:[{name:"Burgundy",pantone:"19-1724 TCX",hex:"#800020"},{name:"Deep Teal",pantone:"19-4726 TCX",hex:"#004D40"},{name:"Ruby",pantone:"19-1663 TCX",hex:"#9B111E"},{name:"Dark Sapphire",pantone:"19-4150 TCX",hex:"#082567"},{name:"Aubergine",pantone:"19-2814 TCX",hex:"#3B0D27"},{name:"Dark Plum",pantone:"19-2524 TCX",hex:"#3D0C2B"}]}
}
};

// Additional season metadata for new pages
const FAMILY_DATA = {
  Autumn: {bgs:["#8B4513","#722F37","#6B8E23"], labels:["Deep Brown","Burgundy","Muted Green"]},
  Spring: {bgs:["#808000","#CD5C5C","#00CED1"], labels:["Olive Gold","Coral Red","Bright Cyan"]},
  Summer: {bgs:["#9370DB","#C48793","#6A5ACD"], labels:["Lavender","Dusty Rose","Slate Blue"]},
  Winter: {bgs:["#000000","#0A0A2A","#FFFFFF"], labels:["Black","Deep Navy","Bright White"]}
};

const SUB_SEASONS = {
  Spring: {subs:["Light","True","Bright"], colors:[["#FFBE98","#F7E7CE","#90EE90"],["#EDA740","#FF6F61","#008B8B"],["#FF69B4","#007FFF","#FFE135"]]},
  Summer: {subs:["Light","True","Soft"], colors:[["#B0E0E6","#E8ADAA","#C9A0DC"],["#6A5ACD","#C08081","#008080"],["#708090","#C4A4A4","#5F9EA0"]]},
  Autumn: {subs:["Soft","True","Dark"], colors:[["#C19A6B","#CD8B76","#808000"],["#CC5500","#B7410E","#008080"],["#CC7722","#9F1D35","#1E4D3B"]]},
  Winter: {subs:["Bright","True","Dark"], colors:[["#FF00FF","#4169E1","#50C878"],["#CC0000","#000080","#008000"],["#800020","#004D40","#3D0C2B"]]}
};

const GOLD_SILVER_DATA = {
  warm: [
    {label:"Soft Gold",note:"Goes well on Light Spring, Soft Autumn & Light Summer",colors:["#B8860B","#DAA520","#CD853F"]},
    {label:"Rich Gold",note:"Goes well on True Spring, True Autumn & Bright Spring",colors:["#FFD700","#B8860B","#8B6914"]},
    {label:"Silver, Platinum & White Gold",note:"Best on cool seasons: Summer & Winter",colors:["#C0C0C0","#E5E4E2","#A8A9AD"]},
    {label:"Rose Gold & Copper",note:"Goes well on Soft Autumn, True Autumn & Dark Autumn",colors:["#B76E79","#B87333","#DA8A67"]}
  ],
  cool: [
    {label:"Silver & Platinum",note:"Goes well on True Winter, True Summer & Bright Winter",colors:["#C0C0C0","#E5E4E2","#A8A9AD"]},
    {label:"White Gold",note:"Goes well on Light Summer, Bright Winter & True Winter",colors:["#FFFFF0","#E8E8E8","#D4D4D4"]},
    {label:"Soft Gold",note:"Can work on Soft Summer when muted enough",colors:["#B8860B","#DAA520","#CD853F"]},
    {label:"Rose Gold",note:"Goes well on Light Summer, Soft Summer & some cool-warm bridges",colors:["#B76E79","#E8B4B8","#DA8A67"]}
  ]
};

// State
let clientPhoto = null;
let selectedFamilyFilter = null;
let analysisNotes = '';
let activeDrape = null;

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reportDate').valueAsDate = new Date();
  
  // Photo upload
  const uploadDiv = document.getElementById('photoUpload');
  const photoInput = document.getElementById('photoInput');
  uploadDiv.addEventListener('click', () => photoInput.click());
  uploadDiv.addEventListener('dragover', e => { e.preventDefault(); uploadDiv.style.borderColor = '#8B4A3A'; });
  uploadDiv.addEventListener('dragleave', () => { uploadDiv.style.borderColor = '#d4c4b8'; });
  uploadDiv.addEventListener('drop', e => {
    e.preventDefault();
    uploadDiv.style.borderColor = '#d4c4b8';
    if (e.dataTransfer.files.length) handlePhoto(e.dataTransfer.files[0]);
  });
  photoInput.addEventListener('change', e => { if (e.target.files.length) handlePhoto(e.target.files[0]); });

  // Photo controls
  const zoomEl = document.getElementById('photoZoom');
  const xEl = document.getElementById('photoX');
  const yEl = document.getElementById('photoY');
  function updatePhotoVars() {
    const z = zoomEl.value, x = xEl.value, y = yEl.value;
    document.documentElement.style.setProperty('--photo-zoom', z);
    document.documentElement.style.setProperty('--photo-x', x + '%');
    document.documentElement.style.setProperty('--photo-y', y + '%');
    document.getElementById('zoomVal').textContent = z + 'x';
    document.getElementById('xVal').textContent = x + '%';
    document.getElementById('yVal').textContent = y + '%';
  }
  zoomEl.addEventListener('input', updatePhotoVars);
  xEl.addEventListener('input', updatePhotoVars);
  yEl.addEventListener('input', updatePhotoVars);
  updatePhotoVars();
  renderWorkspace();

  // Season change
  document.getElementById('seasonSelect').addEventListener('change', () => {
    const s = document.getElementById('seasonSelect').value;
    const d = SEASONS[s];
    if (d) {
      document.getElementById('depthSelect').value = d.depth === 'light' ? 'light' : (d.depth === 'deep' || d.depth === 'medium-deep' || d.depth === 'medium-high') ? 'deep' : 'medium';
      document.getElementById('contrastSelect').value = d.contrast === 'low' ? 'low' : d.contrast === 'high' || d.contrast === 'medium-high' ? 'high' : 'medium';
    }
    selectedFamilyFilter = s ? getFamily(s) : selectedFamilyFilter;
    renderWorkspace();
    renderReport();
  });
  document.getElementById('clientName').addEventListener('input', () => { renderWorkspace(); renderReport(); });
  document.getElementById('reportDate').addEventListener('change', () => { renderWorkspace(); renderReport(); });
  document.getElementById('depthSelect').addEventListener('change', () => { renderWorkspace(); renderReport(); });
  document.getElementById('contrastSelect').addEventListener('change', () => { renderWorkspace(); renderReport(); });

  const params = new URLSearchParams(window.location.search);
  if (params.get('sample') === '1') {
    loadSampleReport();
  } else if (params.get('season')) {
    const season = params.get('season');
    if (SEASONS[season]) {
      document.getElementById('seasonSelect').value = season;
      document.getElementById('clientName').value = params.get('name') || '';
      renderReport();
    }
  }
});

function escapeHTML(value) {
  return String(value || '').replace(/[&<>"']/g, function(ch) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
  });
}

function jsArg(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

function seasonFamilyList(family) {
  return Object.keys(SEASONS).filter(function(season) { return getFamily(season) === family; });
}

function seasonSwatches(seasons, count) {
  var colors = [];
  seasons.forEach(function(season) {
    colors = colors.concat(SEASONS[season].bestColors.slice(0, 3));
  });
  return colors.slice(0, count || 6).map(function(c) {
    return '<span class="mini-swatch" title="' + escapeHTML(c.name) + '" style="background:' + c.hex + '"></span>';
  }).join('');
}

function axisPercent(value, fallback) {
  if (typeof value === 'number') return Math.round(value * 100);
  return fallback;
}

function getDefaultDrape(activeFamily, season) {
  if (activeDrape) return activeDrape;
  if (season && SEASONS[season]) {
    const c = SEASONS[season].bestColors[0];
    return {hex:c.hex, name:c.name, source:season};
  }
  const firstSeason = seasonFamilyList(activeFamily)[0];
  const c = SEASONS[firstSeason].bestColors[0];
  return {hex:c.hex, name:c.name, source:firstSeason};
}

function setDrapeColor(hex, name, source) {
  activeDrape = {hex:hex, name:name, source:source};
  renderWorkspace();
}

function drapeGroups(activeFamily) {
  return seasonFamilyList(activeFamily).map(function(season) {
    const colors = SEASONS[season].bestColors.slice(0, 6);
    return '<div class="drape-group"><h4>' + season + '</h4><div class="drape-swatch-grid">' +
      colors.map(function(c) {
        const isActive = activeDrape && activeDrape.hex === c.hex && activeDrape.name === c.name;
        return '<button class="drape-swatch' + (isActive ? ' is-active' : '') + '" type="button" title="' + escapeHTML(c.name) + '" aria-label="Try ' + escapeHTML(c.name) + ' drape" style="background:' + c.hex + '" onclick="setDrapeColor(\'' + jsArg(c.hex) + '\',\'' + jsArg(c.name) + '\',\'' + jsArg(season) + '\')"></button>';
      }).join('') +
    '</div></div>';
  }).join('');
}

function renderWorkspace() {
  const workspace = document.getElementById('analysisWorkspace');
  if (!workspace) return;

  const season = document.getElementById('seasonSelect').value;
  const data = SEASONS[season];
  const activeFamily = selectedFamilyFilter || (season ? getFamily(season) : 'Spring');
  const clientName = escapeHTML(document.getElementById('clientName').value || 'Current Client');
  const families = ['Spring','Summer','Autumn','Winter'];
  const filteredSeasons = seasonFamilyList(activeFamily);
  const status = season ? 'Final: ' + season : 'Season not selected';
  const drape = getDefaultDrape(activeFamily, season);
  const activeSeasonText = season || 'Not set';
  const photoStatus = clientPhoto ? 'Photo ready' : 'Needs photo';
  const photo = clientPhoto
    ? '<img src="' + clientPhoto + '" alt="Client analysis preview">'
    : '<div class="no-photo">Upload a client photo to compare against this drape</div>';
  const hue = axisPercent(data && data.hue, 50);
  const value = axisPercent(data && data.value, 50);
  const chroma = axisPercent(data && data.chroma, 50);
  const stepper = [
    {label:'Photo', detail: photoStatus, state: clientPhoto ? 'done' : 'active'},
    {label:'Drape', detail: drape.name, state: clientPhoto ? 'active' : ''},
    {label:'Season', detail: activeSeasonText, state: season ? 'done' : ''},
    {label:'Export', detail: season ? 'PDF ready' : 'Set season first', state: season ? 'done' : ''}
  ].map(function(step, idx) {
    return '<div class="studio-step ' + step.state + '"><span class="studio-step-num">' + (idx + 1) + '</span><span><strong>' + escapeHTML(step.label) + '</strong><span>' + escapeHTML(step.detail) + '</span></span></div>';
  }).join('');

  const familyCards = families.map(function(fam) {
    const seasons = seasonFamilyList(fam);
    const isActive = fam === activeFamily;
    const notes = {
      Spring:'Warm, clear, fresh, light-to-bright color movement.',
      Summer:'Cool, soft, gentle, light-to-muted color movement.',
      Autumn:'Warm, earthy, muted, medium-to-deep color movement.',
      Winter:'Cool, clear, high-contrast, deep-to-bright color movement.'
    };
    return '<button class="family-card' + (isActive ? ' is-active' : '') + '" type="button" onclick="setWorkspaceFamily(\'' + fam + '\')">' +
      '<h4>' + fam + '</h4>' +
      '<div class="mini-swatch-grid">' + seasonSwatches(seasons, 6) + '</div>' +
      '<p>' + notes[fam] + '</p>' +
      '</button>';
  }).join('');

  const seasonCards = filteredSeasons.map(function(option) {
    const s = SEASONS[option];
    const isActive = option === season;
    const traits = [
      s.family === 'warm' ? 'Warm' : 'Cool',
      s.depth === 'medium-deep' ? 'Deep' : s.depth,
      s.contrast === 'medium-high' ? 'Med-high' : s.contrast
    ];
    return '<button class="season-option-card' + (isActive ? ' is-active' : '') + '" type="button" onclick="selectSeasonFromWorkspace(\'' + option + '\')">' +
      '<h4>' + option + '</h4>' +
      '<div class="mini-swatch-grid">' + s.bestColors.slice(0, 6).map(function(c) {
        return '<span class="mini-swatch" title="' + escapeHTML(c.name) + '" style="background:' + c.hex + '"></span>';
      }).join('') + '</div>' +
      '<div class="season-meta">' + traits.map(function(t) { return '<span>' + escapeHTML(t) + '</span>'; }).join('') + '</div>' +
      '<p>' + escapeHTML(s.description.split('.')[0]) + '.</p>' +
      '</button>';
  }).join('');

  workspace.innerHTML =
    '<div class="studio-commandbar">' +
      '<div class="studio-brand"><span class="studio-mark"></span><span><strong>Funke Roberts</strong><span>Colour Analysis Studio</span></span></div>' +
      '<div class="commandbar-actions">' +
        '<button class="command-btn" type="button" onclick="document.getElementById(\'photoInput\').click()">Upload Photo</button>' +
        '<button class="command-btn" type="button" onclick="loadSampleReport()">Load Sample</button>' +
        '<button class="command-btn" type="button" onclick="renderReport()">Refresh Report</button>' +
        '<button class="command-btn primary" type="button" onclick="window.print()">Export PDF</button>' +
      '</div>' +
    '</div>' +
    '<div class="workspace-header">' +
      '<div><div class="workspace-kicker">Private Draping Workspace</div><h2>' + clientName + '</h2>' +
      '<p>Compare season families and sub-season swatches before generating the final client report. This supports the analyst decision; it does not diagnose automatically.</p></div>' +
      '<div class="workspace-status"><span>' + escapeHTML(status) + '</span><span class="status-pill teal">' + escapeHTML(activeFamily) + ' family</span><span class="status-pill gold">' + escapeHTML(drape.name) + '</span></div>' +
    '</div>' +
    '<div class="studio-stepper">' + stepper + '</div>' +
    '<div class="workspace-body">' +
      '<aside class="analysis-photo-panel">' +
        '<div class="stage-header"><strong>Live Drape Canvas</strong><span>Selected color fills the stage</span></div>' +
        '<div class="drape-canvas" style="background:' + drape.hex + '"><div class="client-cutout">' + photo + '</div></div>' +
        '<div class="drape-caption"><span><strong>Drape:</strong> ' + escapeHTML(drape.name) + '<br>' + escapeHTML(drape.source) + '</span><span class="drape-chip" style="background:' + drape.hex + '"></span></div>' +
        '<div class="axis-list">' +
          '<div class="axis-item"><span class="axis-label">Warmth</span><span class="axis-track"><span class="axis-fill" style="width:' + hue + '%"></span></span></div>' +
          '<div class="axis-item"><span class="axis-label">Value</span><span class="axis-track"><span class="axis-fill" style="width:' + value + '%"></span></span></div>' +
          '<div class="axis-item"><span class="axis-label">Chroma</span><span class="axis-track"><span class="axis-fill" style="width:' + chroma + '%"></span></span></div>' +
        '</div>' +
      '</aside>' +
      '<div class="palette-panel">' +
        '<section class="workspace-section">' +
          '<div class="workspace-title-row"><h3>Compare Season Families</h3><p>Start broad: warm vs cool, light vs deep, soft vs bright.</p></div>' +
          '<div class="family-board">' + familyCards + '</div>' +
        '</section>' +
        '<section class="workspace-section">' +
          '<div class="workspace-title-row"><h3>Choose a ' + activeFamily + ' Sub-Season</h3><p>These swatches set the final palette used in the PDF.</p></div>' +
          '<div class="season-board">' + seasonCards + '</div>' +
        '</section>' +
        '<section class="workspace-section">' +
          '<div class="workspace-title-row"><h3>Test Individual Drapes</h3><p>Click a swatch to preview it as the canvas background.</p></div>' +
          '<div class="drape-board">' + drapeGroups(activeFamily) + '</div>' +
        '</section>' +
        '<section class="workspace-section">' +
          '<div class="workspace-title-row"><h3>Analyst Notes</h3><p>Working notes stay on this screen and are hidden from the exported PDF.</p></div>' +
          '<textarea class="workspace-notes" oninput="analysisNotes=this.value" placeholder="Example: warm tones clear the complexion; dark muted colors give the strongest harmony.">' + escapeHTML(analysisNotes) + '</textarea>' +
          '<div class="workspace-actions"><button class="workspace-action" type="button" onclick="renderReport()">Refresh Report Preview</button><button class="workspace-action secondary" type="button" onclick="window.print()">Export PDF</button></div>' +
        '</section>' +
      '</div>' +
    '</div>';
}

function setWorkspaceFamily(family) {
  selectedFamilyFilter = family;
  activeDrape = null;
  renderWorkspace();
}

function selectSeasonFromWorkspace(season) {
  document.getElementById('seasonSelect').value = season;
  const data = SEASONS[season];
  selectedFamilyFilter = getFamily(season);
  activeDrape = null;
  if (data) {
    document.getElementById('depthSelect').value = data.depth === 'light' ? 'light' : (data.depth === 'deep' || data.depth === 'medium-deep' || data.depth === 'medium-high') ? 'deep' : 'medium';
    document.getElementById('contrastSelect').value = data.contrast === 'low' ? 'low' : data.contrast === 'high' || data.contrast === 'medium-high' ? 'high' : 'medium';
  }
  renderWorkspace();
  renderReport();
}

function handlePhoto(file) {
  const reader = new FileReader();
  reader.onload = e => {
    clientPhoto = e.target.result;
    const uploadDiv = document.getElementById('photoUpload');
    uploadDiv.innerHTML = '<img src="' + clientPhoto + '" alt="Client photo">';
    uploadDiv.classList.add('has-photo');
    renderWorkspace();
    renderReport();
  };
  reader.readAsDataURL(file);
}

function ovalPhoto(bg) {
  const inner = clientPhoto
    ? '<img src="' + clientPhoto + '" class="client-photo" alt="Client">'
    : '<div class="no-photo">No Photo</div>';
  return '<div class="photo-oval" style="background:' + (bg||'#ddd') + ';">' + inner + '</div>';
}

function wheelPhoto() {
  if (clientPhoto) return '<img src="' + clientPhoto + '" alt="Client">';
  return '<div class="no-photo">No Photo</div>';
}

function photoHTML(cls, style) {
  if (clientPhoto) return '<img src="' + clientPhoto + '" alt="Client" style="' + (style||'') + '">';
  return '<div class="no-photo ' + (cls||'') + '" style="width:100%;height:100%;' + (style||'') + '">No Photo</div>';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
}

function getFamily(season) {
  if (season.includes('Spring')) return 'Spring';
  if (season.includes('Summer')) return 'Summer';
  if (season.includes('Autumn')) return 'Autumn';
  return 'Winter';
}

function getSubIndex(season) {
  const fam = getFamily(season);
  const subs = SUB_SEASONS[fam].subs;
  for (let i = 0; i < subs.length; i++) {
    if (season.toLowerCase().includes(subs[i].toLowerCase())) return i;
  }
  return 0;
}

function loadSampleReport() {
  document.getElementById('clientName').value = 'Sample Client';
  document.getElementById('seasonSelect').value = 'Dark Autumn';
  document.getElementById('depthSelect').value = 'deep';
  document.getElementById('contrastSelect').value = 'high';
  selectedFamilyFilter = 'Autumn';
  renderWorkspace();
  renderReport();
}

function renderReport() {
  renderWorkspace();
  const season = document.getElementById('seasonSelect').value;
  const name = document.getElementById('clientName').value || 'Client Name';
  const date = document.getElementById('reportDate').value;
  const depthVal = document.getElementById('depthSelect').value;
  const contrastVal = document.getElementById('contrastSelect').value;
  const data = SEASONS[season];
  
  if (!data) {
    document.getElementById('reportContent').innerHTML = '<div class="page"><div class="cover" style="display:flex;align-items:center;justify-content:center"><div class="placeholder-panel"><h2>Color Analysis Report</h2><p>Use the workspace above to compare swatches and choose the final color season. The report pages will update once a season is selected.</p><div class="placeholder-steps"><div class="placeholder-step"><strong>1. Add Details</strong><span>Name, date, and client photo.</span></div><div class="placeholder-step"><strong>2. Compare Swatches</strong><span>Review family and sub-season boards.</span></div><div class="placeholder-step"><strong>3. Set Final Season</strong><span>The selected palette drives the report.</span></div><div class="placeholder-step"><strong>4. Export PDF</strong><span>Use Export / Save PDF when ready.</span></div></div></div></div></div>';
    return;
  }

  const family = getFamily(season);
  const isWarm = data.family === 'warm';
  const subIdx = getSubIndex(season);
  let html = '';

  // ========== PAGE 1 - COVER ==========
  html += '<div class="page"><div class="cover">' +
    '<div class="frame-outer" style="position:relative;width:260px;height:260px;margin:30px auto">' +
    '<div class="quatrefoil-border"></div>' +
    '<div class="quatrefoil-frame">' + photoHTML() + '</div></div>' +
    '<h1>Color Analysis</h1>' +
    '<div class="subtitle">Personal Color Report</div>' +
    '<div class="client-name">' + name + '</div>' +
    '<div class="date-line">' + formatDate(date) + '</div>' +
    '<div class="brand-footer"><span>Funke Roberts</span><span class="url">funkeroberts.com</span></div>' +
    '</div></div>';

  // ========== PAGE 2 - WARM VS COOL (Oval Photos on Solid Backgrounds) ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="wc-title">Warm vs Cool Analysis</h2>' +
    '<div class="wc-grid">' +
    '<div class="wc-cell">' + ovalPhoto('#F5A623') + '<div class="wc-label">WARM</div></div>' +
    '<div class="wc-cell">' + ovalPhoto('#D4508B') + '<div class="wc-label">COOL</div></div>' +
    '<div class="wc-cell">' + ovalPhoto('#F5E6C8') + '<div class="wc-label">WARM</div></div>' +
    '<div class="wc-cell">' + ovalPhoto('#FFFFFF') + '<div class="wc-label">COOL</div></div>' +
    '</div>' +
    '<p class="wc-analysis">' + data.warmCoolText + '</p>' +
    '</div></div>';

  // ========== PAGE 3 - GOLD VS SILVER DRAPING (Sunburst/Pinwheel) ==========
  var gsData = isWarm ? GOLD_SILVER_DATA.warm : GOLD_SILVER_DATA.cool;
  var badges = ['\u2460','\u2461','\u2462','\u2463'];
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="wc-title">Metal Draping Analysis</h2>' +
    '<p style="text-align:center;font-size:.85rem;color:var(--accent);margin-bottom:16px">' + (isWarm ? 'Warm tones suit gold and copper metals best' : 'Cool tones suit silver and platinum metals best') + '</p>' +
    '<div class="wc-grid">';
  for (var gi = 0; gi < 4; gi++) {
    var gd = gsData[gi];
    var c1 = gd.colors[0], c2 = gd.colors[1], c3 = gd.colors[2];
    var cg = 'conic-gradient(' + c1 + ' 0deg,' + c2 + ' 60deg,' + c3 + ' 120deg,' + c1 + ' 180deg,' + c2 + ' 240deg,' + c3 + ' 300deg,' + c1 + ' 360deg)';
    html += '<div class="wc-cell"><div class="sunburst-card">' +
      '<div class="sunburst-bg" style="background:' + cg + '"></div>' +
      '<div class="sunburst-badge">' + badges[gi] + '</div>' +
      '<div class="photo-oval" style="background:transparent;width:80%;margin:0 auto;position:relative;z-index:1">' +
      (clientPhoto ? '<img src="' + clientPhoto + '" class="client-photo" alt="Client">' : '<div class="no-photo">No Photo</div>') +
      '</div>' +
      '<div class="sunburst-label">' + gd.label + '</div>' +
      '</div>' +
      '<p style="font-size:.6rem;color:#888;margin-top:2px;text-align:center">' + gd.note + '</p>' +
      '</div>';
  }
  html += '</div>' +
    '<div style="display:flex;justify-content:space-around;margin-top:8px">' +
    '<div class="wc-label">WARM METALS</div><div class="wc-label">COOL METALS</div></div>' +
    '</div></div>';

  // ========== PAGE 4 - DEPTH & CONTRAST ANALYSIS ==========
  var depthBgs = {light:'#E6E6FA', medium:'#9370DB', deep:'#5C2030'};
  var contrastBgs = {low:['#E8D5E0','#D4C4D8','#C0B0C8'], medium:['#C0A0C0','#808080','#4A4A6A'], high:['#FFFFFF','#808080','#000000']};
  var depthLabel = depthVal.charAt(0).toUpperCase() + depthVal.slice(1);
  var contrastLabel = contrastVal === 'medium' ? 'Medium to High' : contrastVal.charAt(0).toUpperCase() + contrastVal.slice(1);
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="wc-title">Depth & Contrast Analysis</h2>' +
    '<h3 class="section-title" style="text-align:center;margin-bottom:12px">Depth</h3>' +
    '<div class="depth-grid">';
  ['light','medium','deep'].forEach(function(dv) {
    var sel = dv === depthVal;
    html += '<div class="depth-cell">' + ovalPhoto(depthBgs[dv]) +
      '<div class="label">' + dv.charAt(0).toUpperCase() + dv.slice(1) + '</div>' +
      (sel ? '<div class="depth-indicator">Your Depth</div>' : '') + '</div>';
  });
  html += '</div>' +
    '<p class="section-desc" style="text-align:center">Your depth level is <strong>' + depthLabel + '</strong>, which means ' +
    (depthVal === 'light' ? 'lighter, more delicate colours suit you best.' : depthVal === 'deep' ? 'rich, deep, saturated colours bring out your natural beauty.' : 'medium-intensity colours are most harmonious with your colouring.') + '</p>' +
    '<h3 class="section-title" style="text-align:center;margin:20px 0 12px">Contrast</h3>' +
    '<div class="depth-grid">';
  var cKeys = ['low','medium','high'];
  var cLabels = ['Low','Medium to High','High'];
  cKeys.forEach(function(ck, ci) {
    var sel = ck === contrastVal;
    var cbg = contrastBgs[ck];
    html += '<div class="depth-cell">' +
      '<div class="photo-oval" style="background:linear-gradient(135deg,' + cbg[0] + ',' + cbg[1] + ',' + cbg[2] + ')">' +
      (clientPhoto ? '<img src="' + clientPhoto + '" class="client-photo" alt="Client">' : '<div class="no-photo">No Photo</div>') +
      '</div>' +
      '<div class="label">' + cLabels[ci] + '</div>' +
      (sel ? '<div class="depth-indicator">Your Contrast</div>' : '') + '</div>';
  });
  html += '</div>' +
    '<p class="section-desc" style="text-align:center">Your contrast level is <strong>' + contrastLabel + '</strong>.</p>' +
    '</div></div>';

  // ========== PAGE 5 - FAMILY COMPARISON ==========
  var compFamily, myFamily;
  if (isWarm) { myFamily = family; compFamily = family === 'Autumn' ? 'Spring' : 'Autumn'; }
  else { myFamily = family; compFamily = family === 'Summer' ? 'Winter' : 'Summer'; }
  var myFD = FAMILY_DATA[myFamily], compFD = FAMILY_DATA[compFamily];
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="wc-title">' + myFamily + ' vs ' + compFamily + '</h2>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">' +
    '<div class="family-header">' + myFamily + '</div><div class="family-header">' + compFamily + '</div></div>' +
    '<div class="family-grid">';
  for (var fi = 0; fi < 3; fi++) {
    html += '<div class="wc-cell">' + ovalPhoto(myFD.bgs[fi]) + '<div style="font-size:.7rem;color:#888">' + myFD.labels[fi] + '</div></div>';
    html += '<div class="wc-cell">' + ovalPhoto(compFD.bgs[fi]) + '<div style="font-size:.7rem;color:#888">' + compFD.labels[fi] + '</div></div>';
  }
  html += '</div>' +
    '<p class="section-desc" style="margin-top:16px">' + myFamily + ' colours bring out the best in your complexion, creating a harmonious and natural look. ' +
    'When compared side by side with ' + compFamily + ' tones, your skin appears healthier, more vibrant, and your features are better defined in the ' + myFamily + ' palette. ' +
    'While both families share a ' + (isWarm ? 'warm' : 'cool') + ' undertone, the specific qualities of ' + myFamily + ' — its ' +
    (myFamily === 'Autumn' ? 'earthy richness and muted warmth' : myFamily === 'Spring' ? 'bright clarity and fresh warmth' : myFamily === 'Summer' ? 'soft coolness and gentle mutedness' : 'dramatic depth and bold clarity') +
    ' — are more aligned with your natural colouring.</p>' +
    '</div></div>';

  // ========== PAGE 6 - SUB-SEASON DRAPING ==========
  var subData = SUB_SEASONS[family];
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="wc-title">Sub-Season Analysis</h2>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px">';
  subData.subs.forEach(function(s, si) {
    html += '<div class="sub-header">' + s + ' ' + family +
      (si === subIdx ? ' &#10003;' : '') + '</div>';
  });
  html += '</div><div class="sub-grid">';
  for (var row = 0; row < 3; row++) {
    subData.subs.forEach(function(s, si) {
      var cls = si === subIdx ? ' sub-selected' : '';
      html += '<div class="wc-cell' + cls + '">' + ovalPhoto(subData.colors[si][row]) + '</div>';
    });
  }
  html += '</div>' +
    '<p class="section-desc" style="margin-top:16px;text-align:center">' +
    'After comparing all three sub-seasons within ' + family + ', <strong>' + season + '</strong> is the best match for your colouring. ' +
    'The specific qualities of this sub-season — ' + data.description.split('.')[0].toLowerCase() + ' — create the most harmonious and flattering effect on your complexion.</p>' +
    '</div></div>';

  // ========== PAGE 7 - SEASON REVEAL + COLOR WHEEL + BEST COLORS ==========
  var best21 = data.bestColors.slice(0, 21);
  // Build conic gradient from best colors
  var wheelColors = data.bestColors.slice(0, 12);
  var wheelStops = '';
  wheelColors.forEach(function(c, i) {
    var deg1 = Math.round(i * 360 / wheelColors.length);
    var deg2 = Math.round((i + 1) * 360 / wheelColors.length);
    wheelStops += c.hex + ' ' + deg1 + 'deg,' + c.hex + ' ' + deg2 + 'deg' + (i < wheelColors.length - 1 ? ',' : '');
  });
  html += '<div class="page"><div class="page-inner">' +
    '<div class="reveal-heading"><h2>You are a <span>' + season + '</span></h2></div>' +
    '<p class="reveal-desc">' + data.description + '</p>' +
    '<div class="reveal-color-wheel">' +
    '<div class="wheel-bg" style="background:conic-gradient(' + wheelStops + ')"></div>' +
    '<div class="wheel-photo">' + wheelPhoto() + '</div>' +
    '</div>' +
    '<div style="display:flex;align-items:flex-start;gap:24px;margin-bottom:16px"><div style="flex:1">' +
    '<div class="slider-row"><div class="slider-label"><span>COOL</span><span>WARM</span></div>' +
    '<div class="slider-track" style="position:relative"><div class="slider-marker" style="left:' + (data.hue*100) + '%"></div></div>' +
    '<div style="text-align:center;font-size:.7rem;margin-top:2px;color:var(--accent);font-weight:600">HUE</div></div>' +
    '<div class="slider-row"><div class="slider-label"><span>DARK</span><span>LIGHT</span></div>' +
    '<div class="slider-track value-track" style="position:relative"><div class="slider-marker" style="left:' + (data.value*100) + '%"></div></div>' +
    '<div style="text-align:center;font-size:.7rem;margin-top:2px;color:var(--accent);font-weight:600">VALUE</div></div>' +
    '<div class="slider-row"><div class="slider-label"><span>MUTED</span><span>BRIGHT</span></div>' +
    '<div class="slider-track chroma-track" style="position:relative"><div class="slider-marker" style="left:' + (data.chroma*100) + '%"></div></div>' +
    '<div style="text-align:center;font-size:.7rem;margin-top:2px;color:var(--accent);font-weight:600">CHROMA</div></div>' +
    '</div></div>' +
    '<h3 class="best-colors-title">Best Colours</h3>' +
    '<div class="swatch-grid">' +
    best21.map(function(c) { return '<div class="swatch"><div class="swatch-color" style="background:' + c.hex + '"></div><div class="swatch-name">' + c.name + '</div><div class="swatch-code">' + c.pantone + '</div></div>'; }).join('') +
    '</div></div></div>';

  // ========== PAGE 8 - WORST COLORS, NEUTRALS, SISTER PALETTE ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h3 class="section-title">Worst Colours</h3>' +
    '<p class="section-desc">' + data.worstColorsDescription + '</p>' +
    '<div class="worst-grid">' +
    data.worstColors.map(function(c) { return '<div class="swatch worst-swatch"><div class="swatch-color" style="background:' + c.hex + '"></div><div class="swatch-name">' + c.name + '</div><div class="swatch-code">' + c.hex + '</div></div>'; }).join('') +
    '</div>' +
    '<h3 class="section-title">Neutral Colours</h3>' +
    '<p class="section-desc">' + data.neutralDescription + '</p>' +
    '<div class="neutral-grid">' +
    data.neutralColors.map(function(c) { return '<div class="swatch"><div class="swatch-color" style="background:' + c.hex + '"></div><div class="swatch-name">' + c.name + '</div><div class="swatch-code">' + c.pantone + '</div></div>'; }).join('') +
    '</div>' +
    '<div class="sister-section"><h4>Sister Palette: ' + data.sisterPalette.name + '</h4>' +
    '<div class="sister-colors">' +
    data.sisterPalette.colors.map(function(c) { return '<div><div class="swatch-color" style="background:' + c.hex + ';width:60px;height:60px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1)"></div><div class="swatch-name" style="margin-top:4px">' + c.name + '</div></div>'; }).join('') +
    '</div><p class="sister-desc">' + data.sisterPalette.description + '</p></div>' +
    '</div></div>';

  // ========== PAGE 9 - MAKEUP: FOUNDATION ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="makeup-heading">Make-up Recommendations</h2>' +
    '<div style="text-align:center"><span class="makeup-category">Foundation</span></div>' +
    '<div class="makeup-sub">Drugstore Options</div><ul class="product-list">' +
    data.makeup.foundation.drugstore.map(function(p) { return '<li><strong>' + p.brand + '</strong> — Shades: ' + p.shades + '<br><em>' + p.note + '</em></li>'; }).join('') +
    '</ul><div class="makeup-sub">High-End Options</div><ul class="product-list">' +
    data.makeup.foundation.highEnd.map(function(p) { return '<li><strong>' + p.brand + '</strong> — Shades: ' + p.shades + '<br><em>' + p.note + '</em></li>'; }).join('') +
    '</ul><div class="makeup-tip"><strong>Tip:</strong> ' +
    (isWarm ? 'Look for foundations with warm, golden, or peachy undertones. Avoid foundations with pink or blue bases.' : 'Look for foundations with cool, pink, or neutral undertones. Avoid foundations with yellow or golden bases.') +
    '</div></div></div>';

  // ========== PAGE 10 - MAKEUP: LIPSTICK ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="makeup-heading">Make-up Recommendations</h2>' +
    '<div style="text-align:center"><span class="makeup-category">Lipstick</span></div>' +
    data.makeup.lipstick.map(function(cat) {
      return '<div class="lip-category"><h4>' + cat.category + '</h4><ul class="product-list">' +
        cat.products.map(function(p) { return '<li><strong>' + p.brand + '</strong> — ' + p.product + '<br><em>' + p.note + '</em></li>'; }).join('') +
        '</ul></div>';
    }).join('') +
    '<div class="makeup-tip"><strong>Finish Tips for ' + season + ':</strong> ' +
    (data.depth === 'light' || data.contrast === 'low' ? 'Sheer, satin, and glossy finishes are most flattering. Matte lipsticks can appear too heavy — opt for creamy or balm-like textures.' :
     data.contrast === 'high' ? 'Both matte and satin finishes work beautifully on you. Bold, opaque coverage suits your high-contrast colouring. Glossy finishes add extra drama.' :
     'Satin and cream finishes are ideal. You can carry both sheer everyday shades and richer evening tones with ease.') +
    '</div></div></div>';

  // ========== PAGE 11 - MAKEUP: BLUSHER & EYESHADOW ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="makeup-heading">Make-up Recommendations</h2>' +
    '<div style="text-align:center;margin-bottom:16px"><span class="makeup-category">Blusher</span></div>' +
    '<p class="section-desc">' + data.makeup.blusher + '</p>' +
    '<div class="color-row">' +
    data.makeup.blusherColors.map(function(c) { return '<div class="color-dot" style="background:' + c + '"></div>'; }).join('') +
    '</div>' +
    '<div style="text-align:center;margin:24px 0 16px"><span class="makeup-category">Eyeshadow</span></div>' +
    '<p class="section-desc">' + data.makeup.eyeshadow + '</p>' +
    '<div class="color-row">' +
    data.makeup.eyeshadowColors.map(function(c) { return '<div class="color-dot" style="background:' + c + '"></div>'; }).join('') +
    '</div>' +
    '<div class="makeup-tip" style="margin-top:24px"><strong>Application Tip:</strong> ' +
    (isWarm ? 'Warm metallic finishes like gold and bronze shimmer look stunning. Use warm browns for definition and golden highlighter on brow bones and inner corners.' :
     'Cool metallic finishes like silver, pewter, and icy shimmer complement your colouring. Use cool greys and taupes for definition, and silver or pink highlighter for radiance.') +
    '</div></div></div>';

  // ========== PAGE 12 - WARDROBE RECOMMENDATIONS ==========
  html += '<div class="page"><div class="page-inner">' +
    '<h2 class="makeup-heading">Wardrobe Recommendations</h2>' +
    '<h3 class="section-title" style="margin-top:8px">Colour Combinations</h3>' +
    '<ol class="wardrobe-tips">' +
    '<li>' + data.wardrobe.tip1 + '</li>' +
    '<li>' + data.wardrobe.tip2 + '</li>' +
    '<li>' + data.wardrobe.tip3 + '</li></ol>' +
    '<div style="margin-top:20px"><h4 style="font-family:var(--display);font-size:1.1rem;color:var(--heading);margin-bottom:10px">Suggested Pairings</h4>' +
    '<div class="combo-section">' +
    data.wardrobe.combos.map(function(pair) {
      return '<div class="combo-pair"><div class="combo-circle" style="background:' + pair[0].hex + '"></div>' +
        '<span class="combo-plus">+</span><div class="combo-circle" style="background:' + pair[1].hex + '"></div></div>';
    }).join('') +
    '</div></div>' +
    '<div style="margin-top:20px"><h4 style="font-family:var(--display);font-size:1.1rem;color:var(--heading);margin-bottom:10px">Accent Colours</h4>' +
    '<div class="accent-grid">' +
    data.wardrobe.accentColors.map(function(c) { return '<div class="swatch"><div class="swatch-color" style="background:' + c.hex + '"></div><div class="swatch-name">' + c.name + '</div><div class="swatch-code">' + c.pantone + '</div></div>'; }).join('') +
    '</div></div>' +
    '<div style="margin-top:24px;text-align:center;padding:16px;border-top:1px solid #ede3db">' +
    '<p style="font-family:var(--display);font-size:1.1rem;color:var(--accent);letter-spacing:2px">FUNKE ROBERTS</p>' +
    '<p style="font-size:.8rem;color:#999">funkeroberts.com</p></div>' +
    '</div></div>';

  document.getElementById('reportContent').innerHTML = html;
}
