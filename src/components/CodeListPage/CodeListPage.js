import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Code from "../Code/Code";
import codeStore from "../../store/codeStore";
import "../styles/styles.css";

const CodeListPage = observer(() => {
  return (
    <div className="codeList-container">
      {codeStore.codes.map((code) => (
        <Code
          key={code.id}
          code={code}
          regenerateCode={() => codeStore.regenerateCode(code.id)}
        />
      ))}

      <Link to="/add">
        <button className="addCode-button">Add</button>
      </Link>
    </div>
  );
});

export default CodeListPage;
