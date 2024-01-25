import * as React from "react";

// Functional component representing a Terms section
const Term = () => {
  return (
    <div className="my-10">
      {/* Logo */}
      <img className="w-24 sm:w-36 mx-auto" src="/images/logo.png" />

      <div className="mx-8 mt-8">
        <div className="part">
          {/* Part 1 */}
          <div className="mb-4">
            <p>1) This site is enabled to allow to:</p>
            <p className="mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) access information on
              WorXInn.com
            </p>
            <p className="mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) temporarily register your
              interest in becoming a free member of Worxinn.com at a future
              date.
            </p>
          </div>

          {/* Part 2 */}
          <div className="mb-4">
            <p>
              2) Future date refers to the date when Worxinn.com is open to
              general membership registration on or before June 2024.
            </p>
          </div>

          {/* Part 3 */}
          <div className="mb-4">
            <p>
              3) If you opt to register we will store your details securely.
            </p>
          </div>

          {/* Part 4 */}
          <div className="mb-4">
            <p>4) We will remove ALL data before above date</p>
          </div>

          {/* Part 5 */}
          <div className="mb-4">
            <p>
              5) You will be invited to Register with Worxinn.com as a full
              member without charge for the life of the site.
            </p>
          </div>

          {/* Part 6 */}
          <div className="mb-4">
            <p>
              6) Communications: Worxinn.com may contact you by email from time
              to time before that date seeking your opinion on your experience
              with Worxinn and remote work in general.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
