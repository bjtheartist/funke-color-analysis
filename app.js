const LOGO_URL = "https://funkeroberts.com/wp-content/uploads/2026/02/Untitled-180-x-60-px-1.png";
const DEFAULT_SEASON = "Deep Winter";

const INTAKE_SLOTS = [
  {
    id: "headshot",
    title: "Head, unobstructed",
    shortTitle: "Headshot",
    placeholder: "HD",
    prompt: "Clear face reference",
    evidence:
      "Used to read the client's overall contrast, feature depth, and how much color intensity the face can carry."
  },
  {
    id: "wrist",
    title: "Wrist + vein color",
    shortTitle: "Wrist",
    placeholder: "VN",
    prompt: "Undertone clue",
    evidence:
      "Used as an undertone clue, then cross-checked against the face so the report does not rely on veins alone."
  },
  {
    id: "eyes",
    title: "Eye color",
    shortTitle: "Eyes",
    placeholder: "EY",
    prompt: "Softness and clarity",
    evidence:
      "Used to notice whether the eyes look clearer with bright color or more harmonious with softened color."
  },
  {
    id: "whitePaper",
    title: "Skin against white paper",
    shortTitle: "White paper",
    placeholder: "WP",
    prompt: "White balance check",
    evidence:
      "Used to compare skin tone against a clean white reference and identify whether stark white feels supportive or harsh."
  },
  {
    id: "metals",
    title: "Gold + silver jewelry",
    shortTitle: "Metals",
    placeholder: "MT",
    prompt: "Metal harmony",
    evidence:
      "Used to compare how warm and cool metals sit against the skin before recommending jewelry direction."
  },
  {
    id: "styleReference",
    title: "Outfit or favorite color",
    shortTitle: "Style ref",
    placeholder: "ST",
    prompt: "Wardrobe translation",
    evidence:
      "Used to connect the analysis to the client's real wardrobe, favorite colors, and practical next steps."
  }
];

