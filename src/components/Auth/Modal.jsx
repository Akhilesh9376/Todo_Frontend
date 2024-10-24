
import { useState } from "react";
import Login from "./Login";

function Modal() {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleSingupOrLogin = () => {
    setIsLogin(!isLogin);
  };

  const closeModal = () => { //Login modal close karne ke liye
    const modal = document.getElementById("my_modal_3");
    modal.close();
    setIsLogin(true);
  };
 

  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className=""
        
        onClick={() => document.getElementById("my_modal_3").showModal()}
        >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-neutral-100">
          <form method="dialog">
            <button onClick={closeModal} className="text-black btn text-xl btn-md btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <Login isLogin={isLogin} handleSingupOrLogin={handleSingupOrLogin} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
