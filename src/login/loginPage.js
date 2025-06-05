import axios from "axios";
import { create } from "zustand";

const useLoginPage = create((set)=> ({
  accounts: [],
  account: null,
  actionFetchAccountByUserId: async (userId) => {
    const res = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/test`);
    console.log("res",res.data)
    set({accounts: res.data.account});
  },
}));

export default useLoginPage;