const SEASON_REPORTS = [
  {
    name: "Light Spring",
    family: "Spring",
    summary:
      "Light Spring colors are warm, fresh, and gently clear. These shades keep the client looking approachable, polished, and naturally bright without overwhelming their features.",
    why:
      "This result works when a client's coloring is light overall with a warm undertone and a delicate level of contrast. Colors that are too dark, heavy, or dusty can make the face look tired, while light warm colors restore brightness.",
    qualities: [
      "Warm rather than cool",
      "Light rather than deep",
      "Fresh rather than dusty",
      "Clear but gentle"
    ],
    neutrals: [
      { name: "Warm Ivory", hex: "#FFF5E6" },
      { name: "Light Camel", hex: "#CFA97A" },
      { name: "Honey Beige", hex: "#E5C79B" },
      { name: "Warm Taupe", hex: "#B8A089" },
      { name: "Soft Navy", hex: "#405C78" }
    ],
    coreColors: [
      { name: "Peach", hex: "#FFC49B" },
      { name: "Light Coral", hex: "#FF8C78" },
      { name: "Butter Yellow", hex: "#FFE680" },
      { name: "Fresh Aqua", hex: "#73D9D0" },
      { name: "Apple Green", hex: "#9ACD52" },
      { name: "Warm Pink", hex: "#F7A1A8" },
      { name: "Clear Poppy", hex: "#F45B43" }
    ],
    shoppingSwatch: [
      { name: "Ivory", hex: "#FFF5E6" },
      { name: "Light Camel", hex: "#CFA97A" },
      { name: "Peach", hex: "#FFC49B" },
      { name: "Coral", hex: "#FF8C78" },
      { name: "Butter", hex: "#FFE680" },
      { name: "Aqua", hex: "#73D9D0" },
      { name: "Mint", hex: "#A8E6C1" },
      { name: "Apple", hex: "#9ACD52" },
      { name: "Sky", hex: "#8ECFE6" },
      { name: "Warm Pink", hex: "#F7A1A8" },
      { name: "Melon", hex: "#FFA36C" },
      { name: "Soft Navy", hex: "#405C78" }
    ],
    avoid: [
      "Black and stark white",
      "Heavy charcoal or deep navy",
      "Dusty mauves and blue grays",
      "Burgundy and deep wine",
      "Mustard or muddy olive",
      "Cool icy pastels"
    ],
    guidanceHeadline: "Use color to keep the look fresh, light, and confident.",
    guidance: [
      "Keep light warm colors near the face so the overall look stays open and fresh.",
      "Use ivory, honey beige, and soft navy as easier foundations than black.",
      "Choose gold, champagne, and light warm metals before heavy antique finishes.",
      "Build outfits with low to medium contrast instead of sharp black-and-white contrast.",
      "If wearing a darker shade, balance it with a light warm color close to the face."
    ],
    pairings: [
      { label: "Ivory + Peach", colors: ["#FFF5E6", "#FFC49B"] },
      { label: "Light Camel + Aqua", colors: ["#CFA97A", "#73D9D0"] },
      { label: "Butter Yellow + Apple Green", colors: ["#FFE680", "#9ACD52"] },
      { label: "Soft Navy + Coral", colors: ["#405C78", "#FF8C78"] },
      { label: "Honey Beige + Warm Pink", colors: ["#E5C79B", "#F7A1A8"] }
    ],
    close:
      "When you stay within light, warm, and fresh colors, your appearance feels bright, polished, and easy to trust."
  },
  {
    name: "True Spring",
    family: "Spring",
    summary:
      "True Spring colors are warm, clear, and energetic. These shades create a lively, confident image while keeping the overall look friendly and professional.",
    why:
      "This result works when a client's coloring responds best to warmth, brightness, and clear color. Muddy, cool, or overly muted shades can flatten the face, while warm clear colors bring energy back into the look.",
    qualities: [
      "Warm rather than cool",
      "Clear rather than muted",
      "Bright rather than heavy",
      "Medium-light rather than deep"
    ],
    neutrals: [
      { name: "Cream", hex: "#FFF0D6" },
      { name: "Camel", hex: "#B98245" },
      { name: "Golden Tan", hex: "#C99A52" },
      { name: "Warm Brown", hex: "#7A4A24" },
      { name: "Clear Navy", hex: "#174D75" }
    ],
    coreColors: [
      { name: "Geranium", hex: "#F25A3C" },
      { name: "Clear Coral", hex: "#FF6F61" },
      { name: "Golden Yellow", hex: "#FFD23F" },
      { name: "Grass Green", hex: "#5FB344" },
      { name: "Turquoise", hex: "#00A7A7" },
      { name: "Warm Aqua", hex: "#48C9B0" },
      { name: "Clear Peach", hex: "#FFA06A" }
    ],
    shoppingSwatch: [
      { name: "Cream", hex: "#FFF0D6" },
      { name: "Camel", hex: "#B98245" },
      { name: "Geranium", hex: "#F25A3C" },
      { name: "Coral", hex: "#FF6F61" },
      { name: "Golden Yellow", hex: "#FFD23F" },
      { name: "Grass", hex: "#5FB344" },
      { name: "Leaf", hex: "#8DBF3F" },
      { name: "Turquoise", hex: "#00A7A7" },
      { name: "Warm Aqua", hex: "#48C9B0" },
      { name: "Peach", hex: "#FFA06A" },
      { name: "Tomato", hex: "#D94B2B" },
      { name: "Clear Navy", hex: "#174D75" }
    ],
    avoid: [
      "Black and optic white",
      "Cool grays and icy blues",
      "Dusty rose and muted lavender",
      "Deep burgundy or plum",
      "Ashy taupes",
      "Soft, smoky colors"
    ],
    guidanceHeadline: "Use color to create warmth, energy, and approachability.",
    guidance: [
      "Choose warm clear colors for tops, dresses, scarves, and jackets.",
      "Use cream, camel, and clear navy as stronger wardrobe foundations than black.",
      "Lean into gold, warm bronze, and polished warm metals.",
      "Medium contrast usually works well when the colors stay warm and clean.",
      "If wearing a cool color, choose the clearest version and add warmth nearby."
    ],
    pairings: [
      { label: "Cream + Geranium", colors: ["#FFF0D6", "#F25A3C"] },
      { label: "Camel + Turquoise", colors: ["#B98245", "#00A7A7"] },
      { label: "Golden Yellow + Grass Green", colors: ["#FFD23F", "#5FB344"] },
      { label: "Clear Navy + Coral", colors: ["#174D75", "#FF6F61"] },
      { label: "Warm Brown + Peach", colors: ["#7A4A24", "#FFA06A"] }
    ],
    close:
      "When you stay within warm, clear, and lively colors, your image feels energetic, confident, and naturally engaging."
  },
  {
    name: "Bright Spring",
    family: "Spring",
    summary:
      "Bright Spring colors are clear, vivid, and warm-neutral. These shades support a crisp, high-energy presence while still keeping warmth in the overall image.",
    why:
      "This result works when a client's coloring can handle brightness, contrast, and a touch of warmth. Soft muted colors can look dull, while vivid colors create clarity and intentional polish.",
    qualities: [
      "Clear rather than muted",
      "Bright rather than soft",
      "Warm-neutral rather than icy",
      "High contrast but not heavy"
    ],
    neutrals: [
      { name: "Bright White", hex: "#FFFDF5" },
      { name: "Clear Navy", hex: "#082B5F" },
      { name: "Warm Graphite", hex: "#34343A" },
      { name: "Cocoa", hex: "#5A3826" },
      { name: "Black Brown", hex: "#241814" }
    ],
    coreColors: [
      { name: "Hot Coral", hex: "#FF4F5E" },
      { name: "Watermelon", hex: "#F7336F" },
      { name: "Clear Yellow", hex: "#FFE600" },
      { name: "Bright Turquoise", hex: "#00B8C8" },
      { name: "Apple Green", hex: "#7ED321" },
      { name: "Electric Blue", hex: "#0066FF" },
      { name: "Clear Violet", hex: "#7A3DFF" }
    ],
    shoppingSwatch: [
      { name: "Bright White", hex: "#FFFDF5" },
      { name: "Black Brown", hex: "#241814" },
      { name: "Hot Coral", hex: "#FF4F5E" },
      { name: "Watermelon", hex: "#F7336F" },
      { name: "Clear Yellow", hex: "#FFE600" },
      { name: "Apple", hex: "#7ED321" },
      { name: "Turquoise", hex: "#00B8C8" },
      { name: "Electric Blue", hex: "#0066FF" },
      { name: "Violet", hex: "#7A3DFF" },
      { name: "Tangerine", hex: "#FF7A1A" },
      { name: "Lime", hex: "#B9E828" },
      { name: "Clear Navy", hex: "#082B5F" }
    ],
    avoid: [
      "Dusty or smoky colors",
      "Beige-heavy outfits",
      "Muted olive and mustard",
      "Soft pastels without contrast",
      "Grayish mauves",
      "Very dark warm earth tones"
    ],
    guidanceHeadline: "Use color to create crisp contrast and visible confidence.",
    guidance: [
      "Keep the clearest colors close to the face for the most energized effect.",
      "Use bright white, clear navy, and black brown for structure.",
      "Choose polished gold, bright silver, or mixed metals that feel clean and shiny.",
      "High contrast combinations are usually more effective than blended outfits.",
      "If wearing neutrals, add one vivid accent so the look does not fall flat."
    ],
    pairings: [
      { label: "Bright White + Hot Coral", colors: ["#FFFDF5", "#FF4F5E"] },
      { label: "Clear Navy + Clear Yellow", colors: ["#082B5F", "#FFE600"] },
      { label: "Black Brown + Turquoise", colors: ["#241814", "#00B8C8"] },
      { label: "Electric Blue + Apple Green", colors: ["#0066FF", "#7ED321"] },
      { label: "Cocoa + Watermelon", colors: ["#5A3826", "#F7336F"] }
    ],
    close:
      "When you stay within bright, clear, and warm-neutral colors, your image feels sharp, expressive, and memorable."
  },
  {
    name: "Light Summer",
    family: "Summer",
    summary:
      "Light Summer colors are cool, soft, and delicate. These shades create a calm, refined look while preserving lightness and ease.",
    why:
      "This result works when a client's coloring is light overall with a cool undertone and gentle contrast. Heavy dark colors can overpower the face, while soft cool colors keep the look balanced.",
    qualities: [
      "Cool rather than warm",
      "Light rather than deep",
      "Soft rather than bold",
      "Gentle rather than high contrast"
    ],
    neutrals: [
      { name: "Soft White", hex: "#F7F4F0" },
      { name: "Dove Gray", hex: "#B9C0C9" },
      { name: "Rose Beige", hex: "#D8C4BD" },
      { name: "Soft Navy", hex: "#566A8C" },
      { name: "Cool Taupe", hex: "#A89B98" }
    ],
    coreColors: [
      { name: "Powder Blue", hex: "#9EC5E8" },
      { name: "Periwinkle", hex: "#8EA4D2" },
      { name: "Lavender", hex: "#B8A6D9" },
      { name: "Cool Pink", hex: "#E6A0B8" },
      { name: "Soft Raspberry", hex: "#C85B7A" },
      { name: "Seafoam", hex: "#A8D8CF" },
      { name: "Icy Aqua", hex: "#BFE8EA" }
    ],
    shoppingSwatch: [
      { name: "Soft White", hex: "#F7F4F0" },
      { name: "Dove Gray", hex: "#B9C0C9" },
      { name: "Powder Blue", hex: "#9EC5E8" },
      { name: "Periwinkle", hex: "#8EA4D2" },
      { name: "Lavender", hex: "#B8A6D9" },
      { name: "Cool Pink", hex: "#E6A0B8" },
      { name: "Raspberry", hex: "#C85B7A" },
      { name: "Seafoam", hex: "#A8D8CF" },
      { name: "Icy Aqua", hex: "#BFE8EA" },
      { name: "Rose Beige", hex: "#D8C4BD" },
      { name: "Soft Navy", hex: "#566A8C" },
      { name: "Plum Mist", hex: "#8D6B8F" }
    ],
    avoid: [
      "Black and stark white",
      "Orange, rust, and terracotta",
      "Mustard and golden yellow",
      "Very bright neon colors",
      "Dark chocolate brown",
      "High-contrast black pairings"
    ],
    guidanceHeadline: "Use color to create softness, polish, and ease.",
    guidance: [
      "Keep cool light colors near the face so the look stays refined and fresh.",
      "Use soft white, dove gray, and soft navy instead of black.",
      "Choose silver, white gold, pearl, and soft cool metallic finishes.",
      "Low to medium contrast will usually look more elegant than sharp contrast.",
      "If wearing a stronger color, soften it with gray, rose beige, or soft white."
    ],
    pairings: [
      { label: "Soft White + Powder Blue", colors: ["#F7F4F0", "#9EC5E8"] },
      { label: "Dove Gray + Cool Pink", colors: ["#B9C0C9", "#E6A0B8"] },
      { label: "Soft Navy + Lavender", colors: ["#566A8C", "#B8A6D9"] },
      { label: "Rose Beige + Seafoam", colors: ["#D8C4BD", "#A8D8CF"] },
      { label: "Periwinkle + Raspberry", colors: ["#8EA4D2", "#C85B7A"] }
    ],
    close:
      "When you stay within light, cool, and soft colors, your image feels graceful, calm, and beautifully put together."
  },
  {
    name: "True Summer",
    family: "Summer",
    summary:
      "True Summer colors are cool, soft, and balanced. These shades create a composed, elegant image with clarity that does not feel harsh.",
    why:
      "This result works when a client's coloring is clearly cool and medium-soft. Warm colors can pull attention away from the face, while cool muted shades support natural harmony.",
    qualities: [
      "Cool rather than warm",
      "Soft rather than bright",
      "Medium depth rather than extreme",
      "Balanced rather than sharp"
    ],
    neutrals: [
      { name: "Soft White", hex: "#F2F0ED" },
      { name: "Cool Gray", hex: "#8D98A7" },
      { name: "Rose Taupe", hex: "#A88F93" },
      { name: "Slate Blue", hex: "#506783" },
      { name: "Blue Charcoal", hex: "#354252" }
    ],
    coreColors: [
      { name: "Rose", hex: "#C96F8B" },
      { name: "Raspberry", hex: "#A83D68" },
      { name: "Mauve", hex: "#9D7899" },
      { name: "Plum", hex: "#6E4B73" },
      { name: "Denim Blue", hex: "#4E74A6" },
      { name: "Blue Green", hex: "#4A8E95" },
      { name: "Lavender", hex: "#A99BCB" }
    ],
    shoppingSwatch: [
      { name: "Soft White", hex: "#F2F0ED" },
      { name: "Cool Gray", hex: "#8D98A7" },
      { name: "Rose Taupe", hex: "#A88F93" },
      { name: "Slate Blue", hex: "#506783" },
      { name: "Rose", hex: "#C96F8B" },
      { name: "Raspberry", hex: "#A83D68" },
      { name: "Mauve", hex: "#9D7899" },
      { name: "Plum", hex: "#6E4B73" },
      { name: "Denim", hex: "#4E74A6" },
      { name: "Blue Green", hex: "#4A8E95" },
      { name: "Lavender", hex: "#A99BCB" },
      { name: "Charcoal", hex: "#354252" }
    ],
    avoid: [
      "Orange and tomato red",
      "Golden beige and camel",
      "Mustard and chartreuse",
      "Warm chocolate brown",
      "Neon brights",
      "Stark black and white together"
    ],
    guidanceHeadline: "Use color to create elegance, calm, and consistency.",
    guidance: [
      "Keep cool muted shades near the face to support natural harmony.",
      "Use slate, cool gray, blue charcoal, and rose taupe as core neutrals.",
      "Choose silver, white gold, pewter, and pearl finishes.",
      "Medium contrast is usually strongest; avoid overly sharp combinations.",
      "If wearing a warm color, cool it down with slate, gray, or a blue-based accent."
    ],
    pairings: [
      { label: "Soft White + Rose", colors: ["#F2F0ED", "#C96F8B"] },
      { label: "Slate Blue + Raspberry", colors: ["#506783", "#A83D68"] },
      { label: "Cool Gray + Lavender", colors: ["#8D98A7", "#A99BCB"] },
      { label: "Blue Charcoal + Mauve", colors: ["#354252", "#9D7899"] },
      { label: "Rose Taupe + Blue Green", colors: ["#A88F93", "#4A8E95"] }
    ],
    close:
      "When you stay within cool, soft, and balanced colors, your image feels composed, elegant, and quietly confident."
  },
  {
    name: "Soft Summer",
    family: "Summer",
    summary:
      "Soft Summer colors are cool-neutral, muted, and refined. These shades create a polished image that feels calm, blended, and sophisticated.",
    why:
      "This result works when a client's coloring is softened by low contrast and a cool-neutral undertone. Bright or harsh colors can feel disconnected, while muted shades make the whole look more cohesive.",
    qualities: [
      "Muted rather than bright",
      "Cool-neutral rather than warm",
      "Soft rather than sharp",
      "Blended rather than high contrast"
    ],
    neutrals: [
      { name: "Soft White", hex: "#EEE8E2" },
      { name: "Mushroom", hex: "#B7AA9F" },
      { name: "Cool Taupe", hex: "#93867F" },
      { name: "Pewter", hex: "#777E83" },
      { name: "Soft Navy", hex: "#43546B" }
    ],
    coreColors: [
      { name: "Dusty Rose", hex: "#B97986" },
      { name: "Mauve", hex: "#9B748E" },
      { name: "Muted Berry", hex: "#85445E" },
      { name: "Sage", hex: "#8FA18C" },
      { name: "Soft Teal", hex: "#5E8A8B" },
      { name: "Slate Blue", hex: "#627A94" },
      { name: "Lavender Gray", hex: "#9A91A8" }
    ],
    shoppingSwatch: [
      { name: "Soft White", hex: "#EEE8E2" },
      { name: "Mushroom", hex: "#B7AA9F" },
      { name: "Taupe", hex: "#93867F" },
      { name: "Pewter", hex: "#777E83" },
      { name: "Dusty Rose", hex: "#B97986" },
      { name: "Mauve", hex: "#9B748E" },
      { name: "Berry", hex: "#85445E" },
      { name: "Sage", hex: "#8FA18C" },
      { name: "Soft Teal", hex: "#5E8A8B" },
      { name: "Slate", hex: "#627A94" },
      { name: "Lavender Gray", hex: "#9A91A8" },
      { name: "Soft Navy", hex: "#43546B" }
    ],
    avoid: [
      "Neon and highly saturated colors",
      "Sharp black and white contrast",
      "Orange and bright coral",
      "Golden camel and mustard",
      "Very clear jewel tones",
      "Heavy dark brown"
    ],
    guidanceHeadline: "Use color to create quiet polish and easy harmony.",
    guidance: [
      "Choose muted colors close to the face so the overall image feels cohesive.",
      "Use mushroom, taupe, pewter, and soft navy as everyday foundations.",
      "Choose brushed silver, pewter, rose gold, and soft metallic finishes.",
      "Low contrast combinations will usually look more expensive than sharp contrast.",
      "If wearing a brighter color, make it small and ground it with a muted neutral."
    ],
    pairings: [
      { label: "Mushroom + Dusty Rose", colors: ["#B7AA9F", "#B97986"] },
      { label: "Soft Navy + Lavender Gray", colors: ["#43546B", "#9A91A8"] },
      { label: "Pewter + Soft Teal", colors: ["#777E83", "#5E8A8B"] },
      { label: "Taupe + Muted Berry", colors: ["#93867F", "#85445E"] },
      { label: "Sage + Mauve", colors: ["#8FA18C", "#9B748E"] }
    ],
    close:
      "When you stay within cool-neutral, muted, and blended colors, your image feels refined, effortless, and intentional."
  },
  {
    name: "Soft Autumn",
    family: "Autumn",
    summary:
      "Soft Autumn colors are warm-neutral, muted, and grounded — the softest, most blended of the warm seasons. They create an approachable, quietly elegant image built on natural warmth rather than brightness.",
    why:
      "Soft Autumn lives in the quiet middle of the wheel: warm-leaning but never hot, medium in depth, and softened almost to dust. It sits between Soft Summer and True Autumn — sharing Summer's gentleness but Autumn's golden warmth. Your coloring carries that warmth without the saturation brighter seasons hold, which is why clarity reads as harshness on you. Clear, icy, or high-contrast colors sit on top of the skin and compete with it, so the face can look tired by comparison. Muted, warm, medium-value shades share the very qualities already in your skin, hair, and eyes, so they settle into the complexion instead of fighting it — and the eye reads your skin as clearer, more even, more rested.",
    qualities: [
      "Muted rather than bright",
      "Warm-neutral rather than cool",
      "Soft rather than sharp",
      "Earthy rather than icy"
    ],
    neutrals: [
      {
        name: "Cream",
        hex: "#F7E6CF",
        note:
          "Cream is the color of unbleached muslin laid in morning light, a warm off-white softened to the palest gold, its brightness powdered down rather than scrubbed white. That faint yellow cast is what matters most: a stark optic white would sit apart from you, throwing the face into shadow, while this dusty, mid-soft tone carries the same warmth your skin already holds, so the two blend and your complexion reads clearer for it. It feels generous and lived-in, a foundation more than a statement. Build your wardrobe on it, a wool coat, easy trousers, and let your warmer shades rise from this ground, brushed gold lying soft along the collarbone."
      },
      {
        name: "Warm Taupe",
        hex: "#A58F78",
        note:
          "Picture stone-ground putty held at the edge of dusk — a brown softened with grey, neither pale nor deep, dust settled over clay. It rests at the gentle middle of your palette, warm-leaning but hushed, its color sanded to the same calm already living in your skin and hair. Because nothing in it sharpens or insists, it lies alongside your complexion rather than across it, and the eye reads your face as the clearer thing. There's a worn, steady patience to it, the calm of a well-set foundation. Build outward from it — a taupe coat, slubbed linen trousers — and let your brighter shades gather and lift against that worn surface."
      },
      {
        name: "Camel",
        hex: "#B98754",
        note:
          "Camel is the nap of well-worn suede gone soft at the elbow — a golden tan warmed toward caramel, its glow lowered so nothing in it glares. The warmth runs gentle, and because it holds at the same middle depth your coloring keeps, neither pale nor deep, it lies down with your skin rather than asserting itself above it; the eye lingers on your face and finds it smooth and rested. It steadies a wardrobe the way good ground steadies a room, and there is real ease in that, an unforced comfort. Wear it broad and warm — a wrap coat, a roll-neck — and string your gentler shades from it, copper warm at the cuff."
      },
      {
        name: "Olive Gray",
        hex: "#77745F",
        note:
          "Think of the dusty green that settles over an old olive grove at midday, leaf-silver and earth pressed into one hushed tone. Olive Gray is warmth grown overcast — gold and shadow folded together until neither announces itself, sitting mid-depth and softened, never sharp. That muffled tone is its whole argument: it carries the same gentle, sun-touched neutrality your skin already holds, so rather than vying for attention it lies low against you and the face comes forward, looking clear and rested. It has the patience of weathered fieldstone. Lean on it as your everyday spine — a heavy linen overshirt, a wide trouser — and let aged bronze, dulled and dark, do the warming at the hand."
      },
      {
        name: "Espresso",
        hex: "#4B3628",
        note:
          "Espresso is the deepest note your palette allows — the color of damp loam turned over in shade, of leather worn soft at the seams — yet it stays a muted floor rather than a saturated dark, its gold dimmed under shadow rather than blazing. That dusty depth never sharpens against you; it speaks in the same gentled, earth-warm register your coloring already runs in, so the eye keeps the brown as ground and lets your face stay the lit thing above it. It feels rooted, slow-burning, sure of itself. Anchor a wardrobe in it — a heavy roll-neck, a knit drawn close at the throat — and let your softer hues hang from that steady depth."
      }
    ],
    coreColors: [
      {
        name: "Terracotta",
        hex: "#B65F3C",
        note:
          "Terracotta is the palette's boldest ember, the warm red-orange of sun-fired clay newly turned from a potter's wheel — earthen, dusted, never glaring. Its undertone tips toward gold, its depth rests easy at mid-scale, and the heat has been greyed down, so it lays against your skin like kin rather than costume. Where a clear scarlet would shout over your face, this softened clay moves in step with the warmth your complexion already carries, and the eye reads your skin as warmer and more even. It holds a settled, unforced certainty. Wear it close — a roll-neck or raw silk top — and finish with copper at the wrist."
      },
      {
        name: "Muted Coral",
        hex: "#C97862",
        note:
          "Picture the inside of a terracotta vessel left out in late-day sun, its red mellowed to a dusty rose. Muted Coral holds that softened warmth, warm-neutral and unhurried, resting at mid-depth with its glow gentled rather than vivid. Brought up near your face, it answers the soft gold the skin carries, and because nothing in it sharpens, the garment settles back and your complexion is what the eye lands on, even and rested. The feeling is tender, a little worn-in, more confidence than display. Wear it as a brushed cotton tee or raw-silk blouse over a taupe base, lit at the ear by brushed gold."
      },
      {
        name: "Moss",
        hex: "#6F7F45",
        note:
          "Moss is the green of a forest floor after rain has dulled its shine — a yellow-green gone soft, more dried thyme than emerald. Its warmth is the gold of cured grass, not the chill of pine, and that greyed-down, mid-weight depth is its gift: it shares the dusty, sun-touched tones already pooled in your skin and hair, so the fabric recedes and your face becomes the thing the eye rests on, even and unshadowed. There's a foraged, walked-in calm to it, earth under the nails. Layer it as a roll-neck near the jaw, paired with weathered linen, and clasp aged bronze at the throat."
      },
      {
        name: "Sage",
        hex: "#98A678",
        note:
          "Sage is green held under cloud cover — the grey-green of a bay leaf rubbed between the fingers, of lichen on a north-facing stone. Its warmth is real but kept low, more cool-grey than gold, the brightness gone to dust; it rests at the gentle middle depth your coloring already keeps. Worn close, its hushed cast lies so near the tones in your skin that the eye loosens its hold on the fabric and finds your face the calmer, more even thing. There is a tended, herbal stillness in it. Layer it at the throat in slubbed linen or a roll-neck, set off by aged brass."
      },
      {
        name: "Soft Teal",
        hex: "#4F7F78",
        note:
          "Picture pondwater glimpsed through reeds, a blue-green gone soft and greyed at the edges — the palette's coolest note, yet warmed from within so it never tips into ice. Because the blue is dimmed rather than vivid and it holds at a middle depth, it reads as a gentle echo of your warm-neutral coloring rather than a rival to it; the fabric recedes, your face takes the light, and the skin's soft gold answers the teal's calm. There is a contemplative, sea-glass stillness in it. Take it near the face — a slubbed linen shirt, a draped silk scarf — and let brushed bronze close it at the wrist."
      },
      {
        name: "Warm Rose",
        hex: "#B16E6A",
        note:
          "Picture a brick wall holding the day's warmth after the sun has gone — that dusty, clayed-down rose, its pink steadied by mineral and grit so it never rings bright. The warmth in it tilts the same faint gold your skin carries, and held at a middle depth with the color softened rather than saturated, it lies along your complexion as kin rather than contrast; your face becomes the thing the eye keeps, even and gently lit. It wears a worn, tender composure. Take it to the throat in a roll-neck or raw silk, and let copper at the wrist warm it through."
      },
      {
        name: "Muted Mustard",
        hex: "#B9953D",
        note:
          "Think of pollen settled into worn wool, or turmeric pressed into raw silk — gold rubbed down to a low, dusty glow. Its warmth nods toward the faint golden cue your eye already reads as health in your skin, never shouting past it; and because the hue is gentled and the depth sits mid-range, it lays against your complexion like a held breath, the two warmths dissolving into one so your face, not the cloth, holds the eye. There's an earthen optimism here, lamplit and unhurried. Take it near the jaw in a fine knit or a loose roll-neck, lit by espresso and aged brass."
      }
    ],
    shoppingSwatch: [
      { name: "Cream", hex: "#F7E6CF" },
      { name: "Warm Taupe", hex: "#A58F78" },
      { name: "Camel", hex: "#B98754" },
      { name: "Olive Gray", hex: "#77745F" },
      { name: "Terracotta", hex: "#B65F3C" },
      { name: "Muted Coral", hex: "#C97862" },
      { name: "Moss", hex: "#6F7F45" },
      { name: "Sage", hex: "#98A678" },
      { name: "Soft Teal", hex: "#4F7F78" },
      { name: "Warm Rose", hex: "#B16E6A" },
      { name: "Mustard", hex: "#B9953D" },
      { name: "Espresso", hex: "#4B3628" }
    ],
    avoid: [
      "Black and stark white",
      "Icy pastels",
      "Neon or very clear colors",
      "Blue-based red and fuchsia",
      "Cool charcoal gray",
      "Sharp silver-heavy combinations"
    ],
    guidanceHeadline: "Use color to create warmth, ease, and natural polish.",
    guidance: [
      "Keep muted warm colors near the face so the look stays grounded and approachable.",
      "Use cream, camel, warm taupe, olive, and espresso as core neutrals.",
      "Choose brushed gold, bronze, copper, and soft warm metals.",
      "Low to medium contrast usually feels more harmonious than sharp contrast.",
      "If wearing a cool color, choose a softened teal or sage rather than icy blue."
    ],
    pairings: [
      { label: "Cream + Terracotta", colors: ["#F7E6CF", "#B65F3C"] },
      { label: "Camel + Soft Teal", colors: ["#B98754", "#4F7F78"] },
      { label: "Olive Gray + Warm Rose", colors: ["#77745F", "#B16E6A"] },
      { label: "Espresso + Sage", colors: ["#4B3628", "#98A678"] },
      { label: "Warm Taupe + Muted Coral", colors: ["#A58F78", "#C97862"] }
    ],
    close:
      "When you stay within warm-neutral, muted, and earthy colors, your image feels grounded, warm, and quietly refined."
  },
  {
    name: "True Autumn",
    family: "Autumn",
    summary:
      "True Autumn colors are warm, rich, and earthy. These shades create a grounded, confident image with depth and approachability.",
    why:
      "This result works when a client's coloring is clearly warm and responds well to richness. Cool, icy, or gray colors can drain warmth from the face, while golden earth tones bring it forward.",
    qualities: [
      "Warm rather than cool",
      "Rich rather than pale",
      "Earthy rather than icy",
      "Golden rather than blue-based"
    ],
    neutrals: [
      { name: "Ivory", hex: "#F4E4C8" },
      { name: "Camel", hex: "#A97134" },
      { name: "Warm Brown", hex: "#6B3E1E" },
      { name: "Olive", hex: "#596A2E" },
      { name: "Chocolate", hex: "#3B2417" }
    ],
    coreColors: [
      { name: "Rust", hex: "#A9451E" },
      { name: "Pumpkin", hex: "#C76524" },
      { name: "Mustard", hex: "#B8860B" },
      { name: "Goldenrod", hex: "#D29B22" },
      { name: "Moss Green", hex: "#647A2F" },
      { name: "Warm Teal", hex: "#006C67" },
      { name: "Warm Burgundy", hex: "#7A2E2A" }
    ],
    shoppingSwatch: [
      { name: "Ivory", hex: "#F4E4C8" },
      { name: "Camel", hex: "#A97134" },
      { name: "Warm Brown", hex: "#6B3E1E" },
      { name: "Chocolate", hex: "#3B2417" },
      { name: "Rust", hex: "#A9451E" },
      { name: "Pumpkin", hex: "#C76524" },
      { name: "Mustard", hex: "#B8860B" },
      { name: "Goldenrod", hex: "#D29B22" },
      { name: "Moss", hex: "#647A2F" },
      { name: "Olive", hex: "#596A2E" },
      { name: "Warm Teal", hex: "#006C67" },
      { name: "Burgundy", hex: "#7A2E2A" }
    ],
    avoid: [
      "Black and pure white",
      "Cool gray and icy blue",
      "Fuchsia and blue-based pink",
      "Pastel lavender",
      "Bright neon colors",
      "Silver-heavy cool palettes"
    ],
    guidanceHeadline: "Use color to create warmth, authority, and approachability.",
    guidance: [
      "Keep golden earth tones close to the face to strengthen warmth and presence.",
      "Use ivory, camel, olive, warm brown, and chocolate as dependable foundations.",
      "Choose gold, bronze, copper, and antique warm metals.",
      "Medium contrast works well when both colors stay warm and rich.",
      "If wearing blue, choose warm teal or peacock rather than icy blue."
    ],
    pairings: [
      { label: "Ivory + Rust", colors: ["#F4E4C8", "#A9451E"] },
      { label: "Camel + Warm Teal", colors: ["#A97134", "#006C67"] },
      { label: "Chocolate + Goldenrod", colors: ["#3B2417", "#D29B22"] },
      { label: "Olive + Pumpkin", colors: ["#596A2E", "#C76524"] },
      { label: "Warm Brown + Burgundy", colors: ["#6B3E1E", "#7A2E2A"] }
    ],
    close:
      "When you stay within warm, rich, and earthy colors, your image feels grounded, confident, and naturally authoritative."
  },
  {
    name: "Dark Autumn",
    family: "Autumn",
    summary:
      "Dark Autumn colors are warm-neutral, deep, and rich. These shades create a strong, polished image with warmth, depth, and authority.",
    why:
      "This result works when a client's coloring has depth first, supported by warmth. Pale, cool, or dusty colors can reduce presence, while deep warm colors add structure and impact.",
    qualities: [
      "Deep rather than light",
      "Warm-neutral rather than icy",
      "Rich rather than dusty",
      "Strong but grounded"
    ],
    neutrals: [
      { name: "Cream", hex: "#F1DFC2" },
      { name: "Dark Chocolate", hex: "#2F1B12" },
      { name: "Espresso", hex: "#1D1511" },
      { name: "Olive Black", hex: "#252A1A" },
      { name: "Warm Navy", hex: "#123044" }
    ],
    coreColors: [
      { name: "Burnt Orange", hex: "#B4491E" },
      { name: "Deep Teal", hex: "#00545A" },
      { name: "Forest Green", hex: "#1F4A2E" },
      { name: "Aubergine", hex: "#4A2636" },
      { name: "Oxblood", hex: "#681F25" },
      { name: "Antique Gold", hex: "#B8872D" },
      { name: "Mahogany", hex: "#5B241A" }
    ],
    shoppingSwatch: [
      { name: "Cream", hex: "#F1DFC2" },
      { name: "Chocolate", hex: "#2F1B12" },
      { name: "Espresso", hex: "#1D1511" },
      { name: "Olive Black", hex: "#252A1A" },
      { name: "Burnt Orange", hex: "#B4491E" },
      { name: "Deep Teal", hex: "#00545A" },
      { name: "Forest", hex: "#1F4A2E" },
      { name: "Aubergine", hex: "#4A2636" },
      { name: "Oxblood", hex: "#681F25" },
      { name: "Antique Gold", hex: "#B8872D" },
      { name: "Mahogany", hex: "#5B241A" },
      { name: "Warm Navy", hex: "#123044" }
    ],
    avoid: [
      "Icy white and icy pastels",
      "Cool gray and blue charcoal",
      "Light powder colors",
      "Bright fuchsia and cobalt",
      "Soft dusty colors",
      "Delicate low-contrast palettes"
    ],
    guidanceHeadline: "Use color to create depth, warmth, and executive presence.",
    guidance: [
      "Keep deep warm colors close to the face for the strongest presence.",
      "Use espresso, dark chocolate, olive black, and warm navy as power neutrals.",
      "Choose antique gold, bronze, copper, and dark warm metals.",
      "Medium to high contrast works when the palette stays deep and warm.",
      "If wearing a lighter color, ground it with a dark warm neutral."
    ],
    pairings: [
      { label: "Cream + Oxblood", colors: ["#F1DFC2", "#681F25"] },
      { label: "Espresso + Antique Gold", colors: ["#1D1511", "#B8872D"] },
      { label: "Warm Navy + Burnt Orange", colors: ["#123044", "#B4491E"] },
      { label: "Forest Green + Mahogany", colors: ["#1F4A2E", "#5B241A"] },
      { label: "Olive Black + Deep Teal", colors: ["#252A1A", "#00545A"] }
    ],
    close:
      "When you stay within deep, warm-neutral, and rich colors, your image feels strong, polished, and grounded."
  },
  {
    name: "Bright Winter",
    family: "Winter",
    summary:
      "Bright Winter colors are cool-neutral, vivid, and high contrast. These shades create a crisp, memorable image with strong visual clarity.",
    why:
      "This result works when a client's coloring can carry brightness and contrast with a cool-neutral undertone. Muted colors can look flat, while vivid cool colors sharpen the face and overall presence.",
    qualities: [
      "Bright rather than muted",
      "Cool-neutral rather than warm",
      "Clear rather than dusty",
      "High contrast rather than blended"
    ],
    neutrals: [
      { name: "Black", hex: "#050505" },
      { name: "Optic White", hex: "#FFFFFF" },
      { name: "Icy Gray", hex: "#DDE4EA" },
      { name: "Charcoal", hex: "#2C3038" },
      { name: "Midnight Navy", hex: "#071B3A" }
    ],
    coreColors: [
      { name: "Shocking Pink", hex: "#E4007C" },
      { name: "Cobalt", hex: "#0047FF" },
      { name: "Emerald", hex: "#009B77" },
      { name: "Clear Purple", hex: "#662D91" },
      { name: "Icy Lemon", hex: "#F7FF6A" },
      { name: "True Red", hex: "#D71920" },
      { name: "Bright Turquoise", hex: "#00AEEF" }
    ],
    shoppingSwatch: [
      { name: "Optic White", hex: "#FFFFFF" },
      { name: "Black", hex: "#050505" },
      { name: "Icy Gray", hex: "#DDE4EA" },
      { name: "Midnight", hex: "#071B3A" },
      { name: "Pink", hex: "#E4007C" },
      { name: "Cobalt", hex: "#0047FF" },
      { name: "Emerald", hex: "#009B77" },
      { name: "Purple", hex: "#662D91" },
      { name: "Icy Lemon", hex: "#F7FF6A" },
      { name: "True Red", hex: "#D71920" },
      { name: "Turquoise", hex: "#00AEEF" },
      { name: "Charcoal", hex: "#2C3038" }
    ],
    avoid: [
      "Muted earth tones",
      "Camel, tan, and mustard",
      "Dusty rose and smoky mauve",
      "Soft beige palettes",
      "Warm orange",
      "Low-contrast blended outfits"
    ],
    guidanceHeadline: "Use color to create visible clarity and sharp confidence.",
    guidance: [
      "Keep vivid cool-neutral colors close to the face for the strongest effect.",
      "Use black, optic white, charcoal, and midnight navy as crisp foundations.",
      "Choose silver, white gold, platinum, or very polished mixed metals.",
      "High contrast combinations are usually more effective than soft blends.",
      "If wearing a neutral outfit, add one clear bright accent near the face."
    ],
    pairings: [
      { label: "Black + Optic White", colors: ["#050505", "#FFFFFF"] },
      { label: "Midnight Navy + Shocking Pink", colors: ["#071B3A", "#E4007C"] },
      { label: "Charcoal + Icy Lemon", colors: ["#2C3038", "#F7FF6A"] },
      { label: "Cobalt + Emerald", colors: ["#0047FF", "#009B77"] },
      { label: "True Red + Bright Turquoise", colors: ["#D71920", "#00AEEF"] }
    ],
    close:
      "When you stay within bright, cool-neutral, and high-contrast colors, your image feels crisp, clear, and unforgettable."
  },
  {
    name: "True Winter",
    family: "Winter",
    summary:
      "True Winter colors are cool, clear, and high contrast. These shades create a precise, polished image with authority and clarity.",
    why:
      "This result works when a client's coloring is clearly cool and can handle strong contrast. Warm or muted colors can soften the impact too much, while cool clear colors sharpen the overall look.",
    qualities: [
      "Cool rather than warm",
      "Clear rather than muted",
      "High contrast rather than blended",
      "Sharp rather than soft"
    ],
    neutrals: [
      { name: "Black", hex: "#000000" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Cool Gray", hex: "#777F8C" },
      { name: "Navy", hex: "#061A40" },
      { name: "Charcoal", hex: "#252A32" }
    ],
    coreColors: [
      { name: "Blue Red", hex: "#B5002A" },
      { name: "Royal Blue", hex: "#003DA5" },
      { name: "Emerald", hex: "#007A53" },
      { name: "Fuchsia", hex: "#C4007A" },
      { name: "Icy Pink", hex: "#F6C7D8" },
      { name: "Icy Blue", hex: "#CDEBFF" },
      { name: "Royal Purple", hex: "#4B1D83" }
    ],
    shoppingSwatch: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Cool Gray", hex: "#777F8C" },
      { name: "Navy", hex: "#061A40" },
      { name: "Blue Red", hex: "#B5002A" },
      { name: "Royal Blue", hex: "#003DA5" },
      { name: "Emerald", hex: "#007A53" },
      { name: "Fuchsia", hex: "#C4007A" },
      { name: "Icy Pink", hex: "#F6C7D8" },
      { name: "Icy Blue", hex: "#CDEBFF" },
      { name: "Purple", hex: "#4B1D83" },
      { name: "Charcoal", hex: "#252A32" }
    ],
    avoid: [
      "Orange, rust, and terracotta",
      "Camel, beige, and mustard",
      "Warm brown",
      "Dusty muted colors",
      "Cream instead of white",
      "Soft low-contrast palettes"
    ],
    guidanceHeadline: "Use color to create precision, polish, and authority.",
    guidance: [
      "Keep cool clear colors close to the face so the overall image stays sharp.",
      "Use black, pure white, navy, charcoal, and cool gray as key neutrals.",
      "Choose silver, white gold, platinum, and high-shine cool metals.",
      "High contrast outfits will usually look stronger than tonal blends.",
      "If wearing a softer color, make it icy and pair it with a strong neutral."
    ],
    pairings: [
      { label: "Black + Pure White", colors: ["#000000", "#FFFFFF"] },
      { label: "Navy + Blue Red", colors: ["#061A40", "#B5002A"] },
      { label: "Cool Gray + Fuchsia", colors: ["#777F8C", "#C4007A"] },
      { label: "Royal Blue + Icy Pink", colors: ["#003DA5", "#F6C7D8"] },
      { label: "Charcoal + Emerald", colors: ["#252A32", "#007A53"] }
    ],
    close:
      "When you stay within cool, clear, and high-contrast colors, your image feels polished, precise, and confidently present."
  },
  {
    name: "Deep Winter",
    family: "Winter",
    summary:
      "Deep Winter colors are cool, deep, and clear. These shades support natural contrast, sharpen presence, and help the client look intentional without extra effort.",
    why:
      "This result works when a client's natural coloring has depth, contrast, and a cool undertone. Strong saturated colors bring balance to the face, while warm, soft, or muted colors can blur features and reduce impact.",
    qualities: [
      "Cool rather than warm",
      "Deep rather than light",
      "Clear rather than muted",
      "Strong rather than blended"
    ],
    neutrals: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#2B2B2B" },
      { name: "Cool Navy", hex: "#0B1F3A" },
      { name: "Deep Cool Gray", hex: "#3A3A3A" },
      { name: "Cool Espresso", hex: "#2A1F1F" }
    ],
    coreColors: [
      { name: "True Red", hex: "#B11226" },
      { name: "Cranberry", hex: "#8A1538" },
      { name: "Deep Emerald", hex: "#005F56" },
      { name: "Blue-Based Teal", hex: "#003F44" },
      { name: "Royal Purple", hex: "#3B1C4A" },
      { name: "Cobalt Blue", hex: "#0033A0" },
      { name: "Fuchsia", hex: "#A1006B" }
    ],
    shoppingSwatch: [
      { name: "Icy White", hex: "#FBFBFB" },
      { name: "Black", hex: "#161618" },
      { name: "Cool Slate", hex: "#2E4664" },
      { name: "Cobalt", hex: "#07569C" },
      { name: "Blue Teal", hex: "#00697D" },
      { name: "Emerald", hex: "#20664B" },
      { name: "Berry", hex: "#983F50" },
      { name: "Magenta", hex: "#B6245D" },
      { name: "Plum", hex: "#602C5F" },
      { name: "Aubergine", hex: "#471D45" },
      { name: "Rose", hex: "#F1C6CE" },
      { name: "Cool Taupe", hex: "#A2999A" }
    ],
    avoid: [
      "Warm browns and tans",
      "Mustard, rust, and terracotta",
      "Peach, coral, and apricot",
      "Soft pastels",
      "Dusty or muted shades",
      "Gold-heavy earth tones"
    ],
    guidanceHeadline: "Use color to create clarity and confidence.",
    guidance: [
      "Keep the strongest colors close to the face: tops, dresses, jackets, scarves, and headwear.",
      "Use black, cool navy, and charcoal as a clean foundation for the wardrobe.",
      "Choose silver, white gold, and platinum metals before yellow gold.",
      "High-contrast outfits will usually work better than blended, low-contrast looks.",
      "If wearing a less flattering color, keep it lower on the body or use it as a small accent."
    ],
    pairings: [
      { label: "Black + Icy White", colors: ["#161618", "#FBFBFB"] },
      { label: "Cool Navy + True Red", colors: ["#0B1F3A", "#B11226"] },
      { label: "Deep Emerald + Royal Purple", colors: ["#005F56", "#3B1C4A"] },
      { label: "Charcoal + Fuchsia", colors: ["#2B2B2B", "#A1006B"] },
      { label: "Blue Teal + Cranberry", colors: ["#003F44", "#8A1538"] }
    ],
    close:
      "When you stay within cool, deep, and clear colors, your appearance stays consistent, polished, and confident."
  }
];

