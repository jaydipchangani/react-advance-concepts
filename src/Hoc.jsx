import { useEffect, useState } from "react";

function withLogger(WrappedComponent) {
  return function (props) {
    console.log("Current props:", props);
    return <WrappedComponent {...props} />;
  };
}

function Button({ label }) {
  return <button>{label}</button>;
}

const LoggedButton = withLogger(Button);

function fetchData(WrappedComponent, url) {
  return function () {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    if (!data) return <h2>Loading....</h2>;

    return <WrappedComponent data={data} />;
  };
}

function userList({ data }) {
  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

const UserData = fetchData(
  userList,
  "https://jsonplaceholder.typicode.com/users"
);

function withAuth(WrappedComponent) {
  return function (props) {
    const isLogin = localStorage.getItem("auth") === "jaydiptest";

    if (!isLogin) return <p>Login First !!</p>;
    return <WrappedComponent {...props} />;
  };
}

function card() {
  return <h3>Card is here !!</h3>;
}

const CardWithAuth = withAuth(card);
export default function Hoc() {
  return (
    <>
      <h1>HOC here </h1>
      <LoggedButton label="Click me !!" />
      <UserData />
      <CardWithAuth />
    </>
  );
}
