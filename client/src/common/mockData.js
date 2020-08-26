const friends = [
  { name: "쯔위", age: 15 },
  { name: "수지", age: 20 },
  { name: "아이유", age: 25 },
  { name: "손나은", age: 30 },
];
const timelines = [
  { desc: "점심 맛있다", likes: 0 },
  { desc: "멋지다", likes: 10 },
  { desc: "호텔갔다", likes: 20 },
  { desc: "폰샀다", likes: 30 },
];
export const users = [
  { id: "test@naver.com", password: "1234", friends, timelines },
  { id: "dddd@naver.com", password: "1111", friends, timelines },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}
export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
