import { users } from "../../../common/mockData";

export default function login(id, password) {
  return new Promise((resolve, reject) => {
    let user = {};
    let flag = false;

    users.map((currentUser) => {
      if (id === currentUser.id && password === currentUser.password) {
        user = currentUser;
        flag = true;
      }
      if (flag) {
        resolve(user);
      } else {
        reject("error");
      }
    });
  });
}
