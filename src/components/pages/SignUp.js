import React from 'react';
import '../../App.css';

function SignUp() {
  return (
    <div>
      <img src="/images/staticbackground.webp" autoPlay loop muted></img>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <br />
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" name="email" required />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <label htmlFor="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />

      <label htmlFor="bible-preference">
        <b>Select Your Preferred Bible Version</b>
      </label>
      <select name="bible-types" id="bible">
        <option value="English Standard Version">
          English Standard Version
        </option>
        <option value="King James Version">King James Version</option>
        <option value="New International Version">NIV</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={true}
          name="remember"
          style={{ marginBottom: '15px' }}
        />{' '}
        Remember me
      </label>

      <p>
        By creating an account you agree to our{' '}
        <a href="#" style={{ color: 'dodgerblue' }}>
          Terms & Privacy
        </a>
        .
      </p>

      <div className="clearfix">
        <button
          type="button"
          onClick={() => {
            document.getElementById('id01').style.display = 'none';
          }}
          className="cancelbtn"
        >
          Cancel
        </button>
        <button type="submit" className="signup">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
