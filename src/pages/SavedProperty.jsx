import { useEffect, useState } from "react";
import { getProperties } from "../utilities/utility";
import { Helmet } from "react-helmet-async";
import SavedCart from "../components/SavedCart";
import Empty from "../components/Empty";

const SavedProperty = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const storedProperties = getProperties();
    setProperty(storedProperties);
  }, []);
  if (property.length < 1) {
    return <Empty />;
  }
  // console.log(property);
  return (
    <div className="min-h-[calc(100vh-348px)] mt-10">
      <Helmet>
        <title>ApexPlace | Saved Property</title>
      </Helmet>
      {property.map((p) => (
        <SavedCart property={p} key={p.id}></SavedCart>
      ))}
    </div>
  );
};

export default SavedProperty;
