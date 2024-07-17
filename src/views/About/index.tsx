import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import counter from "@/store/counter";
import search from "@/store/search";

export default observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/about?search=${search.value}`);
  }, [search.value]);

  return (
    <>
      <h2>AboutView</h2>
      <button onClick={counter.increment.bind(counter)}>
        count: {counter.count}
      </button>
      <br />
      <br />
      <label>
        Search:
        <input
          value={search.value}
          maxLength={20}
          onChange={(e) => search.update(e.target.value)}
        />{" "}
      </label>
    </>
  );
});
