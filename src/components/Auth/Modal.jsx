
import Login from "./Login";


function Modal({login}) {
  
  
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        
        { login }
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button 
                className="text-black btn text-xl btn-md btn-circle btn-ghost absolute right-2 top-2"
                
                >
              ✕
            </button>
        
          </form>
          <div className="">
            
               <Login />
              
               
          </div>
          
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
