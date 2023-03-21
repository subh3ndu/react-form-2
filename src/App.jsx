import React from "react";

function App() {
  const [submitted, setSubmitted] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    language: "choose",
    zip: "",
    about: "",
  });

  function Result() {
    return (
      <div className="result">
        <div>Name: {state.name}</div>
        <div>Email: {state.email}</div>
        <div>Password: {state.password}</div>
        <div>Phone Number: {state.phone}</div>
        <div>Gender: {state.gender}</div>
        <div>Language: {state.language}</div>
        <div>Zip Code: {state.zip}</div>
        <div>About: {state.about}</div>
        <button onClick={() => setSubmitted(false)}>Close</button>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Your Email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />

          <label htmlFor="gender">Gender: </label>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="others">Others</label>
            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              onChange={handleChange}
            />
          </div>

          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={state.language}
            onChange={handleChange}
            placeholder="Select Language"
          >
            <option value="choose">Select language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="odia">Odia</option>
          </select>

          <label htmlFor="zip">Zip code:</label>
          <input
            type="tel"
            id="zip"
            name="zip"
            value={state.zip}
            onChange={handleChange}
          />

          <label htmlFor="about">About: </label>
          <textarea
            id="about"
            name="about"
            value={state.about}
            onChange={handleChange}
            placeholder="Write about yourself..."
          />
        </div>

        <button>Register</button>
      </form>

      {submitted && <Result />}
    </div>
  );
}

export default App;