// Credibility section — "why you are this season, and not the near-misses."
// Funke specifically wanted the report to lead up to why a client is X and not Y,
// since some clients arrive unsure they believe their result.
const WHY_NOT = {
  "Light Spring": {
    lead: "Your coloring is light and warm with delicate contrast, so the result is shaped as much by what overwhelms you as by what suits you.",
    points: [
      "Not a Winter — deep, cool, high-contrast colors sit heavy on you and pull the light from your face.",
      "Not a Light Summer — that near-twin is cool; your skin, hair, and eyes carry a warm, golden cast rather than an ashy one.",
      "Not muted — dusty, greyed shades flatten your natural freshness. You need clarity, just kept gentle."
    ]
  },
  "True Spring": {
    lead: "Your coloring is decidedly warm and clear, holding bright color with ease.",
    points: [
      "Not a Winter — cool, blue-based colors fight your golden warmth.",
      "Not a True Autumn — you share the warmth, but muted, earthy shades dim you where clear ones light you up.",
      "Not soft — greyed pastels wash you out; saturation is your friend."
    ]
  },
  "Bright Spring": {
    lead: "Your coloring is warm and high in clarity — it can carry vivid, saturated color most seasons cannot.",
    points: [
      "Not a Bright Winter — you share the brightness, but yours is warm; icy, blue-based brights cool your face.",
      "Not soft or muted — dusty shades erase your natural vibrancy.",
      "Not deep — heavy darks overpower your fresh warmth."
    ]
  },
  "Light Summer": {
    lead: "Your coloring is light, cool, and softly blended.",
    points: [
      "Not a Light Spring — that near-twin is warm; your undertone is cool and rosy, not golden.",
      "Not a Winter — deep, stark contrast overwhelms your delicate coloring.",
      "Not warm or earthy — golden, rusty shades clash with your cool softness."
    ]
  },
  "True Summer": {
    lead: "Your coloring is cool and soft, harmonized rather than high-contrast.",
    points: [
      "Not a Winter — stark, icy clarity is too sharp; your colors want softening.",
      "Not warm — golden and earthy tones pull against your cool undertone.",
      "Not bright — saturated, clear color competes with your gentle features."
    ]
  },
  "Soft Summer": {
    lead: "Your coloring is muted and medium in depth, leaning cool.",
    points: [
      "Not a Soft Autumn — you share the softness, but your undertone leans cool, not warm; earthy gold tips you toward sallow.",
      "Not a True Summer — you are even more muted; clear cool color is slightly too bright on you.",
      "Not bright or deep — clarity and heavy darkness both overpower your blended softness."
    ]
  },
  "Soft Autumn": {
    lead: "Reading the right season is as much about ruling out the near-misses as naming the match. Here is why the others were set aside for you.",
    points: [
      "Not a Soft Summer — your nearest neighbor shares the same softness, but its undertone runs cool. On you, the warmth in your skin, hair, and eyes is unmistakable, and cool-grey colors leave you looking faintly drained.",
      "Not a True or Deep Autumn — you share their warmth, but not their richness. Fully saturated, heavy earth tones overpower your gentler features instead of settling with them.",
      "Not a Bright or Clear season — clarity reads as harshness on you. Icy, neon, and high-contrast colors sit on top of the face and compete with it, where your softened, warm-neutral palette blends in and lets you come forward."
    ]
  },
  "True Autumn": {
    lead: "Your coloring is clearly warm and can hold rich, earthy color.",
    points: [
      "Not a Soft Autumn — you share the warmth, but you carry full richness where that season needs everything softened.",
      "Not a Winter — cool, icy, blue-based colors drain the gold from your skin.",
      "Not light or muted-pale — washed-out shades undersell your natural depth."
    ]
  },
  "Dark Autumn": {
    lead: "Your coloring is deep and warm, holding strong, dark color with ease.",
    points: [
      "Not a Deep Winter — your nearest deep neighbor is cool; your darkness carries warmth, and icy colors look slightly severe on you.",
      "Not light or soft — pale, delicate shades disappear against your depth.",
      "Not bright — neon clarity fights your earthy richness."
    ]
  },
  "Bright Winter": {
    lead: "Your coloring is cool and high in clarity, carrying vivid, icy color.",
    points: [
      "Not a Bright Spring — you share the brightness, but yours is cool; warm, golden brights pull against your undertone.",
      "Not soft or muted — dusty shades flatten your natural sparkle.",
      "Not warm or earthy — gold-based colors disrupt your cool clarity."
    ]
  },
  "True Winter": {
    lead: "Your coloring is cool, deep, and clear, balanced by genuine contrast.",
    points: [
      "Not a True Summer — you share the coolness, but stark clarity suits you where softness suits them.",
      "Not warm — golden and earthy tones clash with your cool depth.",
      "Not muted — dusty, blended color blurs your natural definition."
    ]
  },
  "Deep Winter": {
    lead: "Your coloring has depth and contrast with a cool undertone, so it holds strong, saturated color.",
    points: [
      "Not a Dark Autumn — your nearest deep neighbor is warm; your depth is cool, and golden earth tones drain you.",
      "Not warm, soft, or muted — dusty, earthy shades blur your features and reduce your impact.",
      "Not light — pale, delicate color is overpowered by your natural contrast."
    ]
  }
};

