export interface TrainerClass {
  kind: "Enum";
  name: "TrainerClass";
  members: [
    "bugCatcher",
    "camper",
    "picnicker",
    "psychic",
    "psychicMedium",
    "psychicYoungster",
    "sailor",
    "superNerd",
    "tamer",
    "teamRocketGrunt",
    "triathlete",
    "youngster",
    "youth",
  ];
  membersUnion:
    | "bugCatcher"
    | "camper"
    | "picnicker"
    | "psychic"
    | "psychicMedium"
    | "psychicYoungster"
    | "sailor"
    | "superNerd"
    | "tamer"
    | "teamRocketGrunt"
    | "triathlete"
    | "youngster"
    | "youth";
}
