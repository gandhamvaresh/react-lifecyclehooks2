import React,{useState, useEffect} from 'react';

const initprofile = {followers: null, public_repos: null}

function fetchData(){
const [profile, setProfile] = useState(initprofile);

async function getProfile(){
  const responce = await fetch('https://api.github.com/users/gandhamvaresh')
  const json = await responce.json();
  setProfile({followers: json.followers, public_repos: json.public_repos})
}

useEffect(()=>{
getProfile();
},[])

return <div>{`${profile.followers}   ${profile.public_repos}`}
 </div> 
}

export default fetchData;