// Funke's own client-email philosophy: best colors matter most near the face;
// the lower half of the body has freedom. Universal across all seasons.
const FACE_GUIDANCE = {
  headline: "Where your colors matter most",
  body: "Your palette does its most important work near your face — tops, dresses, jackets, scarves, and headwear are where the right colors make your skin look clearer and your features more defined. Below the waist you have freedom: trousers, skirts, shoes, and bags can sit outside your palette without losing the effect. Keep the pieces that frame your face in-palette, and the rest follows."
};

let selectedSeasonName = DEFAULT_SEASON;
let activePhotoSlot = "headshot";
let clientPhotos = createEmptyPhotoState();

const els = {};

function createEmptyPhotoState() {
  return INTAKE_SLOTS.reduce((state, slot) => {
    state[slot.id] = null;
    return state;
  }, {});
}

function init() {
  [
    "clientName",
    "reportDate",
    "intakeSlots",
    "photoInput",
    "photoZoom",
    "photoX",
    "photoY",
    "zoomValue",
    "xValue",
    "yValue",
    "personalNote",
    "seasonSelect",
    "seasonWorkspace",
    "workspaceTitle",
    "workspaceSummary",
    "workspacePhoto",
    "workspaceIntakeStrip",
    "workspaceSeasonLabel",
    "workspaceFamilyLabel",
    "reportContent",
    "previewStatus",
    "refreshReport",
    "loadSample",
    "exportPdf"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });

  els.reportDate.value = todayForInput();
  renderIntakeSlots();
  bindEvents();
  renderSeasonSelect();
  renderReport();

  const params = new URLSearchParams(window.location.search);
  if (params.get("sample") === "1") {
    loadSampleReport();
  }
}

