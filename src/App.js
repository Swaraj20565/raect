import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import MyComponent from './Loder';
const App = () => {
  const [data,setdata]=useState('');
  const [email,setemail]=useState('');
  const [emails,setemails]=useState('');
  const [password,setpassword]=useState('');
  const [username,setusername]=useState('');
  const [mobile,setMobile]=useState('');
  const [msg,setmsg]=useState('');
  const [colors,setcolor]=useState('');


  //jwt 
  const [jemail,setjemail]=useState('');
  const [jpassword,setjpassword]=useState('');
  const [jgetemail,setgetjemail]=useState('');
  const e='jj';
  useEffect(()=>{
    try {
      axios.get('http://localhost:8081/home',{params:{e:e}})
      .then((responce)=>{
          setdata(responce.data);
          console.log(responce.data);
      })
      .catch((err)=>{
         console.log(err);
      })
    } catch (error) {
      
    }
  },[])
  const soop = () => {
    try {
      axios.post('http://localhost:8081/homes', {
        emails: emails
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('upp');
          setmsg(res.data.msg);
          setcolor('green');
        } else {
          console.log('Status is not 200');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here
    }
  };
  

   //jwt handle 
   const jwthandle=(e)=>{
    e.preventDefault();
    try {
      axios.post('http://localhost:8081/jhome',{ email:jemail, password:jpassword },
      {
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then((res)=>{
        console.log(res.data.token);
        const token=res.data.token;
        localStorage.setItem('token',token)
      })
    }
    catch{

    }
   }

   const jwtgethandle=(e)=>{
    e.preventDefault();

    try {
      const token = localStorage.getItem('token')
      axios.get('http://localhost:8081/jgethome',{
        'Authorization': `Bearer ${token}`
      })
    }
    catch{

    }
   }

  const sert=(e)=>{
      e.preventDefault();
      try {
        axios.post('http://localhost:8081/home',
        {
          email:email,
          password:password,
          username:username,
          mobile:mobile,

        },{
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then((res)=>{console.log(res.mdg);})
        
      } catch (error) {
        
      }
      
      
  }
  const Handlessss=(e)=>{

    setemails(e.target.value);

    
    
  }
  const Handle=(e)=>{

    setemail(e.target.value);

    
    
  }

  const jHandle=(e)=>{

    setjemail(e.target.value);

    
    
  }
  const jgetHandle=(e)=>{

    setgetjemail(e.target.value);

    
    
  }
  const jHandles=(e)=>{
    setjpassword(e.target.value);
  }


  const Handles=(e)=>{
    setpassword(e.target.value);
  }


  const Handless=(e)=>{
    setusername(e.target.value);
  }
  const Handlesss=(e)=>{
    setMobile(e.target.value);
  }
  return (
    <>
       <div>
        Loading
        <MyComponent/>
       </div>
      <div className='er'>
        
        <div className='container'>
           
           <form>
           <h3 className='lcontainer'>Login</h3>
           <label htmlFor='Email' className='label'>Email
            <input  type='text'  value={email}  className='ll' onChange={Handle} placeholder='Enter the Email,,,' ></input>
 
           </label>          
           <label htmlFor='password' className='label'>Password
            <input  type='password' value={password} className='ll' onChange={Handles} placeholder='Enter the Password....'></input>
           </label> 
         
           <label htmlFor='username' className='label'>Username
            <input  type='text' value={username}  className='ll' onChange={Handless} placeholder='Enter the Username...'></input>
 
           </label>     
           <label htmlFor='Mobile' className='label'>Mobile
            <input  type='number' value={mobile} className='ll' onChange={Handlesss} placeholder='Enter the Mobile no.....'></input>
           </label>
           <label>
              <button onClick={sert}>Submit</button> 
           </label>
              
           </form>
           <div>
              
           </div>
           </div>
           <div>
             
           </div>
     </div>
     <div>
      {email}
      {password}
      {data.email}
     </div>

      <h1>Email are availble are not </h1>
      <label htmlFor='Email' className='label'>Email
            <input  type='text'  value={emails}  className='ll' onChange={Handlessss} placeholder='Enter the Email,,,' ></input>
             
           </label> 
           <button onClick={soop} >
              Save
             </button>
             <div><h3 style={{color:colors}}>{msg}</h3></div>



             <div>
               <h1>jwt token</h1>
               <h3 className='lcontainer'>Login</h3>
               <label htmlFor='Email' className='label'>Email
                  <input  type='text'  value={jemail}  className='ll' onChange={jHandle} placeholder='Enter the Email,,,' ></input>
 
                </label>          
               <label htmlFor='password' className='label'>Password
                  <input  type='password' value={jpassword} className='ll' onChange={jHandles} placeholder='Enter the Password....'></input>
               </label> 
               <button onClick={jwthandle}>Jwt Tokenization</button>
             </div>

             <div>

                <h3>Get request</h3>
                <label htmlFor='Email' className='label'>Email
                  <input  type='text'  value={jgetemail}  className='ll' onChange={jgetHandle} placeholder='Enter the Email...' >

                  </input>
                </label>
                <button onClick={jwtgethandle}>Jwt get</button> 

             </div>

             
             
             
      
    </>
  )
}

export default App