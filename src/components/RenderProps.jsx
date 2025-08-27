import React, { useEffect, useState } from "react";

function MouceTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      style={{ height: "500px", background: "#4057bbff" }}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {render(pos)}
    </div>
  );
}

function DataFetcher({ url, children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);

  return children(data);
}

function RenderProps() {
  return (
    <>
      <MouceTracker
        render={({ x, y }) => (
          <h3>
            Mouse Position: ({x}, {y})
          </h3>
        )}
      />
      <DataFetcher url="https://jsonplaceholder.typicode.com/users">
        {(data) =>
          data ? (
            <ul>
              {data.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )
        }
      </DataFetcher>
      <DataFetcher url="https://jsonplaceholder.typicode.com/users">
        {(data) =>
          data ? (
            <table border={1}>
              <tr>
                {data.map((u) => (
                  <td key={u.id}>{u.name}</td>
                ))}
              </tr>
            </table>
          ) : (
            <p>Loading...</p>
          )
        }
      </DataFetcher>
    </>
  );
}

export default RenderProps;