function bindEvents() {
  [els.clientName, els.reportDate, els.personalNote].forEach((input) => {
    input.addEventListener("input", renderReport);
  });

  [els.photoZoom, els.photoX, els.photoY].forEach((input) => {
    input.addEventListener("input", () => {
      syncPhotoVars();
      renderIntakeSlots();
      renderReport();
    });
  });

  els.seasonSelect.addEventListener("change", () => {
    selectedSeasonName = els.seasonSelect.value;
    renderReport();
  });

  els.intakeSlots.addEventListener("click", (event) => {
    const upload = event.target.closest("[data-slot]");
    if (!upload) return;
    activePhotoSlot = upload.dataset.slot;
    els.photoInput.click();
  });

  els.photoInput.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) handlePhoto(file, activePhotoSlot);
    event.target.value = "";
  });

  els.intakeSlots.addEventListener("dragover", (event) => {
    const upload = event.target.closest("[data-slot]");
    if (!upload) return;
    event.preventDefault();
    upload.classList.add("is-dragging");
  });

  els.intakeSlots.addEventListener("dragleave", (event) => {
    const upload = event.target.closest("[data-slot]");
    if (!upload) return;
    upload.classList.remove("is-dragging");
  });

  els.intakeSlots.addEventListener("drop", (event) => {
    const upload = event.target.closest("[data-slot]");
    if (!upload) return;
    event.preventDefault();
    upload.classList.remove("is-dragging");
    const file = event.dataTransfer.files && event.dataTransfer.files[0];
    if (file) handlePhoto(file, upload.dataset.slot);
  });

  els.refreshReport.addEventListener("click", renderReport);
  els.loadSample.addEventListener("click", loadSampleReport);
  els.exportPdf.addEventListener("click", () => window.print());

  document.addEventListener("click", (event) => {
    const command = event.target.closest("[data-command]");
    if (!command) return;
    const action = command.dataset.command;
    if (action === "load-sample") loadSampleReport();
    if (action === "refresh-report") renderReport();
    if (action === "export-pdf") window.print();
    if (action === "download-swatch") downloadShoppingSwatch(getSelectedReport());
  });
}

