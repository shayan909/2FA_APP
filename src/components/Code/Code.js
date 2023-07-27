import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { CircularProgress, Box, Typography } from "@material-ui/core";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}s`}</Typography>
      </Box>
    </Box>
  );
}
const Code = observer(({ code, regenerateCode }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const initialTimeLeft = Math.round((code.expires - Date.now()) / 1000);
    setTimeLeft(initialTimeLeft);

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(interval);
          regenerateCode();
          return 60;
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [code.expires, regenerateCode]);

  return (
    <div className="code-container">
      <h2 className="code-name">{code.name}</h2>
      <h3 className="code-number">{code.number}</h3>
      <CircularProgressWithLabel value={timeLeft} />{" "}
    </div>
  );
});

export default Code;
