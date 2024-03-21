import React from "react";

const page = () => {
  return (
    <div className="container">
      <header>
        <div>{"<"}Back</div>
        <div>Campaign Details</div>
        <div>Cancel</div>
      </header>

      <main>
        <div>
          <button>Add New Campaign</button>
        </div>

        <div>
          <button>Existing Campaigns</button>
          <button>Broadcast Messages</button>
        </div>

        <div>Existing Campaigns</div>

        <div>
          table
        </div>
      </main>

      <div>
        <div>1 |</div>
        <div>2 |</div>
        <div>3 |</div>
        <div>4 |</div>
        <div>5</div>
      </div>
    </div>
  );
};

export default page;
