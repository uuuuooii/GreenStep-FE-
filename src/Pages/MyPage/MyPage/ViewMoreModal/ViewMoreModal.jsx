import React from "react";
import "./ViewMoreModal.css";
import { useState } from "react";

const ViewMoreModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        dignissimos mollitia rem eaque, aliquam totam ipsam nisi iste iure
        quaerat esse veniam fugiat provident laudantium facere corrupti debitis?
        Cum, hic!
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          go modal
        </button>
        {modal ? (
          <>
            <div
              className="modal-background"
              onClick={() => {
                setModal(false);
              }}
            ></div>
            <div class="modal-box">
              Hello, this is modal window
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ViewMoreModal;
