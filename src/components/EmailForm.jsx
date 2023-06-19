import { useState } from "react";

const mystyle={
    freenospam:{
        fontSize:'0.6rem',
        color:'#fff',
        fontWeight:'500',
        // textAlign:'space-around'
    },
    showme:{
        fontSize:'1.3rem',
        fontWeight:'bold',
        // color:'#000',
    },
    inputfield:{
        width:'60%',
        height:'40px',
        borderRadius:'5px',
        border:'2px solid black',
        outline:'none',
        paddingLeft:'10px',
        margin:'10px 0',
        marginRight:'10px',
        fontSize:'1rem',
        fontWeight:'500',
    },
    submitbutton:{
        height:'40px',
        borderRadius:'5px',
        border:'2px solid black',
        outline:'none',
        backgroundColor:'#000',
        color:'#fff',
        fontSize:'1rem',
    },
    thankyou:{
        fontSize:'1.3rem',
        fontWeight:'bold',
        // color:'#fff',
    }
}

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    // Handle email input change
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Here, you can perform validation for the email format if required
      // For simplicity, we'll assume any non-empty email is valid
  
      if (email.trim() !== '') {
        setSubmitted(true);
      }
    };
  
    return (
      <div className="container column-flex" style={{height:"100%",paddingLeft:" 0", paddingTop:"0"}}>
          <div style={mystyle.showme}>show me how it looks</div>
        {!submitted ? (
            <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              style={mystyle.inputfield}
            />
            <button type="submit" style={mystyle.submitbutton}>Register now</button>
          </form>
        ) : (
          <p style={mystyle.thankyou}>Thank you!</p>
        )}
        <p style={mystyle.freenospam}>Free - No Spam - No Data Sharing</p>
      </div>
    );
  };
  
  export default EmailForm;
  