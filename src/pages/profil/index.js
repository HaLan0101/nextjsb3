import TitlePage from '../../components/TitlePage/TitlePage';
import userService from '../../services/user.service';
import React, {useState,useEffect} from "react";
import { useRouter } from "next/router";
import withAuth from '../../HOC/withAuth';
import Button from '../../components/Button';
const Index = () => {
    const router = useRouter();
    const [user, setUser] = useState();

    useEffect(() => {
          userService.getMe(localStorage.getItem('token'))
          .then((data) => {
            console.log(data,"DATA");
            setUser(data);
          })
          .catch((err) => console.log(err));      
      }, []);

    const logout=() =>{
        localStorage.removeItem('token');
        router.push("/");
    }
    return (
        <div>
            <TitlePage title="Profil" />
            <p>Hello {user && user.username}</p>
            <p>Email: {user && user.email}</p>
            <p>FirstName: {user && user.firstName}</p>
            <p>Lastname: {user && user.lastName}</p>
            <Button title="Logout" classes="btn btn_color-black" function={(e)=> logout(e)}></Button>
        </div>
    );
}

export default withAuth(Index);
