import awesomeImg from "../imgs/awesome.jpg";
import boughtNewlaptopImg from "../imgs/boughtNewlaptop.jpg";
import inahotel1Img from "../imgs/inahotel1.jpg";
import inahotel2Img from "../imgs/inahotel2.jpg";
import tastegoodImg from "../imgs/tastegood.jpg";

const comments = [{ userKey: "102", nickname: "이몽룡", desc: "ㅇㅇㅇ" }];

export const timelines = [
  {
    userKey: 101,
    timelineKey: 10000,
    nickname: "김첨지",
    desc: "점심 맛있다",
    likes: 0,
    comments,
    imgs: [tastegoodImg],
  },
  {
    userKey: 102,
    timelineKey: 10001,
    nickname: "이몽룡",
    desc: "멋지다",
    likes: 10,
    comments,
    imgs: [awesomeImg],
  },
  {
    userKey: 101,
    timelineKey: 10002,
    nickname: "김첨지",
    desc: "호텔갔다",
    likes: 20,
    comments,
    imgs: [inahotel1Img, inahotel2Img],
  },
  {
    userKey: 102,
    timelineKey: 10003,
    nickname: "이몽룡",
    desc: "노트북 샀다",
    likes: 1000,
    comments,
    imgs: [boughtNewlaptopImg],
  },
];
export const users = [
  {
    userKey: 101,
    id: "test",
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
