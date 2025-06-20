import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const Authocontext = createContext(null);

export const Authprovider = ({ children }) => {
  const [localtotken, setlocaltoken] = useState(localStorage.getItem("token"));

  const [persionInfo, setpersonInfo] = useState("");

  const Logout = () => {
    setpersonInfo("");
    setlocaltoken("");
    localStorage.removeItem("token");
  };
  const setToken = (token) => {
    setlocaltoken(token);
    localStorage.setItem("token", token);
  };
  const LogedIn = !!localtotken;
  const Tokne = `Bearer ${localtotken}`;

  console.log("LoggedIn", LogedIn);
  const personInfo = async () => {
    const res = await fetch("http://localhost:8000/api/user/persion", {
      method: "GET",
      headers: {
        Authorization: Tokne,
      },
    });
    const data = await res.json();
    if (res.ok) {
      // console.log("success", data);
      setpersonInfo(data);
    } else {
      console.log("err", data);
    }
  };

  useEffect(() => {
    personInfo();
  }, [localtotken]);
  return (
    <Authocontext.Provider
      value={{
        Logout,
        setToken,
        persionInfo,
        LogedIn,
      }}>
      {children}
    </Authocontext.Provider>
  );
};

export const useAuth = () => {
  const Authcon = useContext(Authocontext);
  if (!Authcon) {
    throw new error("out side of the elemnt");
  }
  return Authcon;
};
