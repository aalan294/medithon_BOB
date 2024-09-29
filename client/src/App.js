import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './PAGES/Home'
import AdminLogin from './PAGES/admin/AdminLogin'
import AdminDashBoard from './PAGES/admin/AdminDashBoard'
import NewDoctor from './PAGES/admin/NewDoctor'
import NewPharmacy from './PAGES/admin/NewPharmacy'

import NewReceptionist from './PAGES/admin/NewReceptionist'
import ReceptionLogin from './PAGES/reception/ReceptionLogin'
import ReceptionSearch from './PAGES/reception/ReceptionSearch'
import NewPatient from './PAGES/reception/NewPatient'
import NewPrescription from './PAGES/reception/NewPrescription'

import DoctorLogin from './PAGES/doctor/DoctorLogin'
import DoctorDashboard from './PAGES/doctor/DoctorDashboard'
import DoctorSearch from './PAGES/doctor/PatientSearch'
import DoctorAnalysis from './PAGES/doctor/PatientAnalysis'

import PharmacyLogin from './PAGES/pharmacy/PharmacyLogin'
import PharmacyDashboard from './PAGES/pharmacy/PharmacyDashboard'
import ScannerLogin from './PAGES/pharmacy/ScannerLogin'
import UpdatePrescription from './PAGES/pharmacy/UpdatePrescription'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>

        {/* admin Routes */}
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/dashboard' element={<AdminDashBoard/>} />
        <Route path='/admin/new-doc' element={<NewDoctor/>} />
        <Route path='/admin/new-pharm' element={<NewPharmacy/>} />
        <Route path='/admin/new-recep' element={<NewReceptionist/>} />

        {/* Reception Routes */}
        <Route path='/reception/login' element={<ReceptionLogin/>} />
        <Route path='/reception/dashboard' element={<ReceptionSearch/>} />
        <Route path='/reception/new-case' element={<NewPatient/>} />
        <Route path='/reception/old-case' element={<NewPrescription/>} />

        {/* Doctor Routes */}
        <Route path='/doctor/login' element={<DoctorLogin/>} />
        <Route path='/doctor/dashboard' element={<DoctorDashboard/>} />
        <Route path='/doctor/search' element={<DoctorSearch/>} />
        <Route path='/doctor/analyse' element={<DoctorAnalysis/>} />

        {/* Pharmacy Routes */}
        <Route path='/pharm/login' element={<PharmacyLogin/>} />
        <Route path='/pharm/dashboard' element={<PharmacyDashboard/>} />
        <Route path='/pharm/scanner/:id' element={<ScannerLogin/>} />
        <Route path='/pharm/complete-pres' element={<UpdatePrescription/>} />
      </Routes>
    </div>
  )
}

export default App