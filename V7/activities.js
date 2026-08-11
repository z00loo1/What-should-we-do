// What Should We Do? — data (v11)
// Tailored for Arya: a sound 6-year-old German Shepherd, beginner handler.
// Split model: CATEGORIES holds everything shared within a type; ACTIVITIES holds what's unique.

const CATEGORIES = {
  "Sniff": {
    "color": "#c8862f",
    "tint": "#f6ecda",
    "blurb": "Nose-led searching that taps the breed's tracking heritage.",
    "why": "German Shepherds were bred to work with their nose — tracking and detection are jobs the breed genuinely excels at. Letting Arya search puts that hardware to use, and a good sniff session leaves a working dog satisfyingly tired in the head rather than wound up.",
    "frame": [
      "Set up the search while Arya waits somewhere she cannot watch every placement.",
      "Give one clear search cue, then stay mostly quiet and let her investigate independently.",
      "When she finishes, praise her, check that nothing was missed, and pick up the setup."
    ],
    "proTips": [
      "Let her nose lead and don't help too early — a Shepherd enjoys working the problem out.",
      "Use part of a normal meal so a food-motivated working dog stays keen without extra calories.",
      "A scatter search is a great way to bring her down after anything high-energy."
    ],
    "easier": "Use fewer items and make the hiding places obvious or partially visible.",
    "senior": "Keep the search area smaller and place finds at comfortable nose height.",
    "gsd": "Nosework plays straight to a Shepherd's tracking instincts — one of the fastest ways to tire a smart one out."
  },
  "Think": {
    "color": "#6a5acd",
    "tint": "#ece9f8",
    "blurb": "Puzzles that give a big working brain a legitimate job.",
    "why": "German Shepherds are among the most problem-solving breeds around, which is a gift and a liability: an under-worked one invents its own jobs, usually ones you won't like. Puzzles give that brain something legal to chew on, and at 6 Arya has the patience to really work a problem.",
    "frame": [
      "Prepare the puzzle before bringing Arya over. Keep the first attempt simple enough that she can succeed.",
      "Let her experiment with her nose and paws. Give her several seconds to think before offering help.",
      "End the game when the reward is gone or interest drops, and remove all non-dog-safe materials."
    ],
    "proTips": [
      "Give her room to try — a Shepherd will nose and paw through a puzzle if you don't rush in.",
      "Step the difficulty up as she solves things; this breed gets bored by easy wins fast.",
      "End while she's still keen so she comes back to the next one switched on."
    ],
    "easier": "Simplify the setup and leave the reward easier to access so Arya gets an early win.",
    "senior": "Use lighter, easier-to-move materials and avoid setups that require hard pawing or bending.",
    "gsd": "A thinking Shepherd is a calmer Shepherd — daily brain work is the best boredom-buster for the breed."
  },
  "Train": {
    "color": "#1f8f86",
    "tint": "#dcf0ee",
    "blurb": "Short reward-based reps — the breed's home turf.",
    "why": "This is what German Shepherds were built for: learning cues from a handler and working as a team, which is why they fill police, service, and sport roles. Short reward-based reps scratch that partnership itch, build your bond, and hand a beginner an easy, confidence-building win with a dog that wants to get it right.",
    "frame": [
      "Start in a quiet area with several pea-sized treats ready and Arya focused on you.",
      "Repeat in short sets of 3–5 successful attempts, pausing briefly between sets.",
      "Finish with an easy success. As she understands the behavior, reduce luring and rely more on the verbal cue."
    ],
    "proTips": [
      "Keep rewards tiny and rate them high — a keen Shepherd will happily do lots of quick reps.",
      "Mark the exact instant she's right; this breed reads your timing well.",
      "A minute or two several times a day beats one long drill for keeping her sharp."
    ],
    "easier": "Stand close, use a lure if needed, and reward the first small approximation of the behavior.",
    "senior": "Use fewer repetitions and avoid positions or movements that look physically uncomfortable.",
    "gsd": "Training is a job to a Shepherd, not a chore — most of the breed lights up the second you start."
  },
  "Play": {
    "color": "#d94f36",
    "tint": "#f8e3dd",
    "blurb": "Movement and chase with an off-switch built in.",
    "why": "Play gives a Shepherd's herding and chase drive a legal outlet, so it comes out in a game instead of on the vacuum or a passing bike. The built-in pauses teach the off-switch this driven breed needs. At 6 and sound she's an athletic adult in her prime — a little warm-up before fast turns keeps a big-framed dog comfortable.",
    "frame": [
      "Clear enough space for safe movement and decide on one simple rule before starting.",
      "Pause the game periodically and ask for a brief calm behavior before restarting.",
      "Finish while Arya still wants more, then put the toy away so the game stays valuable."
    ],
    "proTips": [
      "Build in stop-and-settle breaks — teaching a Shepherd to switch off matters as much as the game.",
      "Trade access to the game as the reward; a drivey dog will work for another throw.",
      "If she tips into frantic, pause — over-arousal is common in the breed and worth heading off."
    ],
    "easier": "Shorten the round and remove any obedience requirement except one easy cue.",
    "senior": "Reduce speed, sharp turns, jumping, and repeated acceleration; emphasize searching or gentle interaction.",
    "gsd": "Games that start and stop on your cue turn herding drive into a manners tool — big for this breed."
  },
  "Chill": {
    "color": "#6f8f5f",
    "tint": "#e6ede0",
    "blurb": "Rewarding calm so a high-drive dog learns to power down.",
    "why": "Shepherds run hot and bond hard, and a switched-on working dog doesn't always know how to power down on its own. Rewarding calm teaches Arya that settling is its own kind of good job, which lowers the everyday arousal that gets big, driven breeds into trouble.",
    "frame": [
      "Choose a quiet spot and remove anything likely to make Arya immediately excited.",
      "Keep interaction low-key and notice the first signs of relaxation: slower movement, softer posture, lying down, or steady sniffing.",
      "End calmly rather than switching immediately into rough play or high-energy fetch."
    ],
    "proTips": [
      "Keep your voice and movements low — a sensitive Shepherd mirrors your energy.",
      "Reward calm slowly and quietly so you don't switch her back on.",
      "A settle session after sniff or play helps a high-drive dog actually come down."
    ],
    "easier": "Shorten the session and reward calm behavior more frequently.",
    "senior": "Keep the setup comfortable and let Arya change position whenever she wants.",
    "gsd": "Teaching a Shepherd an off-switch is one of the most valuable things you can do for the breed."
  }
};

