import axios from "axios";

export const registerStaff = newStaff => {
  return axios
    .post("/api/users/register", {
      username: newStaff.username,
      name: newStaff.name,
      password: newStaff.password,
      privilege: newStaff.privilege
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};

export const loginStaff = staff => {
  return axios
    .post("/api/users/login", {
      username: staff.username,
      password: staff.password
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data);
      console.log('SUCCESS');
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadStaff = () => {
  return axios
    .get("/api/users/allStaff")
    .then(res => {
      const staff = res.data.Item.staff;
      return staff;
    })
    .catch(err => console.log(err));
};