function todayForInput() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function getSelectedReport() {
  return SEASON_REPORTS.find((report) => report.name === selectedSeasonName) || SEASON_REPORTS.find((report) => report.name === DEFAULT_SEASON);
}

function syncPhotoVars() {
  document.documentElement.style.setProperty("--photo-zoom", els.photoZoom.value);
  document.documentElement.style.setProperty("--photo-x", `${els.photoX.value}%`);
  document.documentElement.style.setProperty("--photo-y", `${els.photoY.value}%`);
  els.zoomValue.textContent = `${Number(els.photoZoom.value).toFixed(1)}x`;
  els.xValue.textContent = `${els.photoX.value}%`;
  els.yValue.textContent = `${els.photoY.value}%`;
}

function handlePhoto(file, slotId = "headshot") {
  const reader = new FileReader();
  reader.onload = (event) => {
    clientPhotos[slotId] = event.target.result;
    renderIntakeSlots();
    renderReport();
  };
  reader.readAsDataURL(file);
}

function renderIntakeSlots() {
  if (!els.intakeSlots) return;
  els.intakeSlots.innerHTML = INTAKE_SLOTS.map((slot, index) => {
    const image = clientPhotos[slot.id];
    return `
      <button class="intake-slot ${image ? "has-image" : ""}" type="button" data-slot="${slot.id}">
        <span class="intake-slot-thumb">
          ${image ? `<img src="${image}" alt="">` : `<b>${slot.placeholder}</b>`}
        </span>
        <span class="intake-slot-copy">
          <strong>${index + 1}. ${escapeHTML(slot.title)}</strong>
          <em>${escapeHTML(slot.prompt)}</em>
        </span>
      </button>
    `;
  }).join("");
}