const RATINGS = {
  "🟢": {
    "label": "Green — normal supervision",
    "note": "Normal supervision is fine."
  },
  "🟡": {
    "label": "Yellow — stay close",
    "note": "Stay nearby and take away anything she starts to chew apart."
  },
  "🔴": {
    "label": "Red — active supervision",
    "note": "Watch the whole time. Arya likes to chew, so stop the moment she tries to swallow anything that isn't food."
  }
};

const CATEGORY_ORDER = ["Sniff","Think","Train","Play","Chill"];

const ACTIVITIES = [
  {"id":1,"title":"Treasure Room","category":"Sniff","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Have Arya wait outside one room. Hide 8–12 treats at nose level or lower, then bring her in and say “Find it!” Let her work without pointing.","harder":"Hide fewer treats in trickier places.","level":"Easy","who":"Solo"},
  {"id":2,"title":"Backyard Scatter","category":"Sniff","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Kibble or treats","action":"Scatter a portion of Arya’s food across a patch of grass. Release her to sniff out every piece.","harder":"Use a wider area or toss into slightly taller grass.","level":"Easy","who":"Solo"},
  {"id":3,"title":"Find the Ball","category":"Sniff","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"Favorite ball","action":"Let Arya smell the ball, have her wait, then hide it somewhere accessible. Release her with “Find your ball!”","harder":"Hide it in another room.","level":"Easy","who":"Solo"},
  {"id":4,"title":"Scent Trail","category":"Sniff","minutes":15,"where":"Backyard","food":true,"rating":"🟢","gear":"Treats","action":"While Arya is inside, drag a smelly treat along the ground for 30–50 feet and leave a jackpot at the end. Start her at the trail.","harder":"Add turns and short gaps in the trail.","level":"Easy","who":"Solo"},
  {"id":5,"title":"Which Hand?","category":"Sniff","minutes":5,"where":"Inside","food":true,"rating":"🟢","gear":"One treat","action":"Hide a treat in one closed fist. Present both fists and wait for Arya to clearly investigate one. Open the correct hand and reward.","harder":"Delay the reward until she gives a deliberate nose touch.","level":"Easy","who":"Solo"},
  {"id":6,"title":"Cup Sniff","category":"Sniff","minutes":10,"where":"Inside","food":true,"rating":"🟡","gear":"3 sturdy cups, treats","action":"Place a treat under one of three cups while Arya watches. Let her indicate the correct cup with her nose.","harder":"Move the cups after hiding the treat.","level":"Easy","who":"Solo"},
  {"id":7,"title":"Toy Lineup","category":"Sniff","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"3–5 toys","action":"Put several toys in a row. Rub your hands on one chosen toy, mix them up, then encourage Arya to investigate. Reward interest in the target.","harder":"Have someone else handle the target toy.","level":"Easy","who":"Solo"},
  {"id":8,"title":"Find Me","category":"Sniff","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Have Arya wait with another person. Hide somewhere in the house, then have them release her with “Find her!” Reward enthusiastically when she finds you.","harder":"Choose a harder hiding place.","level":"Easy","who":"2 people"},
  {"id":9,"title":"Treat Tree","category":"Sniff","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Treats","action":"Place tiny treats around safe, reachable spots in the yard—near a tree base, beside planters, under leaves. Let Arya search.","harder":"Spread the search across the whole yard.","level":"Easy","who":"Solo"},
  {"id":10,"title":"Ball Trail","category":"Sniff","minutes":10,"where":"Backyard","food":false,"rating":"🟢","gear":"Ball","action":"Walk a winding path through the yard carrying Arya’s ball, then hide it at the end. Bring her to the start and ask her to find it.","harder":"Make the path cross itself.","level":"Easy","who":"Solo"},
  {"id":11,"title":"Two-Room Hunt","category":"Sniff","minutes":15,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Hide treats across two rooms while Arya waits. Let her clear both rooms at her own pace.","harder":"Add a third room.","level":"Easy","who":"Solo"},
  {"id":12,"title":"Where’s Tug?","category":"Sniff","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"Tug toy","action":"Hide the tug toy, release Arya to find it, then immediately reward the find with a short tug session.","harder":"Use a new hiding spot each round.","level":"Easy","who":"Solo"},
  {"id":13,"title":"Towel Burrito","category":"Think","minutes":10,"where":"Inside","food":true,"rating":"🔴","gear":"Old towel, treats","action":"Sprinkle treats along a towel and loosely roll it. Let Arya figure out how to unroll it. Remove the towel when the food is gone.","harder":"Fold one section before rolling. Stop if she starts eating fabric.","level":"Moderate","who":"Solo"},
  {"id":14,"title":"Muffin Hunt","category":"Think","minutes":10,"where":"Inside","food":true,"rating":"🟡","gear":"Muffin tin, balls, treats","action":"Put treats in several muffin cups and cover some with toy balls. Arya has to move the balls to reach the food.","harder":"Cover every cup, but only bait some.","level":"Moderate","who":"Solo"},
  {"id":15,"title":"Box Detective","category":"Think","minutes":10,"where":"Inside","food":true,"rating":"🔴","gear":"4–6 cardboard boxes, treats","action":"Spread open boxes around the room and bait two or three. Tell Arya “Find it!” and let her solve which boxes pay.","harder":"Loosely fold the flaps. Remove cardboard if she starts swallowing it.","level":"Moderate","who":"Solo"},
  {"id":16,"title":"Nested Box","category":"Think","minutes":15,"where":"Inside","food":true,"rating":"🔴","gear":"2–3 cardboard boxes, treats","action":"Put treats in a small open box and place it inside progressively larger open boxes. Let Arya work inward.","harder":"Loosely close one set of flaps. No tape, staples or plastic.","level":"Moderate","who":"Solo"},
  {"id":17,"title":"Under the Bowl","category":"Think","minutes":5,"where":"Inside","food":true,"rating":"🟡","gear":"2–3 unbreakable bowls, treat","action":"Hide a treat under one upside-down bowl. Let Arya work out how to move or indicate it.","harder":"Add another empty bowl.","level":"Easy","who":"Solo"},
  {"id":18,"title":"Toy Obstacle","category":"Think","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"Ball, household furniture","action":"Place Arya’s ball where she can see it but must walk around a safe obstacle to reach it. Encourage her to solve the route.","harder":"Create a slightly more complex route without trapping her.","level":"Moderate","who":"Solo"},
  {"id":19,"title":"Choice Game","category":"Think","minutes":5,"where":"Inside","food":true,"rating":"🟢","gear":"Two toys, treats","action":"Hold out two different toys. Reward Arya for deliberately choosing one, then repeat. Watch whether she develops a preference.","harder":"Give each toy a name and start asking for one.","level":"Easy","who":"Solo"},
  {"id":20,"title":"Cardboard Demolition","category":"Think","minutes":15,"where":"Backyard","food":true,"rating":"🔴","gear":"Plain cardboard box, treats","action":"Put treats inside a plain cardboard box with loosely folded flaps and let Arya tear it open under active supervision.","harder":"Put a smaller plain box inside. Stop if she eats pieces.","level":"Moderate","who":"Solo"},
  {"id":21,"title":"Ball in a Box","category":"Think","minutes":10,"where":"Inside","food":false,"rating":"🟡","gear":"Open box, ball","action":"Drop Arya’s ball into an open box and let her figure out how to retrieve it.","harder":"Use a taller box that is still safe and easy to tip.","level":"Moderate","who":"Solo"},
  {"id":22,"title":"Food Parcel","category":"Think","minutes":10,"where":"Inside","food":true,"rating":"🔴","gear":"Packing paper, cardboard box, treats","action":"Loosely crumple plain paper around treats inside an open box. Let Arya nose through it.","harder":"Use more paper. Supervise so paper is not eaten.","level":"Moderate","who":"Solo"},
  {"id":23,"title":"Touch","category":"Train","minutes":5,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Hold out your open palm a few inches from Arya’s nose. The moment she touches it, mark with “Yes!” and reward. Repeat.","harder":"Move your hand to different positions.","level":"Easy","who":"Solo"},
  {"id":24,"title":"Place","category":"Train","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Dog bed or mat, treats","action":"Lure Arya onto her bed or mat, mark and reward. Add the cue “Place” as she starts understanding the game.","harder":"Take one step away before rewarding her for staying.","level":"Moderate","who":"Solo"},
  {"id":25,"title":"Toy Names","category":"Train","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Ball and tug toy, treats","action":"Pick one toy. Say its name, encourage Arya to interact with it, then reward. Keep the session focused on that single name.","harder":"Put two toys down and ask for the named one.","level":"Moderate","who":"Solo"},
  {"id":26,"title":"Clean Up","category":"Train","minutes":15,"where":"Inside","food":true,"rating":"🟢","gear":"Toys, open basket, treats","action":"Reward Arya for picking up a toy. Then hold the basket underneath and reward when the toy drops inside. Gradually add “Clean up.”","harder":"Move the basket farther away.","level":"Moderate","who":"Solo"},
  {"id":27,"title":"Wait for It","category":"Train","minutes":5,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Put a treat in your open palm. Close your hand if Arya dives for it; open it when she backs off. Release with “Okay.”","harder":"Increase the wait by a few seconds.","level":"Easy","who":"Solo"},
  {"id":28,"title":"Leave It","category":"Train","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Low-value and high-value treats","action":"Cover a low-value treat with your hand. Reward Arya from the other hand when she disengages. Add “Leave it.”","harder":"Practice with a toy instead of food.","level":"Moderate","who":"Solo"},
  {"id":29,"title":"Back Up","category":"Train","minutes":5,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Stand facing Arya and gently step toward her. Mark and reward the instant she takes a step backward. Add “Back.”","harder":"Build to three or four steps.","level":"Easy","who":"Solo"},
  {"id":30,"title":"Around","category":"Train","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Safe tree/chair, treats","action":"Lure Arya around a safe object and back to you. Mark and reward, then add the cue “Around.”","harder":"Send her from farther away.","level":"Moderate","who":"Solo"},
  {"id":31,"title":"Middle","category":"Train","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Lure Arya from behind you to stand between your legs facing forward. Reward heavily and add “Middle.”","harder":"Take a few steps together.","level":"Moderate","who":"Solo"},
  {"id":32,"title":"Down at Distance","category":"Train","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Treats","action":"Practice “Down” close to Arya, then gradually take a half-step farther away before giving the cue.","harder":"Increase distance slowly; reward fast responses.","level":"Moderate","who":"Solo"},
  {"id":33,"title":"Tug With Rules","category":"Play","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"Tug toy","action":"Play tug, but build in “Take it,” “Drop,” and a brief “Wait.” Restarting the game is the reward for listening.","harder":"Ask for a sit before restarting.","level":"Easy","who":"Solo"},
  {"id":34,"title":"Fetch With Jobs","category":"Play","minutes":15,"where":"Backyard","food":true,"rating":"🟢","gear":"Ball, treats","action":"Before each throw, ask Arya for one easy behavior—sit, down, touch or wait. Then release her to chase the ball.","harder":"Ask for two behaviors before a throw.","level":"Easy","who":"Solo"},
  {"id":35,"title":"Hide-and-Seek Ball","category":"Play","minutes":15,"where":"Backyard","food":false,"rating":"🟢","gear":"Ball","action":"Instead of throwing the ball, have Arya wait while you place it somewhere in the yard. Release her to search.","harder":"Hide it behind an object rather than in plain sight.","level":"Easy","who":"Solo"},
  {"id":36,"title":"Recall Ping-Pong","category":"Play","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Two people, treats","action":"Stand apart and take turns calling Arya. Reward when she reaches each person. Keep it fast and upbeat.","harder":"Increase the distance.","level":"Easy","who":"2 people"},
  {"id":37,"title":"Chase Me","category":"Play","minutes":5,"where":"Backyard","food":false,"rating":"🟢","gear":"None","action":"Get Arya’s attention and run away from her for a few seconds. Let her catch you, praise her, then reset. Never chase her.","harder":"Add a recall cue before you run.","level":"Easy","who":"Solo"},
  {"id":38,"title":"Tug Search","category":"Play","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"Tug toy","action":"Hide the tug toy nearby. When Arya finds it, immediately play tug for 20–30 seconds. Hide it again.","harder":"Make each hiding spot harder.","level":"Easy","who":"Solo"},
  {"id":39,"title":"Ball Direction Game","category":"Play","minutes":10,"where":"Backyard","food":false,"rating":"🟢","gear":"2 balls","action":"Place two balls several yards apart. Send Arya toward one, then the other, using your body and pointing to guide her.","harder":"Increase the spacing.","level":"Easy","who":"Solo"},
  {"id":40,"title":"Stop-and-Go Fetch","category":"Play","minutes":10,"where":"Backyard","food":false,"rating":"🟢","gear":"Ball","action":"Mix fetch with short pauses. Ask for calm eye contact or a sit before the next throw so excitement has an off-switch.","harder":"Lengthen the calm pause.","level":"Easy","who":"Solo"},
  {"id":41,"title":"Follow the Leader","category":"Play","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Treats","action":"Walk unpredictable loops, turns and direction changes around the yard. Reward Arya for noticing and following you.","harder":"Add stops, sits and hand targets.","level":"Easy","who":"Solo"},
  {"id":42,"title":"Toy Trade","category":"Play","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Two toys, treats","action":"Play with one toy, then offer the second and reward Arya for releasing the first. Alternate toys so giving something up predicts more fun.","harder":"Use the verbal cue “Trade.”","level":"Easy","who":"Solo"},
  {"id":43,"title":"The Nothing Game","category":"Chill","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Sit quietly with Arya. Do not ask for behaviors. Calmly place a treat between her paws whenever she independently relaxes, lies down or settles.","harder":"Increase the time between rewards.","level":"Easy","who":"Solo"},
  {"id":44,"title":"Chew and Settle","category":"Chill","minutes":20,"where":"Inside","food":false,"rating":"🟢","gear":"Safe chew toy","action":"Give Arya an appropriate chew in her normal resting area. Keep the environment quiet and let chewing be the activity.","harder":"Pair it with a consistent settle cue.","level":"Moderate","who":"Solo"},
  {"id":45,"title":"Slow Sniff Scatter","category":"Chill","minutes":15,"where":"Backyard","food":true,"rating":"🟢","gear":"Small treats or kibble","action":"Scatter many tiny pieces over a modest patch of grass so Arya has to search slowly rather than race.","harder":"Spread the pieces farther apart.","level":"Easy","who":"Solo"},
  {"id":46,"title":"Massage and Check-In","category":"Chill","minutes":10,"where":"Inside","food":false,"rating":"🟢","gear":"None","action":"Sit with Arya and give slow shoulder, chest and back strokes where she enjoys being touched. Pause periodically and see whether she asks for more.","harder":"Practice calm handling of paws and ears only if she is comfortable.","level":"Easy","who":"Solo"},
  {"id":47,"title":"Mat Relaxation","category":"Chill","minutes":15,"where":"Inside","food":true,"rating":"🟢","gear":"Mat/bed, treats","action":"Reward Arya for choosing to lie on her mat. Deliver treats slowly between her paws rather than exciting her with hand feeding.","harder":"Gradually increase the time between treats.","level":"Easy","who":"Solo"},
  {"id":48,"title":"Quiet Watch","category":"Chill","minutes":10,"where":"Backyard","food":true,"rating":"🟢","gear":"Treats","action":"Sit outside together. Reward Arya for calmly observing ordinary sounds or movement without needing to investigate everything.","harder":"Wait for longer calm periods before rewarding.","level":"Easy","who":"Solo"},
  {"id":49,"title":"Easy Find-It","category":"Chill","minutes":10,"where":"Inside","food":true,"rating":"🟢","gear":"Treats","action":"Place treats in easy-to-find locations around one room. Let Arya sniff at an unhurried pace with minimal direction.","harder":"Make only one or two hides moderately difficult.","level":"Easy","who":"Solo"},
  {"id":50,"title":"Toy Settle","category":"Chill","minutes":15,"where":"Inside","food":false,"rating":"🟢","gear":"Favorite chew toy","action":"Invite Arya onto her bed with a favorite chew toy. Sit nearby and keep interaction low-key.","harder":"Step away briefly while she remains settled.","level":"Easy","who":"Solo"},
];

function mergeActivity(a){
  const c = CATEGORIES[a.category];
  return {
    ...a,
    color: c.color, tint: c.tint, blurb: c.blurb, why: c.why, gsd: c.gsd,
    instructions: [c.frame[0], a.action, c.frame[1], c.frame[2]],
    proTips: c.proTips, easier: c.easier, senior: c.senior,
    ratingLabel: RATINGS[a.rating].label, ratingNote: RATINGS[a.rating].note,
  };
}
