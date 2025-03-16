function maskEmail(email){
    let idx=email.indexOf('@');
    
   let result= email.replace(email.slice(1,idx-1),'*'.repeat(idx-2));
   return result;
  }
  let email="sheakherpandey10@gmail.com";
  console.log(maskEmail(email))