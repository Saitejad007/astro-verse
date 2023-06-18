import React from "react";

const Button = ({ text }: any) => {
  return (
    <>
      <button className="px-16 py-4 rounded-full bg-gradient-to-br from-cosmic-purple to-nebula-pink font-semibold outline-offset-2 hover:outline-dotted outline-stardust-silver">
        {text}
      </button>
    </>
  );
};

export default Button;
