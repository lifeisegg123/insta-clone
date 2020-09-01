import { timelines } from "../../common/mockData";
export default function getTimeLines(targetUserKey, targetUserFriends) {
  return timelines.filter(({ userKey }) => {
    return userKey === targetUserKey
      ? userKey
      : targetUserFriends.filter((key) => key === userKey);
  });
}
