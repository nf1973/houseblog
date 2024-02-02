import Dates from "./Dates";

import Milestones from "./Milestones";

const Aside = () => {
  return (
    <div className="justify-start p-4 min-w-96">
      <Dates />
      <Milestones />
    </div>
  );
};

export default Aside;
