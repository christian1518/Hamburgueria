import { useEffect, useRef } from "react"
import { ModalOverlay, ModalBox, CloseButton } from "./styles.js"


function Modal({children, setIsOpen}) {
  const modalRef = useRef(null)

  useEffect(() => {
    
    const handleOutClick = (event) => {
      if(!modalRef.current?.contains(event.target)){
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutClick)

    return () => {
      window.removeEventListener('mousedown', handleOutClick)
    }
  }, [])




  const buttonRef = useRef(null)

  useEffect(() => {

    const handleKeyDown = (event) => {
      if(event.key === 'Escape') {
        buttonRef.current?.click()
        console.log(event.key)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [])


  return (
    <ModalOverlay role="dialog">
      <ModalBox ref={modalRef}>
        <CloseButton ref={buttonRef} onClick={() => setIsOpen(false)}>X</CloseButton>
        {children}
      </ModalBox>
    </ModalOverlay>
  )
}

export default Modal