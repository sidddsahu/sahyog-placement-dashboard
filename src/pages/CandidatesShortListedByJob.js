import React, { useEffect } from 'react'
import { CandidateTable, CandidateTableByJob } from '../components/Tables'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { shortListedCandidateByJob } from '../features/candidate/candidateSlice'


const CandidateList = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(shortListedCandidateByJob(id))
    })
  return (
    <>
        <CandidateTableByJob/>
    </>
  )
}

export default CandidateList