import React, {useState,useEffect} from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import userService from "../../services/user.service";
import { alertService } from "../../services/alert.service";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
const Index = () => {

  const [user, setUser] = useState({});
  const router = useRouter();
  const [showModal,setShowModal]= useState(false);

    const submitLogin = (e) => {
      e.preventDefault();
      console.log(user);
      userService.login(user)
        .then((data) => {
          console.log(data);
          if(data.error){
            setShowModal(true);
          }
          else{
            localStorage.setItem('token',data.jwt);
            router.push(`/profil`);
          }})
        .catch((err) => {
          setShowModal(true);
          console.log(err)});
    }
  return (
    <div className="page__login">
      <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
        <p>Email ou mot de passe est faux</p>
      </Modal>
      <form className="form" onSubmit={(e)=> submitLogin(e)}>
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre email"
          handleChange={ (e) => setUser({...user, identifier:e.target.value})}
              />
        <Input
          label="Mot de passe"
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre mot de passe"
          handleChange={(e) => setUser({...user, password:e.target.value})}
              />
        <Button title="envoyer" classes="btn btn__color-black" type="submit"/>
      </form>
    </div>
  );
};

export default Index;