function renderWorkspaceIntakeStrip() {
  els.workspaceIntakeStrip.innerHTML = INTAKE_SLOTS.map((slot) => `
    <span class="workspace-intake-dot ${clientPhotos[slot.id] ? "is-filled" : ""}" title="${escapeHTML(slot.title)}">
      ${escapeHTML(slot.shortTitle)}
    </span>
  `).join("");
}

function renderSeasonSelect() {
  const families = ["Spring", "Summer", "Autumn", "Winter"];
  els.seasonSelect.innerHTML = families.map((family) => {
    const options = SEASON_REPORTS
      .filter((report) => report.family === family)
      .map((report) => `<option value="${escapeHTML(report.name)}">${escapeHTML(report.name)}</option>`)
      .join("");
    return `<optgroup label="${escapeHTML(family)}">${options}</optgroup>`;
  }).join("");
  els.seasonSelect.value = selectedSeasonName;
}

function renderWorkspace(report, name, photoMarkup, hasPrimaryPhoto) {
  els.workspaceTitle.textContent = report.name;
  els.workspaceSummary.textContent = report.summary;
  els.previewStatus.textContent = `${report.name} Active`;
  els.workspaceSeasonLabel.textContent = report.name;
  els.workspaceFamilyLabel.textContent = `${report.family} report`;
  els.workspacePhoto.style.setProperty("--drape", report.shoppingSwatch[1]?.hex || "#f0dfcc");
  els.workspacePhoto.innerHTML = `
    <div class="client-cutout ${hasPrimaryPhoto ? "has-image" : ""}">
      ${photoMarkup}
    </div>
  `;
  renderWorkspaceIntakeStrip();

  els.seasonWorkspace.innerHTML = `
    <div class="workspace-title-row">
      <div>
        <h3>${escapeHTML(report.name)} Report</h3>
        <p>${escapeHTML(report.summary)}</p>
      </div>
    </div>

    <section class="workspace-section">
      <h3>Phone Shopping Swatch</h3>
      <div class="mini-swatch-grid">
        ${report.shoppingSwatch.map((color) => `
          <span class="mini-swatch" style="--swatch:${color.hex}" title="${escapeHTML(color.name)}"></span>
        `).join("")}
      </div>
    </section>

    <section class="workspace-section two-up-preview">
      <div>
        <h3>Best Qualities</h3>
        <ul class="workspace-list">
          ${report.qualities.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
      </div>
      <div>
        <h3>Core Neutrals</h3>
        <div class="neutral-chip-row">
          ${report.neutrals.map((color) => `
            <span class="neutral-chip">
              <i style="--swatch:${color.hex}"></i>${escapeHTML(color.name)}
            </span>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function getReferenceInterpretation(report, slot) {
  const coreQualities = report.qualities.slice(0, 3).join(", ").toLowerCase();
  const strongestNeutrals = report.neutrals.slice(0, 3).map((color) => color.name).join(", ");

  const interpretations = {
    headshot:
      `This is the anchor image. It helps confirm whether ${report.name} supports the face through ${coreQualities}, and whether the color sits behind the person instead of competing with them.`,
    wrist:
      "Veins are treated as a clue, not the final answer. This reference helps Funke compare undertone against the face so the recommendation is grounded in the whole client, not one isolated detail.",
    eyes:
      `The eye reference helps read softness, clarity, and depth. For ${report.name}, the goal is color that makes the eyes feel present without forcing the client into the wrong brightness level.`,
    whitePaper:
      `The white-paper image checks how stark white behaves against the skin. It helps decide whether the client needs clean white, softened white, ivory, or a deeper neutral family like ${strongestNeutrals}.`,
    metals:
      `The gold-and-silver comparison shows which metal temperature feels more harmonious. This supports the jewelry, glasses, buttons, hardware, and accessory guidance in the final report.`,
    styleReference:
      `This image turns the result into real life. Funke can connect the ${report.name} palette to the client's current wardrobe, favorite colors, and the colors they should keep, adapt, or use carefully.`
  };

  return interpretations[slot.id] || slot.evidence;
}

function renderReferenceCards(report) {
  return INTAKE_SLOTS.map((slot) => {
    const image = clientPhotos[slot.id];
    return `
      <article class="reference-card">
        <div class="reference-image ${image ? "has-image" : ""}">
          ${image ? `<img src="${image}" alt="${escapeHTML(slot.title)} reference">` : `<b>${escapeHTML(slot.placeholder)}</b>`}
        </div>
        <div class="reference-copy">
          <span>${escapeHTML(slot.shortTitle)}</span>
          <h3>${escapeHTML(slot.title)}</h3>
          <p>${escapeHTML(getReferenceInterpretation(report, slot))}</p>
        </div>
      </article>
    `;
  }).join("");
}

function loadSampleReport() {
  selectedSeasonName = DEFAULT_SEASON;
  activePhotoSlot = "headshot";
  clientPhotos = createEmptyPhotoState();
  els.clientName.value = "Sample Client";
  els.reportDate.value = todayForInput();
  els.photoZoom.value = "1.2";
  els.photoX.value = "0";
  els.photoY.value = "0";
  els.personalNote.value =
    "Reference review: the strongest colors should stay near the face, while softer or lighter shades can support the outfit as accents. Use the headshot as the anchor, then cross-check undertone, eye clarity, paper contrast, metal harmony, and the client's current style direction before finalizing the recommendation.";
  syncPhotoVars();
  renderSeasonSelect();
  renderIntakeSlots();
  renderReport();
}

function renderReport() {
  syncPhotoVars();
  renderIntakeSlots();

  const report = getSelectedReport();
  const name = els.clientName.value.trim() || "Client Name";
  const date = formatDate(els.reportDate.value);
  const note = els.personalNote.value.trim();
  const initials = getInitials(name);
  const primaryPhoto = clientPhotos.headshot;
  const photoMarkup = primaryPhoto
    ? `<img src="${primaryPhoto}" alt="${escapeHTML(name)}">`
    : `<span>${escapeHTML(initials)}</span>`;
  const hasPrimaryPhoto = Boolean(primaryPhoto);

  document.title = `${report.name} Report Preview | Funke Roberts`;
  els.seasonSelect.value = report.name;
  renderWorkspace(report, name, photoMarkup, hasPrimaryPhoto);

  els.reportContent.innerHTML = `
    <div class="page cover-page">
      <div class="page-inner cover-grid">
        <div>
        <img class="report-logo" src="${LOGO_URL}" alt="Funke Roberts">
        <p class="report-kicker">Personal Color Analysis</p>
        <h1>${escapeHTML(report.name)}</h1>
        <p class="report-lede">
          Clear actionable guidance to help ${escapeHTML(name)} choose colors with
          more confidence, consistency, and presence, based on a six-image reference review.
        </p>
        <div class="report-meta">
          <span>Client: ${escapeHTML(name)}</span>
          <span>Date: ${escapeHTML(date)}</span>
          <span>Season Result: ${escapeHTML(report.name)}</span>
          <span>Reference Images: 6-part intake</span>
        </div>
        </div>
        <div class="client-photo-frame ${hasPrimaryPhoto ? "has-image" : ""}">
          ${photoMarkup}
        </div>
      </div>
    </div>

    <div class="page">
      <div class="page-inner">
      <p class="report-kicker">Season Result</p>
      <div class="result-band">
        <div>
          <span>Your season is</span>
          <strong>${escapeHTML(report.name)}</strong>
        </div>
        <div class="result-wheel" style="--wheel:${colorWheel(report.shoppingSwatch)}" aria-hidden="true"></div>
      </div>

      <div class="two-column">
        <section class="info-block">
          <h2>Why ${escapeHTML(report.name)} Works</h2>
          <p>${escapeHTML(report.why)}</p>
          <p class="analysis-followup">
            The season result becomes strongest when the image evidence points in the same direction: the face, eyes, undertone clues, contrast check, metal comparison, and style reference all help confirm which color qualities should lead.
          </p>
        </section>
        <section class="info-block">
          <h2>Best Color Qualities</h2>
          <ul class="quality-list">
            ${report.qualities.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
          </ul>
        </section>
      </div>

      ${renderWhyNot(report)}

      <section class="palette-section">
        <h2>Best Neutrals</h2>
        <div class="palette-grid">
          ${renderSwatches(report.neutrals)}
        </div>
      </section>

      <section class="palette-section">
        <h2>Best Core Colors</h2>
        <div class="palette-grid">
          ${renderSwatches(report.coreColors)}
        </div>
      </section>

      <aside class="face-guidance">
        <h3>${escapeHTML(FACE_GUIDANCE.headline)}</h3>
        <p>${escapeHTML(FACE_GUIDANCE.body)}</p>
      </aside>
      </div>
    </div>

    <div class="page">
      <div class="page-inner shopping-page">
      <section class="phone-card">
        <p class="report-kicker">Shopping Swatch</p>
        <h3>${escapeHTML(report.name)}</h3>
        <p>Save this to your phone and compare it with clothing in natural light. (Screens hold color truer than home printers.)</p>
        <div class="phone-grid">
          ${report.shoppingSwatch.map((color) => `<span class="phone-swatch" style="--swatch:${color.hex}" title="${escapeHTML(color.name)}"></span>`).join("")}
        </div>
        <button class="swatch-download-btn" type="button" data-command="download-swatch">⬇ Save swatch to phone</button>
      </section>

      <section>
        <p class="report-kicker">Styling Guidance</p>
        <h2>${escapeHTML(report.guidanceHeadline)}</h2>
        <ul class="guidance-list">
          ${report.guidance.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>

        <div class="palette-section">
          <h3>Suggested Pairings</h3>
          <div class="pairings">
            ${report.pairings.map((pair) => `
              <div class="pairing">
                <span class="pair-dot" style="--swatch:${pair.colors[0]}"></span>
                <span class="pair-dot" style="--swatch:${pair.colors[1]}"></span>
                <strong>${escapeHTML(pair.label)}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      </div>
    </div>

    <div class="page">
      <div class="page-inner">
      <p class="report-kicker">Personal Direction</p>
      <h2>How to use this result</h2>
      <div class="two-column">
        <section class="info-block">
          <h3>Colors to avoid or use carefully</h3>
          <ul class="guidance-list">
            ${report.avoid.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
          </ul>
        </section>
        <section class="note-block">
          <h3>Personalized note</h3>
          <p>${escapeHTML(note || "Use this space for Funke's client-specific observations and practical next steps.")}</p>
        </section>
      </div>

      <section class="info-block palette-section">
        <h3>Final reminder</h3>
        <p>${escapeHTML(report.close)}</p>
      </section>

      <footer class="brand-close">
        <div>
          <p class="report-kicker">Funke Roberts Image Solutions</p>
          <span>The right image opens doors.</span>
        </div>
        <img src="${LOGO_URL}" alt="Funke Roberts">
      </footer>
      </div>
    </div>
  `;
}

function renderSwatches(colors) {
  const annotated = colors.some((color) => color.note);
  if (annotated) {
    return colors.map((color) => {
      const light = isLightColor(color.hex) ? "light-chip" : "";
      return `
        <div class="annot-swatch">
          <span class="annot-chip ${light}" style="--swatch:${color.hex}"></span>
          <div class="annot-body">
            <div class="annot-head">
              <strong>${escapeHTML(color.name)}</strong>
              <span class="annot-hex">${escapeHTML(color.hex)}</span>
            </div>
            ${color.note ? `<p class="annot-note">${escapeHTML(color.note)}</p>` : ""}
          </div>
        </div>
      `;
    }).join("");
  }
  return colors.map((color) => {
    const light = isLightColor(color.hex) ? "light-label" : "";
    return `
      <div class="color-swatch ${light}" style="--swatch:${color.hex}">
        <strong>${escapeHTML(color.name)}</strong>
        <span>${escapeHTML(color.hex)}</span>
      </div>
    `;
  }).join("");
}

function renderWhyNot(report) {
  const data = WHY_NOT[report.name];
  if (!data) return "";
  return `
    <section class="why-not">
      <h2>Why ${escapeHTML(report.name)} &mdash; and not the others</h2>
      <p class="why-not-lead">${escapeHTML(data.lead)}</p>
      <ul class="why-not-list">
        ${data.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}
      </ul>
    </section>
  `;
}

// Renders the 12-color shopping swatch to a phone-friendly PNG the client can
// save and shop with. Funke was emphatic: it should live on the phone, not be
// printed, because home printers distort the colors.
async function downloadShoppingSwatch(report) {
  const colors = report.shoppingSwatch || [];
  const W = 720;
  const pad = 40;
  const cols = 3;
  const gap = 16;
  const cellW = Math.floor((W - pad * 2 - gap * (cols - 1)) / cols);
  const blockH = 132;
  const labelH = 48;
  const cellH = blockH + labelH;
  const rows = Math.ceil(colors.length / cols) || 1;
  const headerH = 172;
  const footerH = 92;
  const gridH = rows * cellH + (rows - 1) * gap;
  const H = pad + headerH + gridH + footerH + pad;

  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}

  ctx.fillStyle = "#fdf8f3";
  ctx.fillRect(0, 0, W, H);

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#c85510";
  ctx.font = "600 13px 'IBM Plex Mono', ui-monospace, monospace";
  ctx.fillText("FUNKE ROBERTS  ·  PERSONAL COLOR ANALYSIS", pad, pad + 16);
  ctx.fillStyle = "#23120a";
  ctx.font = "600 46px 'Fraunces', Georgia, serif";
  ctx.fillText(report.name, pad, pad + 70);
  ctx.fillStyle = "#5c4430";
  ctx.font = "400 16px 'Lora', Georgia, serif";
  ctx.fillText("Shopping swatch — match pieces worn near your face to these colors.", pad, pad + 104);
  ctx.strokeStyle = "rgba(35,18,10,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, pad + headerH - 26);
  ctx.lineTo(W - pad, pad + headerH - 26);
  ctx.stroke();

  const gridTop = pad + headerH;
  colors.forEach((color, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const x = pad + c * (cellW + gap);
    const y = gridTop + r * (cellH + gap);
    roundRectPath(ctx, x, y, cellW, blockH, 8);
    ctx.fillStyle = color.hex;
    ctx.fill();
    ctx.strokeStyle = "rgba(35,18,10,0.14)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#23120a";
    ctx.font = "600 16px 'Fraunces', Georgia, serif";
    ctx.fillText(truncateText(ctx, color.name, cellW), x, y + blockH + 24);
    ctx.fillStyle = "#c85510";
    ctx.font = "600 12px 'IBM Plex Mono', ui-monospace, monospace";
    ctx.fillText(color.hex.toUpperCase(), x, y + blockH + 42);
  });

  const dividerY = gridTop + gridH + 30;
  ctx.strokeStyle = "rgba(35,18,10,0.18)";
  ctx.beginPath();
  ctx.moveTo(pad, dividerY);
  ctx.lineTo(W - pad, dividerY);
  ctx.stroke();
  ctx.fillStyle = "#23120a";
  ctx.font = "italic 400 17px 'Lora', Georgia, serif";
  ctx.fillText("The right image opens doors.", pad, dividerY + 34);
  ctx.fillStyle = "#5c4430";
  ctx.font = "600 11px 'IBM Plex Mono', ui-monospace, monospace";
  const site = "FUNKEROBERTS.COM";
  ctx.fillText(site, W - pad - ctx.measureText(site).width, dividerY + 33);

  const link = document.createElement("a");
  link.download = `${report.name.replace(/\s+/g, "-").toLowerCase()}-shopping-swatch.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function truncateText(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + "…").width > maxWidth) t = t.slice(0, -1);
  return t + "…";
}

function colorWheel(colors) {
  const segments = colors.map((color, index) => {
    const start = Math.round((index / colors.length) * 100);
    const end = Math.round(((index + 1) / colors.length) * 100);
    return `${color.hex} ${start}% ${end}%`;
  });
  return `conic-gradient(${segments.join(", ")})`;
}

function isLightColor(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 178;
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "SC";
}

function formatDate(value) {
  if (!value) return "Date";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", init);
