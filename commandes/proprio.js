const {france}=require("../framework/france")







france({nomCom:"reboot",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only you motherf*cker");
  }

  const {exec}=require("child_process")

    repondre("*restarting bot......*");

  exec("pm2 restart all");
  

  



})
