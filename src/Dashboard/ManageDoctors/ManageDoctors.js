import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal'

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null)
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/doctors', {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      const data = await res.json()
      return data
    },
  })

  const closeModal = () => {
    setDeletingDoctor(null)
  }
  const handleDelete = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: 'delete',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch()
          alert(`Doctor ${doctor?.name} has been deleted`)
        }
        console.log(data)
      })
  }
  return (
    <div>
      <h2 className='text-3xl my-3'>Manage Doctors:{doctors.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id} className='hover'>
                <th>{i + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='w-20 mask mask-squircle'>
                      <img src={doctor?.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor='confirmModal'
                    className='btn btn-xs btn-error'
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmModal
          title={`Are you sure you want to Delete?`}
          message={`You are deleting ${deletingDoctor?.name}.After Deleting it connot be undone!`}
          closeModal={closeModal}
          sucessAction={handleDelete}
          modalData={deletingDoctor}
        ></ConfirmModal>
      )}
    </div>
  )
}

export default ManageDoctors
