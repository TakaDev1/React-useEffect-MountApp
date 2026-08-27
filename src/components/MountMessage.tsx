import React, { useEffect } from "react";

const MountMessage = () => {
  useEffect(() => {
    console.log("コンポーネントがマウントされました");
  }, []);
  return <div>マウント時の副作用</div>;
};

export default MountMessage;
