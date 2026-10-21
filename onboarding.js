(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const positions = [
    ["Goalkeeper", "GK"],
    ["Center-Back", "CB"],
    ["Left-Back", "LB"],
    ["Right-Back", "RB"],
    ["Left Wing-Back", "LWB"],
    ["Right Wing-Back", "RWB"],
    ["Sweeper", "SW"],
    ["Defensive Midfielder", "DM"],
    ["Central Midfielder", "CM"],
    ["Attacking Midfielder", "AM"],
    ["Left Midfielder", "LM"],
    ["Right Midfielder", "RM"],
    ["Left Winger", "LW"],
    ["Right Winger", "RW"],
    ["Center-Forward", "CF"],
    ["Striker", "ST"]
  ];

  const positionFocus = {
  "Goalkeeper (GK)": {
    "Technical": [
      "Set position mechanics and handling consistency.",
      "Footwork patterns across the goalmouth line.",
      "High-cross aerial collection and boxing techniques.",
      "1v1 close-range smothering and block saves.",
      "Parrying and tipping shots safely over/wide of the frame.",
      "Dive-and-smother execution on low, driven balls.",
      "Side-winder and volley distributions for distance accuracy.",
      "Short-range side-foot passing options to breaking center-backs.",
      "Throwing variations for rapid counter-attacks.",
      "Penalty-kick saving strategies and intuition."
    ],
    "Tactical": [
      "Organizing the defensive line structure on set pieces.",
      "Sweeper-keeper depth positioning relative to a high defensive line.",
      "Defensive command of the entire 18-yard penalty area.",
      "Early reading of opposition attacking and passing triggers.",
      "Controlling and cooling down the team's match tempo.",
      "Directing the markers during open-play defensive phases.",
      "Positioning adjustments relative to changing ball angles.",
      "Setting defensive walls for direct and indirect free-kicks.",
      "Re-distribution target choice based on tactical overloads.",
      "Game management strategies when preserving a lead."
    ],
    "Physical (Speed & Agility)": [
      "Explosive lateral diving speed and power generation.",
      "Rapid double-save recovery and second-effort reflex speed.",
      "Short-burst acceleration to close down 1v1 breakaways.",
      "High-speed footwork repositioning across the goal line.",
      "Quick-step change of direction to cover deflected shots."
    ],
    "Physical (Endurance & Power)": [
      "Explosive vertical leap for claiming high crosses.",
      "Lower-body core power for long-distance goal kicks.",
      "Upper-body strength to withstand physical contact in a crowded box.",
      "Sustained physical concentration and alertness during low-action matches.",
      "Core rotational strength for quick throwing mechanics."
    ],
    "Psychological & Cognitive": [
      "Maintaining high mental focus over 90 completely quiet minutes.",
      "Total confidence and resilience following a conceding error.",
      "Unshakeable bravery in physical 1v1 collisions.",
      "Split-second risk assessment and decision-making on loose balls.",
      "Vocal leadership presence that instills calm across the squad."
    ]
  },
  "Center-Back (CB)": {
    "Technical": [
      "1v1 front-facing jockeying and slide/block tackling.",
      "Aerial heading mechanics for clearing distance and height.",
      "Driven line-breaking ground passes into midfield pockets.",
      "Step-in slide interceptions to cut out rolling through-balls.",
      "Body positioning to shield the ball out of play or back to the GK.",
      "Long-range diagonal switches to opposite flank wingers.",
      "First-touch cushion control under high incoming pressure.",
      "Clearance accuracy using both dominant and weaker feet.",
      "Front-foot standard tackling without committing fouls.",
      "Recovery tackling from an off-balance position."
    ],
    "Tactical": [
      "Managing the defensive line depth and vertical squeeze.",
      "Flawless synchronization and timing of the offside trap.",
      "Tracking blindside forward runs behind the backline.",
      "Dropping and sliding to cover overlapping full-back zones.",
      "Communicating tactical shifts and shapes to the midfield.",
      "Managing defensive marking assignments inside the 18-yard box.",
      "Delaying counter-attacks by forcing opponents out wide.",
      "Recognizing stepping triggers to press vs. dropping triggers to defend space.",
      "Shielding the central dangerous zones (the \"Golden Zone\").",
      "Strategic tactical fouling zones to prevent breakaway goal scenarios."
    ],
    "Physical (Speed & Agility)": [
      "Recovery sprint speed to track fast attackers in behind.",
      "Hip-turn mobility to transition seamlessly from jogging backward to sprinting.",
      "Lateral agility to mirror quick-stepping forwards 1v1.",
      "Explosive deceleration to block shots or cross attempts.",
      "Fast-twitch reaction steps to clear chaotic loose balls in the box."
    ],
    "Physical (Endurance & Power)": [
      "Dominant aerial power to win headers against target strikers.",
      "Upper-body strength to hold off physical attackers during link-up play.",
      "Core balance to complete tackles while running at full speed.",
      "Repeat sprint ability to cover multiple high-speed breaks per half.",
      "Endurance capacity to maintain a high physical baseline for 90 minutes."
    ],
    "Psychological & Cognitive": [
      "Cold composure when building play out from the deep defensive third.",
      "Unwavering discipline to hold position rather than chase the ball.",
      "Split-second calculation of offside tracking and depth alignment.",
      "Leadership accountability to anchor the emotional tone of the backline.",
      "Risk evaluation on when to clear long vs. when to play out short."
    ]
  },
  "Left-Back (LB)": {
    "Technical": [
      "High-speed whipped crossing into the primary goal box.",
      "Low-driven cutback crosses from the endline.",
      "Wide-area 1v1 defensive jockeying and sideline trapping.",
      "First-touch control while sprinting along tight touchlines.",
      "Direct vertical line passing under tight sideline pressure.",
      "Inward ground passing to linking central midfielders.",
      "Safe clearance techniques when pinned in deep defensive corners.",
      "Dynamic ball progression via progressive forward dribbling.",
      "Long throw-ins to bypass immediate opposition press.",
      "Slid tackles to block dangerous early crossing angles."
    ],
    "Tactical": [
      "Perfect timing of overlapping runs to stretch wide defenses.",
      "Executing underlapping inside runs to overload central areas.",
      "Defensive recovery tracking to get back behind the ball line.",
      "Diagonal tuck-in positioning to support center-backs on far crosses.",
      "Triggers for high-pressing opposition full-backs vs. holding space.",
      "Creating wide passing triangles with midfielders and wingers.",
      "Managing 2v1 defensive overloads when wingers fail to track back.",
      "Deciding when to progress the attack vs. when to recycle possession.",
      "Forcing opposing wingers onto their weaker inside/outside foot.",
      "Quick transition positioning upon immediate ball turnover."
    ],
    "Physical (Speed & Agility)": [
      "High-end elite linear sprint speed down the wings.",
      "Rapid change of direction to match shifting wide attackers.",
      "Explosive recovery acceleration when caught out high up the pitch.",
      "Side-shuffling agility to mirror tricky dribblers on the touchline.",
      "Deceleration control to cleanly check runs without giving up a foul."
    ],
    "Physical (Endurance & Power)": [
      "High-volume aerobic engine to continuously sprint up and down the pitch.",
      "Repeated sprint ability (RSA) across all match phases.",
      "Leg power to whip heavy crosses from a dead sprint.",
      "Upper-body balance to hold off wingers while sprinting side-by-side.",
      "Stamina to match dynamic wide attackers in the final 15 minutes."
    ],
    "Psychological & Cognitive": [
      "Tactical discipline to balance heavy attacking drives with defensive duties.",
      "High concentration to monitor the backline depth while playing wide.",
      "Quick transitional awareness to react instantly to changes in possession.",
      "Confidence to demand the ball in tight, high-pressure wide zones.",
      "Spatial awareness to exploit vast open green grass down the flank."
    ]
  },
  "Right-Back (RB)": {
    "Technical": [
      "High-speed whipped crossing into the primary goal box.",
      "Low-driven cutback crosses from the endline.",
      "Wide-area 1v1 defensive jockeying and sideline trapping.",
      "First-touch control while sprinting along tight touchlines.",
      "Direct vertical line passing under tight sideline pressure.",
      "Inward ground passing to linking central midfielders.",
      "Safe clearance techniques when pinned in deep defensive corners.",
      "Dynamic ball progression via progressive forward dribbling.",
      "Long throw-ins to bypass immediate opposition press.",
      "Slid tackles to block dangerous early crossing angles."
    ],
    "Tactical": [
      "Perfect timing of overlapping runs to stretch wide defenses.",
      "Executing underlapping inside runs to overload central areas.",
      "Defensive recovery tracking to get back behind the ball line.",
      "Diagonal tuck-in positioning to support center-backs on far crosses.",
      "Triggers for high-pressing opposition full-backs vs. holding space.",
      "Creating wide passing triangles with midfielders and wingers.",
      "Managing 2v1 defensive overloads when wingers fail to track back.",
      "Deciding when to progress the attack vs. when to recycle possession.",
      "Forcing opposing wingers onto their weaker inside/outside foot.",
      "Quick transition positioning upon immediate ball turnover."
    ],
    "Physical (Speed & Agility)": [
      "High-end elite linear sprint speed down the wings.",
      "Rapid change of direction to match shifting wide attackers.",
      "Explosive recovery acceleration when caught out high up the pitch.",
      "Side-shuffling agility to mirror tricky dribblers on the touchline.",
      "Deceleration control to cleanly check runs without giving up a foul."
    ],
    "Physical (Endurance & Power)": [
      "High-volume aerobic engine to continuously sprint up and down the pitch.",
      "Repeated sprint ability (RSA) across all match phases.",
      "Leg power to whip heavy crosses from a dead sprint.",
      "Upper-body balance to hold off wingers while sprinting side-by-side.",
      "Stamina to match dynamic wide attackers in the final 15 minutes."
    ],
    "Psychological & Cognitive": [
      "Tactical discipline to balance heavy attacking drives with defensive duties.",
      "High concentration to monitor the backline depth while playing wide.",
      "Quick transitional awareness to react instantly to changes in possession.",
      "Confidence to demand the ball in tight, high-pressure wide zones.",
      "Spatial awareness to exploit vast open green grass down the flank."
    ]
  },
  "Left Wing-Back (LWB)": {
    "Technical": [
      "First-time crossing over maximum distance under full momentum.",
      "One-touch combinations with inside midfielders to break touchline presses.",
      "Controlled speed-dribbling through extensive channels of the wing.",
      "Cutting infield to fire long-range diagonal shots or passes.",
      "High-speed progressive cutbacks targeting edge-of-the-box runners.",
      "Aerial cushion control to control dynamic cross-field switches.",
      "Recovery slide-blocks against crossing variations.",
      "Rapid ball shielding down the line to isolate possession.",
      "Executing driven long-line passes through extreme tight lanes.",
      "Recovering defensive drop-balls with precision clearances."
    ],
    "Tactical": [
      "Anchoring entire wide structures singlehandedly in 3-and-5-back systems.",
      "Coordinating transitions from primary defensive backline to attacking line.",
      "Exploiting wide pockets created by inverted wide forwards.",
      "Squeezing far-side posts defensively when opposite flank is breached.",
      "Managing physical stamina depletion over aggressive overlapping workloads.",
      "Coordinating pressing triggers alongside wide outer center-backs.",
      "Forcing opponents back into central areas into defensive traps.",
      "Offside-line positioning coordination along deep back structures.",
      "Recognizing defensive transition shapes during explosive breaks.",
      "Managing deep endline spatial traps to prevent short crossing metrics."
    ],
    "Physical (Speed & Agility)": [
      "Maximal acceleration thresholds along the total length of pitch.",
      "High deceleration response to shift from attacking sprint to defensive block.",
      "Sharp multi-directional pivoting agility to change flank recovery tracks.",
      "High-speed dynamic cutting lines into central pockets under strain.",
      "Fast tracking speed to absorb tactical recovery mistakes."
    ],
    "Physical (Endurance & Power)": [
      "Peak-level dynamic conditioning for immense box-to-box volume demands.",
      "Elite repeated sprint thresholds across full 90-minute stretches.",
      "Exceptional leg drive power to maintain distance crossing precision at pace.",
      "Core balance structures to hold momentum during continuous flank contact.",
      "Deep anaerobic threshold execution during heavy fast-break demands."
    ],
    "Psychological & Cognitive": [
      "Complete operational discipline to handle heavy dual-role tactical outputs.",
      "Mental focus to maintain backline depths during exhaustion phases.",
      "High cognitive processing speeds to change focus on dynamic transitions.",
      "Unshakeable tactical spatial confidence to control and progress structural play.",
      "Clear spatial reading mechanics of available landscape along outer channels."
    ]
  },
  "Right Wing-Back (RWB)": {
    "Technical": [
      "First-time crossing over maximum distance under full momentum.",
      "One-touch combinations with inside midfielders to break touchline presses.",
      "Controlled speed-dribbling through extensive channels of the wing.",
      "Cutting infield to fire long-range diagonal shots or passes.",
      "High-speed progressive cutbacks targeting edge-of-the-box runners.",
      "Aerial cushion control to control dynamic cross-field switches.",
      "Recovery slide-blocks against crossing variations.",
      "Rapid ball shielding down the line to isolate possession.",
      "Executing driven long-line passes through extreme tight lanes.",
      "Recovering defensive drop-balls with precision clearances."
    ],
    "Tactical": [
      "Anchoring entire wide structures singlehandedly in 3-and-5-back systems.",
      "Coordinating transitions from primary defensive backline to attacking line.",
      "Exploiting wide pockets created by inverted wide forwards.",
      "Squeezing far-side posts defensively when opposite flank is breached.",
      "Managing physical stamina depletion over aggressive overlapping workloads.",
      "Coordinating pressing triggers alongside wide outer center-backs.",
      "Forcing opponents back into central areas into defensive traps.",
      "Offside-line positioning coordination along deep back structures.",
      "Recognizing defensive transition shapes during explosive breaks.",
      "Managing deep endline spatial traps to prevent short crossing metrics."
    ],
    "Physical (Speed & Agility)": [
      "Maximal acceleration thresholds along the total length of pitch.",
      "High deceleration response to shift from attacking sprint to defensive block.",
      "Sharp multi-directional pivoting agility to change flank recovery tracks.",
      "High-speed dynamic cutting lines into central pockets under strain.",
      "Fast tracking speed to absorb tactical recovery mistakes."
    ],
    "Physical (Endurance & Power)": [
      "Peak-level dynamic conditioning for immense box-to-box volume demands.",
      "Elite repeated sprint thresholds across full 90-minute stretches.",
      "Exceptional leg drive power to maintain distance crossing precision at pace.",
      "Core balance structures to hold momentum during continuous flank contact.",
      "Deep anaerobic threshold execution during heavy fast-break demands."
    ],
    "Psychological & Cognitive": [
      "Complete operational discipline to handle heavy dual-role tactical outputs.",
      "Mental focus to maintain backline depths during exhaustion phases.",
      "High cognitive processing speeds to change focus on dynamic transitions.",
      "Unshakeable tactical spatial confidence to control and progress structural play.",
      "Clear spatial reading mechanics of available landscape along outer channels."
    ]
  },
  "Sweeper (SW)": {
    "Technical": [
      "High-precision defensive ball picking off errant loose tracks.",
      "Complete sliding clearance mastery using both left and right feet.",
      "Long-lofted aerial balls to drop direct counters behind opponent line.",
      "Authoritative 1v1 ground block tackles against advanced strikers.",
      "Heading clearances maximizing depth, clearance length, and arc.",
      "Directional chest and thigh cushion trapping to regain control.",
      "Ground path interceptions of high-velocity rolled through-balls.",
      "Quick-turn shielding to isolate attackers from dynamic loose tracks.",
      "Driven side-foot distribution passes to clear immediate pressure lines.",
      "Clean recovery adjustments to block deflections inside keeper territory."
    ],
    "Tactical": [
      "Operating as the ultimate depth safety valve behind the defensive backline.",
      "Reading entire defensive breakdowns to deploy proactive coverage.",
      "Mapping defensive positioning adjustments dynamically without direct markers.",
      "Organizing center-back positioning lines using comprehensive sightline advantage.",
      "Closing dangerous space vacated by sliding central partner units.",
      "Managing offside traps via calculated, delayed line movements.",
      "Forcing wide attacking threats to drop into low-probability crossing loops.",
      "Guarding the core primary threat territory (\"Golden Zone\") at all costs.",
      "Governing counter-pressing shapes immediately following deep turnovers.",
      "Executing deep defensive recovery saves inside empty keeper lines."
    ],
    "Physical (Speed & Agility)": [
      "High-velocity reaction bursts to clean up broken central plays.",
      "Elite turning agility to track diagonal threats moving over deep channels.",
      "Quick-stop body checking mechanics to block high-velocity shots.",
      "Lateral slide acceleration to seal gaps inside internal penalty limits.",
      "Fast spatial alignment changes to absorb loose ball deflections."
    ],
    "Physical (Endurance & Power)": [
      "Exceptional explosive jumping mechanics to neutralize targeted crosses.",
      "Absolute raw upper-body power to win critical standard physical duels.",
      "Core base balance metrics to preserve structural posture under contact.",
      "High-efficiency lung capacity to retain optimal cognitive output late.",
      "Deep physical durability to absorb relentless high-collision match strains."
    ],
    "Psychological & Cognitive": [
      "Complete, cold composure as the absolute final line of defensive cover.",
      "Exceptional foresight to map attacking breakthroughs before they manifest.",
      "Vocal tactical direction to manage full back-four alignment logic.",
      "Unshakable emotional grounding following massive defensive structure shocks.",
      "Elite risk-management calculations on clearance paths vs. short plays."
    ]
  },
  "Defensive Midfielder (DM)": {
    "Technical": [
      "High-volume clean interceptions through intuitive positioning.",
      "Clean first-touch redirection under high central press.",
      "One-touch and two-touch rapid ball recycling passes.",
      "Safe, authoritative ground slide and poke tackling.",
      "180-degree blind-turn evasions away from closing defenders.",
      "Medium-range driven passes to break lines into attacking midfielders.",
      "Body positioning to block and screen central shooting lanes.",
      "Clean half-volley collections from poor opposition clearances.",
      "Aerial heading to win long-distance goalkeeper punts.",
      "Controlled ball shielding under immense upper-body physical pressure."
    ],
    "Tactical": [
      "Serving as the primary central screen protecting the center-backs.",
      "Constantly tracking, monitoring, and closing open passing lanes.",
      "Dictating match tempo by selecting slow vs. fast build-up passes.",
      "Dropping between center-backs to create a back three during build-up.",
      "Orchestrating counter-attack resets by recycling erratic loose balls.",
      "Triggering central pressing traps on opposing central midfielders.",
      "Closing down empty space vacated by roaming attacking teammates.",
      "Balancing the midfield shape to prevent wide tactical isolations.",
      "Directing the first phase of build-up play out of the defensive third.",
      "Executing clever tactical fouls to disrupt dangerous breakaway transitions."
    ],
    "Physical (Speed & Agility)": [
      "360-degree agility to turn, track, and tackle in all directions.",
      "Quick-burst closing acceleration over short central spaces (3–5 meters).",
      "High lateral footwork speed to shift across the central field axis.",
      "Recovery reaction speed to catch advanced runners breaking from deep.",
      "Rapid acceleration to close down edge-of-the-box shooting opportunities."
    ],
    "Physical (Endurance & Power)": [
      "Exceptional aerobic engine to cover massive ground inside the middle third.",
      "Lower-center-of-gravity strength to win physical midfield collisions.",
      "Core balance to maintain possession while being pushed from behind.",
      "Repeated physical output to contest continuous ground-ball duels.",
      "Leg power to execute distance defensive clearances under heavy load."
    ],
    "Psychological & Cognitive": [
      "Continuous 360-degree scanning before receiving the ball.",
      "Emotional composure when operating under high-intensity central press.",
      "Elite level spatial awareness of all teammate and opponent positions.",
      "Selfless tactical patience to protect the structure rather than hunt goals.",
      "Absolute clarity of thought to execute minimal-risk plays in dangerous areas."
    ]
  },
  "Central Midfielder (CM)": {
    "Technical": [
      "Directional first-touch control that takes the ball away from tracking pressure.",
      "Pinpoint long-range switches to shift the axis of the attack.",
      "Weight-perfect through-balls into the paths of running forwards.",
      "Dynamic progressive dribbling to advance the ball through midfield gaps.",
      "Disguised no-look passing to destabilize settled defensive shapes.",
      "Accurate edge-of-the-box shooting and late late-run finishing.",
      "Clean receiving mechanics off high, dropping aerial balls.",
      "Two-touch combination play (1-2s) in highly congested central zones.",
      "Execution of accurate driven ground passes with both feet.",
      "Ball mastery to retain possession under multi-player closing traps."
    ],
    "Tactical": [
      "Timing advanced box-to-box runs to arrive late and unmarked in the box.",
      "Implementing high-press triggers to turn over possession in midfield.",
      "Creating passing triangles and diamonds to navigate out of pressure zones.",
      "Identifying and exploiting numeric overloads (e.g., creating 3v2 spaces).",
      "Managing the midfield spacing balance between attack and defense.",
      "Recognizing when to play direct forward balls vs. retaining safe possession.",
      "Tracking deep midfield runners who break from the opponent's backline.",
      "Moving dynamically into open passing lanes to always support teammates.",
      "Pulling wide to create passing lanes for building center-backs.",
      "Directing the counter-pressing structure immediately upon losing the ball."
    ],
    "Physical (Speed & Agility)": [
      "High-speed agility to weave through cluttered midfield lines.",
      "Sudden deceleration and cut moves to lose tight man-markers.",
      "Burst acceleration to drive forward into open space when lines open up.",
      "Sharp multi-directional turning speed with the ball at the feet.",
      "Quick footwork adjustments to collect erratic or bouncing passes."
    ],
    "Physical (Endurance & Power)": [
      "Elite box-to-box aerobic capacity to impact both ends of the pitch.",
      "High stamina to press, transition, and support for the full match.",
      "Core rotational strength to change direction under heavy physical load.",
      "Leg power to deliver long-range driven passes and heavy shots.",
      "Physical durability to withstand constant contact and heavy ground duels."
    ],
    "Psychological & Cognitive": [
      "Constant scanning habits (checking shoulders every 2–3 seconds).",
      "Comprehensive spatial awareness of the entire pitch layout.",
      "High tactical intelligence to read the game 2–3 phases ahead.",
      "Extreme calm and mental clarity inside high-traffic central areas.",
      "Confidence to control, demand, and distribute the ball during critical moments."
    ]
  },
  "Attacking Midfielder (AM)": {
    "Technical": [
      "Elite, precise through-balls that split opposition center-backs.",
      "Receiving balls on the half-turn to instantly attack the backline.",
      "Dribbling in highly confined spaces using tight, rapid touch patterns.",
      "Clinical mid-range curling shots and volleys around the penalty arc.",
      "Exquisite dead-ball, free-kick, and corner delivery mechanics.",
      "One-touch flick-ons and backheels to release tracking strikers.",
      "Feather-light cushion control on direct, driven incoming passes.",
      "Clinical chipping techniques over rushing goalkeepers or low blocks.",
      "Feints, drop-shoulders, and stepovers to unlock isolated defenders.",
      "Weak-foot passing and shooting proficiency to maintain unpredictable angles."
    ],
    "Tactical": [
      "Ghosting into pockets of space between the opponent's midfield and defense (the \"lines\").",
      "Timing late, hidden runs into the penalty box for goal opportunities.",
      "Exploiting and wider-stretching structural gaps in defensive shapes.",
      "Intentionally dragging central defenders out of position to free strikers.",
      "Orchestrating rapid one-two combinations around the penalty box edge.",
      "Directing the final-third press strategy to win the ball high up.",
      "Recognizing and attacking the weak points in deep low-block defenses.",
      "Creating overloads by drifting into wide spaces to assist wingers.",
      "Leading the creative design of high-speed counter-attacking plays.",
      "Knowing when to shoot vs. when to slip an extra unselfish pass."
    ],
    "Physical (Speed & Agility)": [
      "Fast-twitch agility to spin away from tracking defensive midfielders.",
      "Sudden burst acceleration over 2–5 meters to bypass an outstretched leg.",
      "Sharp lateral change of direction to navigate packed defensive lines.",
      "Quick hip-shifts to execute deceptive cross-and-cut maneuvers.",
      "Rapid balance adjustment to shoot accurately while under heavy pressure."
    ],
    "Physical (Endurance & Power)": [
      "Explosive leg power for sudden, unexpected long-range strikes.",
      "High-intensity anaerobic power output for repeated attacking runs.",
      "Core balance to withstand body checks from physical center-backs.",
      "Stamina to maintain high-level creative execution in late match stages.",
      "Quick-recovery energy to instantly transition into counter-pressing tasks."
    ],
    "Psychological & Cognitive": [
      "Elite spatial mapping and vision to spot runs before they fully develop.",
      "Ultimate creative confidence to attempt high-risk, high-reward plays.",
      "High cognitive processing speed to make decisions in a fraction of a second.",
      "Anticipation of defensive movements to exploit their weight shifts.",
      "Emotional resilience to continuously try creative openings if plays fail."
    ]
  },
  "Left Midfielder (LM)": {
    "Technical": [
      "Maintaining tactical possession linkups down outer structural thirds.",
      "Weighted diagonal flight paths into the front striking lane.",
      "First-touch safety traps along congested side margins.",
      "One-two combination release passes under touchline pressures.",
      "Soft cutback cross placement targeting incoming mid-lane trackers.",
      "Grounded lateral distribution paths across the central axis.",
      "Safe clearance techniques when dropped into low backup shapes.",
      "Inward ball progression via controlled inside-lane carrying.",
      "Long technical throw-ins to unlock structural stagnation.",
      "Precise ground tackles to force wide ball possession turns."
    ],
    "Tactical": [
      "Balancing central structural needs with wide flank defensive shape.",
      "Maintaining intermediate width lines to create tactical passing diamonds.",
      "Tracking opposing overlapping sidebacks over total distance lengths.",
      "Dropping into secondary defensive shapes to establish midfield fours.",
      "Coordinating high-press trigger boundaries along lateral channels.",
      "Mapping passing outlets for struggling deep central partners.",
      "Managing secondary numbers inside the penalty zone on deep switches.",
      "Deciding match flow balance metrics between direct and structural plays.",
      "Screening inside tracking channels to force horizontal enemy paths.",
      "Shifting positions rapidly to maintain structural density on turnovers."
    ],
    "Physical (Speed & Agility)": [
      "High-efficiency linear pacing capacity down intermediate lanes.",
      "Quick hip adjustment transitions to track shifting wide attacks.",
      "Rapid acceleration out of tight touchline containment shapes.",
      "Smooth lateral shuttle movements to close spatial passing options.",
      "Controlled deceleration to maintain tracking shapes without fouls."
    ],
    "Physical (Endurance & Power)": [
      "High-volume conditioning to operate over continuous flank spans.",
      "Constant repeat sprint ability (RSA) during full possession cycles.",
      "Solid lower-body force to deliver weighted long-channel pathing.",
      "Core posture stability to control contact variables during flank duels.",
      "Sustained energy thresholds to protect transitional needs late."
    ],
    "Psychological & Cognitive": [
      "Complete tactical focus to absorb complex wide-and-central responsibilities.",
      "Constant landscape scanning routines to observe balance structural metrics.",
      "Rapid mental reading of transitional shapes upon system breakdowns.",
      "Positional confidence to hold structural gaps under high target loads.",
      "Clear visualization of spatial landscapes along the wide third lines."
    ]
  },
  "Right Midfielder (RM)": {
    "Technical": [
      "Maintaining tactical possession linkups down outer structural thirds.",
      "Weighted diagonal flight paths into the front striking lane.",
      "First-touch safety traps along congested side margins.",
      "One-two combination release passes under touchline pressures.",
      "Soft cutback cross placement targeting incoming mid-lane trackers.",
      "Grounded lateral distribution paths across the central axis.",
      "Safe clearance techniques when dropped into low backup shapes.",
      "Inward ball progression via controlled inside-lane carrying.",
      "Long technical throw-ins to unlock structural stagnation.",
      "Precise ground tackles to force wide ball possession turns."
    ],
    "Tactical": [
      "Balancing central structural needs with wide flank defensive shape.",
      "Maintaining intermediate width lines to create tactical passing diamonds.",
      "Tracking opposing overlapping sidebacks over total distance lengths.",
      "Dropping into secondary defensive shapes to establish midfield fours.",
      "Coordinating high-press trigger boundaries along lateral channels.",
      "Mapping passing outlets for struggling deep central partners.",
      "Managing secondary numbers inside the penalty zone on deep switches.",
      "Deciding match flow balance metrics between direct and structural plays.",
      "Screening inside tracking channels to force horizontal enemy paths.",
      "Shifting positions rapidly to maintain structural density on turnovers."
    ],
    "Physical (Speed & Agility)": [
      "High-efficiency linear pacing capacity down intermediate lanes.",
      "Quick hip adjustment transitions to track shifting wide attacks.",
      "Rapid acceleration out of tight touchline containment shapes.",
      "Smooth lateral shuttle movements to close spatial passing options.",
      "Controlled deceleration to maintain tracking shapes without fouls."
    ],
    "Physical (Endurance & Power)": [
      "High-volume conditioning to operate over continuous flank spans.",
      "Constant repeat sprint ability (RSA) during full possession cycles.",
      "Solid lower-body force to deliver weighted long-channel pathing.",
      "Core posture stability to control contact variables during flank duels.",
      "Sustained energy thresholds to protect transitional needs late."
    ],
    "Psychological & Cognitive": [
      "Complete tactical focus to absorb complex wide-and-central responsibilities.",
      "Constant landscape scanning routines to observe balance structural metrics.",
      "Rapid mental reading of transitional shapes upon system breakdowns.",
      "Positional confidence to hold structural gaps under high target loads.",
      "Clear visualization of spatial landscapes along the wide third lines."
    ]
  },
  "Left Winger (LW)": {
    "Technical": [
      "Dynamic 1v1 dribbling to isolate and explode past full-backs.",
      "Whipped cross deliveries targeting the far post at maximum speed.",
      "Deep endline low-driven cutbacks to oncoming midfielders.",
      "Inverted curling finishes into the far top corner of the net.",
      "First-touch cushion control from long aerial cross-field switches.",
      "Dribbling at top speed while maintaining close proximity to the ball.",
      "Quick stepovers and body feints to create half-yard crossing windows.",
      "Running variations combining high-speed dribbling with sudden inside cuts.",
      "One-touch link-up passing with overlapping outside full-backs.",
      "Clean finishing from deep, narrow, and acute shooting angles."
    ],
    "Tactical": [
      "Timing blindside runs from wide areas behind the opponent's backline.",
      "Maximizing width along the touchline to stretch defensive structures.",
      "Tracking back to assist full-backs with defensive structural positioning.",
      "Inside-drifting positioning to open wide lanes for overlapping full-backs.",
      "Executing rapid transitional sprints during vertical counter-attacks.",
      "Rotating central attacking roles dynamically with the striker.",
      "Creating isolated 1v1 attacking situations on the weak side of defense.",
      "Counter-pressing opposing outside backs upon immediate ball turnovers.",
      "Pressuring center-backs dynamically during high team press phases.",
      "Attacking the back post when crosses come in from the opposite wing."
    ],
    "Physical (Speed & Agility)": [
      "World-class elite linear sprint speed down the touchlines.",
      "Blistering acceleration from a stationary standstill position.",
      "Sharp, sudden cutting agility to shift inside at high speed.",
      "Lateral hip mobility to shift direction seamlessly while running.",
      "Deceleration control to quickly freeze defenders before accelerating again."
    ],
    "Physical (Endurance & Power)": [
      "Elite repeated sprint ability (RSA) to sustain high-speed bursts all game.",
      "Explosive leg power to drive long, swerving far-post crosses.",
      "Core stability to absorb physical challenges while moving at top speed.",
      "High aerobic endurance to track back deep and sprint forward all half.",
      "Dynamic leaping power to contest headers at the back post."
    ],
    "Psychological & Cognitive": [
      "Unshakeable 1v1 confidence, always willing to take on defenders.",
      "Rapid decision-making on whether to cross, cut inside, or retain the ball.",
      "Heightened peripheral vision to spot back-post runs while sprinting.",
      "Spatial awareness to exploit grass behind high field structures.",
      "Mental patience to hold width until the ball can be successfully switched."
    ]
  },
  "Right Winger (RW)": {
    "Technical": [
      "Dynamic 1v1 dribbling to isolate and explode past full-backs.",
      "Whipped cross deliveries targeting the far post at maximum speed.",
      "Deep endline low-driven cutbacks to oncoming midfielders.",
      "Inverted curling finishes into the far top corner of the net.",
      "First-touch cushion control from long aerial cross-field switches.",
      "Dribbling at top speed while maintaining close proximity to the ball.",
      "Quick stepovers and body feints to create half-yard crossing windows.",
      "Running variations combining high-speed dribbling with sudden inside cuts.",
      "One-touch link-up passing with overlapping outside full-backs.",
      "Clean finishing from deep, narrow, and acute shooting angles."
    ],
    "Tactical": [
      "Timing blindside runs from wide areas behind the opponent's backline.",
      "Maximizing width along the touchline to stretch defensive structures.",
      "Tracking back to assist full-backs with defensive structural positioning.",
      "Inside-drifting positioning to open wide lanes for overlapping full-backs.",
      "Executing rapid transitional sprints during vertical counter-attacks.",
      "Rotating central attacking roles dynamically with the striker.",
      "Creating isolated 1v1 attacking situations on the weak side of defense.",
      "Counter-pressing opposing outside backs upon immediate ball turnovers.",
      "Pressuring center-backs dynamically during high team press phases.",
      "Attacking the back post when crosses come in from the opposite wing."
    ],
    "Physical (Speed & Agility)": [
      "World-class elite linear sprint speed down the touchlines.",
      "Blistering acceleration from a stationary standstill position.",
      "Sharp, sudden cutting agility to shift inside at high speed.",
      "Lateral hip mobility to shift direction seamlessly while running.",
      "Deceleration control to quickly freeze defenders before accelerating again."
    ],
    "Physical (Endurance & Power)": [
      "Elite repeated sprint ability (RSA) to sustain high-speed bursts all game.",
      "Explosive leg power to drive long, swerving far-post crosses.",
      "Core stability to absorb physical challenges while moving at top speed.",
      "High aerobic endurance to track back deep and sprint forward all half.",
      "Dynamic leaping power to contest headers at the back post."
    ],
    "Psychological & Cognitive": [
      "Unshakeable 1v1 confidence, always willing to take on defenders.",
      "Rapid decision-making on whether to cross, cut inside, or retain the ball.",
      "Heightened peripheral vision to spot back-post runs while sprinting.",
      "Spatial awareness to exploit grass behind high field structures.",
      "Mental patience to hold width until the ball can be successfully switched."
    ]
  },
  "Center-Forward (CF)": {
    "Technical": [
      "Back-to-goal ball mastery under crushing central contact.",
      "One-touch layoff paths to incoming attacking midfield options.",
      "Quick half-turn dribble mechanics inside highly confined spaces.",
      "Soft chipping over rushing central back block attempts.",
      "Controlled path volleying from dynamic intermediate aerial metrics.",
      "Precise first-time placement strikes from low-driven wide cuts.",
      "Rapid ball shielding patterns inside congested central thirds.",
      "Deceptive shoulder drop maneuvers to unlock defensive anchors.",
      "Ground through-pass accuracy to split trailing back lines.",
      "Strategic aerial knockdowns targeting overlapping wing channels."
    ],
    "Tactical": [
      "Dropping deep into intermediate lines to dismantle solid tracking setups.",
      "Dragging primary central markers high to exploit central lane gaps.",
      "Linking midfield possession groups directly to deep front lines.",
      "Executing curved tracking runs to exploit offside line setups.",
      "Managing primary counter-pressing triggers on defensive mid lines.",
      "Rotating positions fluidly with deep running inside wing options.",
      "Navigating highly physical marking environments in tight formats.",
      "Orchestrating rapid one-two sequence metrics across box margins.",
      "Squeezing attacking transitions during high-velocity break periods.",
      "Creating decoy central runs to liberate space for trailing options."
    ],
    "Physical (Speed & Agility)": [
      "High-velocity short-burst acceleration over compact central ranges.",
      "Sharp multi-directional pivoting agility with pressure on the frame.",
      "Fast hip-rotation mechanics to transition from receiving to striking.",
      "Rapid deceleration adjustments to shake tight man-marking units.",
      "High-velocity physical reactions to clear loose rebound paths."
    ],
    "Physical (Endurance & Power)": [
      "Deep upper-body skeletal strength to hold off physical central markers.",
      "Dynamic vertical jumping mechanics to contest deep dropping punts.",
      "High lower-body core force for rapid explosive shooting actions.",
      "Solid dynamic structural balance to execute plays under heavy physical load.",
      "Sustained anaerobic capacity to endure endless tracking cycles."
    ],
    "Psychological & Cognitive": [
      "Continuous 360-degree environmental scanning ahead of pass collection.",
      "Supreme tactical calm when isolated inside high-density press layers.",
      "Exceptional vision to track running wide variables without looking up.",
      "Mental resiliency to preserve tactical execution levels under structural duress.",
      "Deep processing speeds to split tight shooting choices in split-seconds."
    ]
  },
  "Striker (ST)": {
    "Technical": [
      "Clinical first-time finishing inside the 18-yard box.",
      "Composed composure on 1v1 breakaways against a rushing keeper.",
      "Hold-up play, shielding the ball with back to the goal.",
      "Dominant aerial heading mechanics and volley techniques.",
      "One-touch tap-ins, anticipating loose balls across the goal line.",
      "First-touch cushion setup to quickly fire shots under tight pressure.",
      "Half-yard creation moves to release a shot amidst dense marking.",
      "Clinical execution using both dominant and weaker feet.",
      "Long-range driven power shots from the edge of the area.",
      "Executing curved runs to stay onside before getting onto through-balls."
    ],
    "Tactical": [
      "Sharp movement patterns (e.g., front-post darts, back-pedals) to escape markers.",
      "Riding the exact edge of the offside line to time breakthrough runs.",
      "Directing the frontline press by triggering tracking traps on center-backs.",
      "Pinning center-backs deep to create pocket space for attacking midfielders.",
      "Dropping deep into midfield to draw defenders out (False 9 logic).",
      "Pulling out into wide channels to exploit gaps when center-backs track wide.",
      "Anticipating deflections, rebounds, and goalkeeper handling errors.",
      "Linking up play with overlapping wingers through layoff passes.",
      "Creating chaos via near-post sacrificial runs to clear space behind.",
      "Navigating tight physical marking within a packed low-block defense."
    ],
    "Physical (Speed & Agility)": [
      "Explosive 5-meter acceleration to win races to loose balls in the box.",
      "Fast change-of-direction turning agility with a defender on the back.",
      "Sharp multi-directional darting movements to escape tight markers.",
      "High-speed linear sprint power to break away from chasing lines.",
      "Rapid physical reactions to snap shots off from unpredictable deflections."
    ],
    "Physical (Endurance & Power)": [
      "Exceptional upper-body strength to hold off physical, heavy center-backs.",
      "Elite vertical jumping leap to contest and win cross headers.",
      "Explosive lower-body shot power from minimal structural back-lift.",
      "High-intensity anaerobic stamina to execute continuous hard tracking runs.",
      "Dynamic core balance to fire accurate shots while being physically unsteadied."
    ],
    "Psychological & Cognitive": [
      "Elite \"killer instinct\" and supreme confidence in front of goal.",
      "Total mental resilience to forget missed chances and focus on the next play.",
      "Intense concentration to read the trajectory of incoming crosses early.",
      "Spatial map of the goalkeeper's positioning without needing to look up.",
      "Calculated selfishness mixed with the vision to execute an unselfish layoff."
    ]
  },
  "Universal / Not Sure Yet (UNS)": {
    "Technical": [
      "Foundational ball mastery using all surfaces of both feet.",
      "Consistent, accurate short-range side-foot ground passing.",
      "Clean, safe receiving mechanics to control incoming ground balls.",
      "Basic juggling to build natural coordination and ball touch feel.",
      "Fundamental dribbling control through basic cone courses.",
      "Learning clean striking mechanics for basic shooting power.",
      "Executing simple throw-ins using correct legal field form.",
      "Safe shielding mechanics using the body to protect the ball.",
      "Basic front-facing ground tackling without leaving the feet.",
      "Managing a clean first touch that keeps the ball close to the body."
    ],
    "Tactical": [
      "Understanding the basic roles and boundaries of all 11 positions.",
      "Developing basic spatial awareness (avoiding crowding the ball).",
      "Learning the fundamental rules of the game (offside, fouls, restarts).",
      "Recognizing how to open up and find empty grass to receive a pass.",
      "Tracking the ball path while keeping eyes on the surrounding field layout.",
      "Basic defensive positioning (staying between the opponent and the goal).",
      "Understanding the core concept of attacking space vs. defending space.",
      "Learning how to form basic defensive shapes when losing the ball.",
      "Recognizing basic communication calls (\"Man on,\" \"Time,\" \"Turn\").",
      "Learning how to transition from attacking mindsets to defensive tasks."
    ],
    "Physical (Speed & Agility)": [
      "Developing clean, efficient running form and stride mechanics.",
      "Basic quick-foot agility through ladder and cone setups.",
      "Foundational change-of-direction movements without losing balance.",
      "Improving base acceleration from a stationary starting position.",
      "Developing lateral moving coordination and basic body control."
    ],
    "Physical (Endurance & Power)": [
      "Building general aerobic fitness to run throughout a basic session.",
      "Foundational full-body core strength for athletic balance.",
      "Improving safe, landing jump mechanics to protect knees and ankles.",
      "General physical conditioning to prevent soft-tissue strain injuries.",
      "Developing base muscular endurance through bodyweight movements."
    ],
    "Psychological & Cognitive": [
      "Building high sports confidence and reducing matchday anxiety.",
      "Developing a strong, proactive work ethic during tough training drills.",
      "Learning how to listen to, process, and apply coaching instructions.",
      "Fostering excellent team communication habits and positive peer support.",
      "Visualizing basic in-game scenarios to improve reaction times."
    ]
  }
};
    const topics = [
    "Energy", "Sleep Routine", "Rest Days",
    "How Training Felt", "Progress Over Time", "Something for Coach"
  ];

  const state = {
    profile: {},
    match: {},
    recovery: {},
    step: 0
  };

  const steps = [
    ["dateOfBirth", "When is your birthday?", "date"],
    ["nationality", "What is your nationality?", "text"],
    ["country", "Which country do you live in?", "country"],
    ["gender", "How do you describe your gender?", "gender"],
    ["journey", "Where are you in your football journey?", "journey"],
    ["position", "What position do you play?", "position"],
    ["goals", "What would you like help with?", "goals"],
    ["frequency", "How often do you train each week?", "frequency"],
    ["duration", "How long does each training session go for?", "duration"],
    ["space", "What space or equipment can you use?", "space"],
    ["nutrition", "What should food ideas consider?", "nutrition"],
    ["matchDay", "What would you like to track on match day?", "matchDay"],
    ["recovery", "What would you like to check in about after training?", "recovery"],
    ["guardian", "Parent or guardian details", "guardian"]
  ];

  function escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function showMessage(text) {
    const message = $("message");
    message.textContent = text;
    message.hidden = false;
  }

  function ageFromDate(value) {
    if (!value) return null;
    const birth = new Date(`${value}T00:00:00`);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) age--;
    return age;
  }

  function getVisibleSteps() {
    const age = ageFromDate(state.profile.dateOfBirth);
    return steps.filter(([key]) => key !== "guardian" || age < 16);
  }

  function selectOptions(id, options, selected = "") {
    return `<select id="${id}"><option value="">Choose one</option>${
      options.map(item => `<option value="${escape(item)}" ${selected === item ? "selected" : ""}>${escape(item)}</option>`).join("")
    }</select>`;
  }

  function checkboxCards(name, options, selected = []) {
    return `<div class="choice-grid">${options.map(item => `
      <label class="choice-card">
        <input type="checkbox" name="${name}" value="${escape(item)}" ${selected.includes(item) ? "checked" : ""}>
        <span>${escape(item)}</span>
      </label>`).join("")}</div>`;
  }

  function radioCards(name, options, selected = "") {
    return `<div class="choice-grid">${options.map(item => `
      <label class="choice-card">
        <input type="radio" name="${name}" value="${escape(item)}" ${selected === item ? "checked" : ""}>
        <span>${escape(item)}</span>
      </label>`).join("")}</div>`;
  }

  function rangeField(id, label, min, max, value, low, high) {
    return `<div class="field">
      <span class="field-label">${label}</span>
      <div class="slider-row">
        <input id="${id}" type="range" min="${min}" max="${max}" value="${value}">
        <output class="range-value" for="${id}">${value}</output>
      </div>
      <small>${low} <span style="float:right">${high}</span></small>
    </div>`;
  }

  function stepper(id, label, value, max, suffix = "") {
    return `<div class="field">
      <span class="field-label">${label}</span>
      <div class="stepper">
        <button type="button" data-step="${id}" data-change="-1" aria-label="Decrease ${label}">−</button>
        <input id="${id}" type="number" min="0" max="${max}" value="${value}">
        <button type="button" data-step="${id}" data-change="1" aria-label="Increase ${label}">+</button>
        <span>${suffix}</span>
      </div>
    </div>`;
  }

  function renderMatchDay() {
    const m = state.match;
    const unavailable = m.notPlaying === true;

    return `
      <label class="choice-card">
        <input id="notPlaying" type="checkbox" ${unavailable ? "checked" : ""}>
        <span>I’m not playing matches yet</span>
      </label>
      <div id="matchFields" ${unavailable ? "hidden" : ""}>
        <div class="field">
          <label for="matchResult">Match result</label>
          ${selectOptions("matchResult", ["Win", "Draw", "Loss"], m.result)}
        </div>
        <div class="field">
          <label for="scoreline">Scoreline</label>
          <input id="scoreline" maxlength="12" placeholder="e.g., 2-1" value="${escape(m.scoreline)}">
        </div>
        <div class="field">
          <label for="lineup">Lineup status</label>
          ${selectOptions("lineup", ["Started", "Subbed In", "Unused Sub"], m.lineup)}
        </div>
        <div class="field">
          <label for="playedPosition">Position played</label>
          ${selectOptions("playedPosition", positions.map(([name, code]) => `${code} — ${name}`), m.position)}
        </div>
        ${stepper("minutes", "Minutes played", m.minutes ?? 90, 180, "min")}
        ${rangeField("rpe", "Rate of perceived exertion (RPE)", 1, 10, m.rpe ?? 5, "1 · Easy / walking", "10 · Max effort")}
        ${rangeField("matchEnergy", "Match fitness / energy", 1, 5, m.energy ?? 3, "1 · Very tired", "5 · Full of energy")}
        <label class="choice-card">
          <input id="painToggle" type="checkbox" ${m.pain ? "checked" : ""}>
          <span>I felt physical pain or a niggle during the match</span>
        </label>
        <div id="painDetails" class="conditional" ${m.pain ? "" : "hidden"}>
          <label class="field" for="painDescription">Please describe where you feel the pain
            <textarea id="painDescription" maxlength="500" placeholder="Tell us where it hurts or feels uncomfortable.">${escape(m.painDescription)}</textarea>
          </label>
        </div>
        ${stepper("goalsScored", "Goals", m.goalsScored ?? 0, 20)}
        ${stepper("assists", "Assists", m.assists ?? 0, 20)}
        ${stepper("saves", "Saves", m.saves ?? 0, 100)}
        ${rangeField("confidence", "Match confidence", 1, 10, m.confidence ?? 5, "1 · Low / anxious", "10 · Very confident")}
        <div class="field">
          <label for="didWell">One thing I did well</label>
          <textarea id="didWell" placeholder="What felt great today?">${escape(m.didWell)}</textarea>
        </div>
        <div class="field">
          <label for="practiseNext">One thing to practise</label>
          <textarea id="practiseNext" placeholder="What will you work on next session?">${escape(m.practiseNext)}</textarea>
        </div>
        <div class="field">
          <label for="coachQuestion">Questions for Coach (optional)</label>
          <textarea id="coachQuestion" placeholder="Ask anything about your performance...">${escape(m.coachQuestion)}</textarea>
        </div>
      </div>`;
  }

  function renderRecovery() {
    const r = state.recovery;
    const selected = r.topics || [];

    return `
      <p class="muted">Choose any topics. Only the matching questions will open.</p>
      ${checkboxCards("recoveryTopic", topics, selected)}
      <div id="recoveryFields">
        ${selected.includes("Energy") ? rangeField("energy", "Energy", 1, 5, r.energy ?? 3, "1 · Completely drained", "5 · Fully recharged") : ""}
        ${selected.includes("Sleep Routine") ? `
          <div class="field"><label for="sleepQuality">Sleep quality</label>
            ${selectOptions("sleepQuality", ["Poor", "Average", "Great"], r.sleepQuality)}
          </div>
          ${stepper("sleepHours", "Hours slept last night", r.sleepHours ?? 8, 24, "hours")}
        ` : ""}
        ${selected.includes("Rest Days") ? `
          <div class="field"><span class="field-label">Rest day</span>
            ${radioCards("restChoice", ["I need a rest day soon", "I am completely fresh and ready to push"], r.restChoice)}
          </div>
        ` : ""}
        ${selected.includes("How Training Felt") ? rangeField("trainingRpe", "How training felt", 1, 10, r.trainingRpe ?? 5, "1 · Very easy", "10 · Absolute max") : ""}
        ${selected.includes("Progress Over Time") ? `
          <div class="field"><label for="progressNote">Progress over time</label>
            <textarea id="progressNote" placeholder="How do you feel your skills or fitness are developing?">${escape(r.progressNote)}</textarea>
          </div>
        ` : ""}
        ${selected.includes("Something for Coach") ? `
          <div class="field"><label for="coachNote">Something for Coach</label>
            <textarea id="coachNote" placeholder="Leave a note, feedback, or a quick update for your coach...">${escape(r.coachNote)}</textarea>
          </div>
        ` : ""}
      </div>`;
  }

  function renderQuestion() {
    const visible = getVisibleSteps();
    if (state.step >= visible.length) state.step = visible.length - 1;
    const [key, title, type] = visible[state.step];
    $("step-count").textContent = `Step ${state.step + 1} of ${visible.length}`;
    $("back").disabled = state.step === 0;
    $("continue").textContent = state.step === visible.length - 1 ? "Save setup" : "Continue";

    const p = state.profile;
    let body = "";

    if (type === "date") {
      body = `<div class="field"><label for="answer">Date of birth</label>
        <input id="answer" type="date" max="${new Date().toISOString().slice(0, 10)}" value="${escape(p.dateOfBirth)}">
      </div>`;
    } else if (type === "position") {
      body = `<div class="choice-grid">${positions.map(([name, code]) => {
        const value = `${name} (${code})`;
        return `<label class="choice-card">
          <input type="radio" name="position" value="${escape(value)}" ${p.position === value ? "checked" : ""}>
          <span>${escape(name)} <small>(${code})</small></span>
        </label>`;
      }).join("")}</div>
      <p style="margin-top:14px"><button id="explore" class="inline-link" type="button">Help me explore positions</button></p>
      <div id="explorePanel" class="conditional" hidden>
        <p>Not sure? You can ask Coach for a position-exploration call.</p>
        <label class="choice-card"><input id="coachCall" type="checkbox" ${p.coachCall ? "checked" : ""}><span>Please arrange a call with Coach</span></label>
      </div>`;
    } else if (type === "goals") {
      const role = p.position || "Not sure yet (UNS)";
      const groups = positionFocus[role] || positionFocus["Universal / Not Sure Yet (UNS)"];
      body = Object.entries(groups).map(([category, options]) => `
        <section class="group"><h3>${escape(category)}</h3>
          ${checkboxCards("goal", options, p.goals || [])}
        </section>`).join("");
    } else if (type === "frequency") {
      body = `<div class="field"><label for="answer">Sessions per week</label>
        ${selectOptions("answer", ["1x per week", "2x per week", "3x per week", "4x per week", "5x per week", "6x per week", "7x per week"], p.frequency)}
      </div>`;
    } else if (type === "duration") {
      body = `<div class="field"><label for="answer">Length of each session</label>
        ${selectOptions("answer", ["15 min", "30 min", "45 min", "1 hour", "2 hours", "3 hours", "4 hours"], p.duration)}
      </div>`;
    } else if (type === "country") {
      body = `<div class="field"><label for="answer">Country of residence</label>
        ${selectOptions("answer", ["Australia", "England", "Scotland", "Wales", "Ireland", "United States", "Canada", "New Zealand", "Other"], p.country)}
      </div>`;
    } else if (type === "gender") {
      body = `<div class="field"><label for="answer">Gender (optional)</label>
        ${selectOptions("answer", ["Prefer not to say", "Girl / woman", "Boy / man", "Non-binary", "I describe it another way"], p.gender)}
      </div>`;
    } else if (type === "journey") {
      body = `<div class="field"><label for="answer">Football journey</label>
        ${selectOptions("answer", ["New to football", "Returning after a break", "Social / community", "Club player", "Working toward trials", "High level / academy", "Professional", "Not sure"], p.journey)}
      </div>`;
    } else if (type === "space") {
      body = `${checkboxCards("space", ["Small space at home", "Ball", "Cones or markers", "Wall or rebounder", "Gym", "Club training", "Pitch access", "No equipment yet"], p.space || [])}
        <div class="field"><label for="spaceNotes">Tell us what you actually have</label>
          <textarea id="spaceNotes" placeholder="For example: a driveway, a park, one ball, or no safe space at home.">${escape(p.spaceNotes)}</textarea>
        </div>`;
    } else if (type === "nutrition") {
      body = checkboxCards("nutrition", ["No preference", "Vegetarian", "Vegan", "Halal", "Kosher", "Gluten-free preference", "Dairy-free preference", "Cultural or religious needs", "Budget-friendly", "Discuss with Coach"], p.nutrition || []);
    } else if (type === "matchDay") {
      body = renderMatchDay();
    } else if (type === "recovery") {
      body = renderRecovery();
    } else if (type === "guardian") {
      body = `<p class="notice">A parent or guardian is required for players under 16.</p>
        <div class="field"><label for="guardianEmail">Parent or guardian email</label>
          <input id="guardianEmail" type="email" autocomplete="email" value="${escape(p.guardianEmail)}">
        </div>
        <div class="field"><label for="guardianEmailConfirm">Confirm parent or guardian email</label>
          <input id="guardianEmailConfirm" type="email" autocomplete="off" value="${escape(p.guardianEmailConfirm)}">
        </div>`;
    } else {
      body = `<div class="field"><label for="answer">${escape(title)}</label>
        <input id="answer" type="text" value="${escape(p[key] || "")}">
      </div>`;
    }

    const questionTitle = type === "goals" && p.position
      ? `What would you like help with as a ${p.position.replace(/ \([A-Z]+\)$/, "")}?`
      : title;
    $("question").innerHTML = `<h1>${escape(questionTitle)}</h1>${body}`;
  }

  function captureCurrent() {
    const visible = getVisibleSteps();
    const [key, , type] = visible[state.step];
    const p = state.profile;

    if (type === "date") {
      p.dateOfBirth = $("answer").value;
    } else if (type === "position") {
      const selectedPosition = document.querySelector('input[name="position"]:checked')?.value || "";
      if (selectedPosition !== p.position) p.goals = [];
      p.position = selectedPosition;
      p.coachCall = $("coachCall")?.checked || false;
    } else if (type === "goals") {
      p.goals = [...document.querySelectorAll('input[name="goal"]:checked')].map(input => input.value);
    } else if (type === "space") {
      p.space = [...document.querySelectorAll('input[name="space"]:checked')].map(input => input.value);
      p.spaceNotes = $("spaceNotes").value.trim();
    } else if (type === "nutrition") {
      p.nutrition = [...document.querySelectorAll('input[name="nutrition"]:checked')].map(input => input.value);
    } else if (type === "matchDay") {
      p.matchDay = readMatchDay();
    } else if (type === "recovery") {
      p.recovery = readRecovery();
    } else if (type === "guardian") {
      p.guardianEmail = $("guardianEmail").value.trim().toLowerCase();
      p.guardianEmailConfirm = $("guardianEmailConfirm").value.trim().toLowerCase();
    } else {
      p[key] = $("answer")?.value || "";
    }
  }

  function readMatchDay() {
    const notPlaying = $("notPlaying")?.checked || false;
    if (notPlaying) return { notPlaying: true };

    const val = id => $(id)?.value ?? "";
    const checked = id => $(id)?.checked ?? false;
    return {
      notPlaying: false,
      result: val("matchResult"),
      scoreline: val("scoreline").trim(),
      lineup: val("lineup"),
      position: val("playedPosition"),
      minutes: Number(val("minutes")) || 0,
      rpe: Number(val("rpe")) || 1,
      energy: Number(val("matchEnergy")) || 1,
      pain: checked("painToggle"),
      painDescription: val("painDescription").trim(),
      stats: {
        goals: Number(val("goalsScored")) || 0,
        assists: Number(val("assists")) || 0,
        saves: Number(val("saves")) || 0
      },
      confidence: Number(val("confidence")) || 1,
      didWell: val("didWell").trim(),
      practiseNext: val("practiseNext").trim(),
      coachQuestion: val("coachQuestion").trim()
    };
  }

  function readRecovery() {
    const selected = [...document.querySelectorAll('input[name="recoveryTopic"]:checked')].map(input => input.value);
    const val = id => $(id)?.value ?? "";
    const checked = name => document.querySelector(`input[name="${name}"]:checked`)?.value || "";
    return {
      topics: selected,
      energy: Number(val("energy")) || null,
      sleepQuality: val("sleepQuality"),
      sleepHours: Number(val("sleepHours")) || null,
      restChoice: checked("restChoice"),
      trainingRpe: Number(val("trainingRpe")) || null,
      progressNote: val("progressNote").trim(),
      coachNote: val("coachNote").trim()
    };
  }

  function validateCurrent() {
    const visible = getVisibleSteps();
    const [key, title, type] = visible[state.step];
    const p = state.profile;

    if (type === "date" && !p.dateOfBirth) return "Enter your date of birth.";
    if (type === "position" && !p.position && !p.coachCall) return "Choose one position, or ask Coach to help you explore.";
    if (type === "goals" && !(p.goals || []).length) return "Choose at least one area you want help with.";
    if (type === "guardian") {
      if (!p.guardianEmail || !p.guardianEmailConfirm) return "Enter and confirm the parent or guardian email.";
      if (p.guardianEmail !== p.guardianEmailConfirm) return "The parent or guardian email addresses do not match.";
    }
    if (type === "frequency" && !p.frequency) return "Choose how many times you train per week.";
    if (type === "duration" && !p.duration) return "Choose how long each training session goes for.";
    if (type === "country" && !p.country) return "Choose your country of residence.";
    if (type === "journey" && !p.journey) return "Choose the closest football journey option.";
    return "";
  }

  async function saveSetup() {
    if (!window.supabase?.createClient) throw new Error("Supabase did not load. Reload this page and try again.");

    const url = localStorage.getItem("saintsPitch.supabaseUrl");
    const key = localStorage.getItem("saintsPitch.publicKey");
    if (!url || !key) throw new Error("Connect your Supabase project from the sign-in page first.");

    const client = window.supabase.createClient(url, key);
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw sessionError;
    const user = sessionData.session?.user;
    if (!user) throw new Error("Sign in first, then return to player setup.");

    const age = ageFromDate(state.profile.dateOfBirth);
    const profile = {
      ...state.profile,
      age,
      guardianEmailConfirm: undefined,
      guardianApprovalStatus: age < 16 ? "pending" : "not_required",
      updatedAt: new Date().toISOString()
    };

    const { data: existing, error: readError } = await client
      .from("player_records")
      .select("data")
      .eq("player_id", user.id)
      .maybeSingle();

    if (readError) throw readError;

    const record = {
      ...(existing?.data || {}),
      profile,
      matchDayCheckIn: profile.matchDay || null,
      recoveryCheckIn: profile.recovery || null
    };

    const { error: saveError } = await client
      .from("player_records")
      .upsert({
        player_id: user.id,
        data: record,
        updated_at: new Date().toISOString()
      }, { onConflict: "player_id" });

    if (saveError) throw saveError;

    await client.auth.updateUser({
      data: { onboarding_started: true, onboarding_complete: true }
    });

    location.href = "index.html";
  }

  $("question").addEventListener("change", event => {
    if (event.target.id === "notPlaying") {
      const fields = $("matchFields");
      fields.hidden = event.target.checked;
    }

    if (event.target.id === "painToggle") {
      $("painDetails").hidden = !event.target.checked;
    }

    if (event.target.name === "recoveryTopic") {
      captureCurrent();
      renderQuestion();
    }

    if (event.target.type === "range") {
      const output = document.querySelector(`output[for="${event.target.id}"]`);
      if (output) output.value = event.target.value;
    }
  });

  $("question").addEventListener("click", event => {
    const stepButton = event.target.closest("[data-step]");
    if (stepButton) {
      const input = $(stepButton.dataset.step);
      const amount = Number(stepButton.dataset.change);
      const min = Number(input.min || 0);
      const max = Number(input.max || 999);
      input.value = Math.max(min, Math.min(max, Number(input.value || 0) + amount));
    }

    if (event.target.id === "explore") {
      $("explorePanel").hidden = false;
    }
  });

  $("back").addEventListener("click", () => {
    captureCurrent();
    if (state.step > 0) {
      state.step--;
      renderQuestion();
    }
  });

  $("continue").addEventListener("click", async () => {
    captureCurrent();

    const error = validateCurrent();
    if (error) return showMessage(error);

    const visible = getVisibleSteps();
    if (state.step < visible.length - 1) {
      state.step++;
      $("message").hidden = true;
      renderQuestion();
      return;
    }

    $("continue").disabled = true;
    $("continue").textContent = "Saving…";
    try {
      await saveSetup();
    } catch (error) {
      showMessage(error.message || "Could not save your setup.");
      $("continue").disabled = false;
      $("continue").textContent = "Save setup";
    }
  });

  renderQuestion();
})();
