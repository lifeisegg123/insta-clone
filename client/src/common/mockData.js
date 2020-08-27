export const timelines = [
  { userKey: 101, timelineKey: 10000, desc: "점심 맛있다", likes: 0 },
  { userKey: 101, timelineKey: 10001, desc: "멋지다", likes: 10 },
  { userKey: 102, timelineKey: 10002, desc: "호텔갔다", likes: 20 },
  { userKey: 102, timelineKey: 10003, desc: "폰샀다", likes: 30 },
];
export const users = [
  {
    userKey: 101,
    id: "test@naver.com",
    password: "1234",
    nickname: "김첨지",
    profileImage: "",
    friends: [102],
  },
  {
    userKey: 102,
    id: "dddd@naver.com",
    password: "1111",
    nickname: "이몽룡",
    profileImage: "",
    friends: [101],
  },
];
