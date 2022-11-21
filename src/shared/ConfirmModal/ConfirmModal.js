import React from 'react'

const ConfirmModal = ({
  title,
  message,
  closeModal,
  modalData,
  sucessAction,
}) => {
  return (
    <div>
      <input type='checkbox' id='confirmModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className='py-4'>{message}</p>
          <div className='modal-action'>
            <label
              onClick={() => sucessAction(modalData)}
              htmlFor='confirmModal'
              className='btn btn-xs btn-success'
            >
              Yes!
            </label>
            <label
              onClick={closeModal}
              htmlFor='confirmModal'
              className='btn btn-xs btn-outline'
            >
              No!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
