import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faImages, faUser, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (

    <header>

      <div className="w-full fixed bottom-0 px-8 py-5 shadow-inner">

        <div className="flex justify-between items-center ">
          {/* <div>
          <h1 className="font-poppins font-normal text-3xl">Dany Rivera</h1>
        </div>

        <button>
          <FontAwesomeIcon className="w-7" icon={faBars} />
        </button> */}
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center w-full py-8">

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-10" icon={faImages} />
              <p className="text-[18px]">Projects</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-9" icon={faUser} />
              <p className="text-[18px]">About</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-9" icon={faEnvelope} />
              <p className="text-[18px]">Contact</p>
            </div>

          </div>

          <div className="flex justify-end">
            <button>
              <FontAwesomeIcon className="w-5 mb-3" icon={faXmark} />
            </button>
          </div>

        </div>
        
      </div>


    </header>

  )
}

export default Header