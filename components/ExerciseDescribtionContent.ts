export interface ExerciseDescribtion {
  image: string;
  title: string;
  paragraphs: string[];
}

const list: ExerciseDescribtion[] = [
  {
    image: "/squat.png",
    title: "Squat",
    paragraphs: [
      "Standing in a shoulder-width stance with feet slightly pointed out, rest a loaded barbell across the back of your shoulders holding it with an overhand grip.",
      "Descend into a squat position by pushing your hips back and bending at the knee. At the bottom of the squat, pause, and then drive your hips upward bringing you back to starting position.",
    ],
  },
  {
    image: "/RDL.png",
    title: "RDL'S (Stiff leg deadlift)",
    paragraphs: [
      "The stiff-legged deadlift strengthens the adductors, core, gluteus maximus and hip flexors as well as the muscles of the middle and upper back.",
      "If the deadlift is done properly, the musculature of the lower back will also reap the rewards, particularly the erector spinae muscles, which run parallel to the spine.",
    ],
  },
  {
    image: "/bench.png",
    title: "Flat bench press",
    paragraphs: [
      "Lie on the bench with your eyes under the bar",
      "Grab the bar with a medium grip-width (thumbs around the bar!)",
      "Unrack the bar by straightening your arms",
      "Lower the bar to your mid-chest",
      "Press the bar back up until your arms are straight.",
    ],
  },
  {
    image: "/row.png",
    title: "Bent over rows",
    paragraphs: [
      "Stand with your feet at shoulder width and legs slightly bent.",
      "Bend over so that your back is parallel to the ground and hold the bar",
      "with palms facing up, arms straight.",
      "Pull the bar up towards your lower chest. Pause.",
      "Lower barbell returning to starting position.",
      "Keep your back straight at all times.",
    ],
  },
  {
    image: "/latpulldown.png",
    title: "Lat pulldown",
    paragraphs: [
      "Grasp the bar using a shoulder-width grip with your arms extended straight overhead.",
      "Leading with the elbows, pull the bar down in front to the top of your chest, bending at the elbows.",
      "Straighten your arms fully, returning the bar to the top position.",
    ],
  },
  {
    image: "/shrugs.png",
    title: "Barbell shrugs",
    paragraphs: [
      "Stand and hold a barbell with both hands in front of you at arms length, with your hands slightly wider than shoulder width apart.",
      "Begin by raising your shoulders up as far as possible, pause, and then return to the starting position.",
    ],
  },
];

export default list;
