import React from "react";
import Form from "../components/Form";


const Page: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">
        Greca Travel Form
      </h1>
      <Form />
    </div>
  );
};

export default Page;
